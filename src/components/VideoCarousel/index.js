import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactPlayer from "react-player";
import "./index.css";

const videoList = [
  "https://www.youtube.com/watch?v=EZp7N1k1yjI",
  "https://www.youtube.com/watch?v=VCaoVgnDcN4",
];

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const playerRefs = useRef([]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % videoList.length);
    setIsPlaying(false); 
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? videoList.length - 1 : prev - 1));
    setIsPlaying(false);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  // 👉 NEW: Instantly rewind the video the moment it ends to block the YouTube overlay
  const handleVideoEnd = useCallback((index) => {
    const player = playerRefs.current[index];
    
    // Snap it back to 0:00 immediately
    if (player && typeof player.seekTo === "function") {
      player.seekTo(0, "seconds");
    }
    
    // Then trigger the slide
    handleNext();
  }, [handleNext]);

  // 👉 1. Increased delay to 7000ms (7 seconds)
  useEffect(() => {
    let interval;
    if (!isPlaying) {
      interval = setInterval(() => {
        handleNext();
      }, 7000); 
    }
    return () => clearInterval(interval);
  }, [isPlaying, handleNext]);

  // 👉 2. Silent reset now waits 500ms for the slide animation to finish
  useEffect(() => {
    const resetTimer = setTimeout(() => {
      playerRefs.current.forEach((player, idx) => {
        if (player && typeof player.seekTo === "function" && idx !== currentIndex) {
          player.seekTo(0, "seconds");
        }
      });
    }, 500); // Matches the CSS transition time

    return () => clearTimeout(resetTimer);
  }, [currentIndex]);

  return (
    <div className="video-section">
      <h3 className="video-heading">Watch Our Work in Action</h3>

      <div className="video-carousel-wrapper">
        <div className="video-dots">
          {videoList.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>

        <div className="video-carousel">
          {/* 👉 3. Added a 'video-track' wrapper to handle the sliding math */}
          <div 
            className="video-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {videoList.map((video, index) => (
              <div key={index} className="video-slide">
                <div className="video-player-box">
                  <ReactPlayer
                    ref={(el) => (playerRefs.current[index] = el)} 
                    src={video}
                    playing={index === currentIndex && isPlaying}
                    controls
                    width="100%"
                    height="100%"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => handleVideoEnd(index)}
                    config={{
                      youtube: {
                        playerVars: {
                          rel: 0,
                          modestbranding: 1,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="video-arrow prev" onClick={handlePrev}>❮</button>
        <button className="video-arrow next" onClick={handleNext}>❯</button>
      </div>
    </div>
  );
};

export default VideoCarousel;
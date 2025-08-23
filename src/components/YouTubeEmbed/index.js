import ReactPlayer from "react-player";
import "./index.css";

const YouTubeEmbed = () => {
  return (
    <div className="col-md-10 text-center">
      <h3 className="mb-4 our-work-heading">Watch Our Work in Action</h3>
      <div className="player-wrapper rounded shadow">
        <ReactPlayer
          src="https://www.youtube.com/watch?v=6EGL3gr_3yw"
          width="100%"
          height="100%"
          controls
          playing={false}
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      </div>
    </div>
  );
};

export default YouTubeEmbed;

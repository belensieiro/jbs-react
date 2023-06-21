

const VideoBanner = () => {
    return (
      <div className="video-container">
        <video className="fullscreen-video" autoPlay loop muted>
          <source src="/banner.mp4" type="video/mp4" />
        </video>
      </div>
    );
  };
  
  export default VideoBanner
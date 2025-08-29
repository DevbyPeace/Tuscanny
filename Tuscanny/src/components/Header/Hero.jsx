import "./Hero.css";

function Hero() {
  return (
    <div className="hero-box">
      <div className="text-box">
        <h1>Enjoy in the best way!</h1>
        <p>Enjoy our services for your trip anytime</p>
      </div>

      <div className="middle-box">
        <div className="top-box">
          <button
            className="public"
            onClick={() => console.log("Public Tours")}
          >
            Public Tours
          </button>
          <button
            className="private"
            onClick={() => console.log("Private Tours")}
          >
            Private Tours
          </button>
        </div>

        <div className="bottom-box">
          <div className="number-of-people">Number of people </div>
          <div className="date">Date </div>
          <div className="time">Time </div>
          <div className="tour">Tour</div>
          <div className="temperature">Temperature</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

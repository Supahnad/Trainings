import "./ui.css";

function Banner() {
  return (
    <div className="main-banner">
      <div className="row">
        <div className="col-lg-7">
          <div className="header-text">
            <h2>Welcome!</h2>
            <h4>
              <em>Browse</em> The Most Popular Games
            </h4>
            <div className="main-button">
              <a href="browse.html">Browse Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

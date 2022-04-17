import React from "react";

function Hero() {
  return (
    <div className="mb-3">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators ">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active "
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item">
            <img
              src="../Assets/Images/Hero3.jpg"
              className="imgCarousel d-block w-100 "
              alt="..."
            />
          </div>
          <div className="carousel-item active">
            <img
              src="../Assets/Images/Hero1.jpg"
              className="imgCarousel d-block w-100 "
              alt="..."
            />
            <div className="carousel-caption d-sm-block d-md-block">
              <h3>QS. Al-Baqarah : 212</h3>
              <p>
                Orang-orang yang telah kami berikan Al Kitab kepadanya, mereka
                membacanya dengan bacaan yang sebenarnya, mereka itu beriman
                kepadanya, dan barangsiapa yang ingkar kepadanya, maka mereka
                itulah orang-orang yang rugi.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="../Assets/Images/Hero2.jpg"
              className="imgCarousel d-block w-100 "
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev d-none "
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next d-none"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Hero;

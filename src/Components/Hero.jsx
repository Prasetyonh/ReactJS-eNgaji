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
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1596193433486-02333accdc13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
              src="https://img.freepik.com/free-photo/islamic-new-year-decoration-with-traditional-food-quran_23-2148950292.jpg?t=st=1649855672~exp=1649856272~hmac=0911920d4b66065de45c4e53a84d5793d819e4d7681b696ffaf6e2657a559ac2&w=1380"
              className="imgCarousel d-block w-100 "
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/islamic-new-year-decoration-with-traditional-pastries-praying-beads_23-2148950291.jpg?t=st=1649856295~exp=1649856895~hmac=597029b01c2813ae6f551a6ec4cd928cb886f8649cf414054c341687aa9c4b5c&w=1380"
              className="imgCarousel d-block w-100 "
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
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

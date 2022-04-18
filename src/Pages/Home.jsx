import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Components/Hero";

const Home = (props) => {
  return (
    <>
      <Hero />
      <div className="mb-5 mt-4">
        <div>
          <div className="menu text-center">
            <h1 className="mb-3">
              <strong>Home</strong>
            </h1>
            <div className="row justify-content-center">
              <div className="col-6 col-md-3 mb-3">
                <Link to={"/quran"}>
                  <img
                    className="icon-btn mb-3 shadow"
                    src="../Assets/Images/Quran.jpg"
                    alt=""
                    height="200"
                  />{" "}
                </Link>
                <h5>
                  <strong> Al-Qur'an</strong>
                </h5>{" "}
              </div>
              <div className="col-6 col-md-3 mb-3">
                <Link to="/jadwal-sholat">
                  <img
                    className="icon-btn mb-3 shadow"
                    src="../Assets/Images/Sholat.jpg"
                    alt=""
                    height="200"
                  />
                </Link>
                <h5>
                  <strong>Jadwal Sholat</strong>
                </h5>
              </div>
              <div className="col-6 col-md-3 mb-3">
                <Link to="/doa">
                  <img
                    className="icon-btn mb-3 shadow"
                    src="../Assets/Images/Doa.jpg"
                    alt=""
                    height="200"
                  />
                </Link>
                <h5>
                  <strong>Kumpulan Doa</strong>
                </h5>
              </div>
              <div className="col-6 col-md-3 d-md-none"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

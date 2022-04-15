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
            <h3 className="mb-3">
              <strong>Menu</strong>
            </h3>
            <div className="btn">
              <img
                className="icon-btn mb-3 shadow"
                src="https://i.pinimg.com/564x/6e/8d/b7/6e8db74284d3f1f3d5e64fa5b3afd60e.jpg"
                alt=""
                height="200"
                onClick={() => {
                  props.history.push("/quran");
                }}
              />
              <h5>
                <strong> Al-Qur'an</strong>
              </h5>
            </div>

            <div className="btn ">
              <Link to="/jadwal-sholat">
                <img
                  className="icon-btn mb-3 shadow"
                  src="https://i.pinimg.com/564x/b4/21/94/b42194c07f90266f1bd4695b60368210.jpg"
                  alt=""
                  height="200"
                />
              </Link>
              <h5>
                <strong>Jadwal Sholat</strong>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

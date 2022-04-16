import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faCircleArrowLeft,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const DetailKota = (props) => {
  const [data, setData] = useState([]);
  const [jadwal, setJadwal] = useState([]);
  var todaysDate = new Date();

  function convertDate(date) {
    let yyyy = date.getFullYear().toString();
    let mm = (date.getMonth() + 1).toString();
    let dd = date.getDate().toString();

    let mmChars = mm.split("");
    let ddChars = dd.split("");
    return (
      yyyy +
      "/" +
      (mmChars[1] ? mm : "0" + mmChars[0]) +
      "/" +
      (ddChars[1] ? dd : "0" + ddChars[0])
    );
  }

  function convertTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  const id = props.match.params.id;
  useEffect(() => {
    axios
      .get(
        `https://api.myquran.com/v1/sholat/jadwal/${id}/${convertDate(
          todaysDate
        )}`
      )
      .then((res) => {
        const data = res.data.data;
        setData(data);
        setJadwal(data.jadwal);
      });
  }, [id]);

  return (
    <div className="detail-kota overflow-auto">
      <div className=" mb-5">
        <div className="container">
          <div
            className="btn btn-dark mb-2"
            onClick={() => {
              props.history.push("/jadwal-sholat");
            }}
          >
            <FontAwesomeIcon icon={faCircleArrowLeft} /> {"  "}
            Back
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card card-detail-kota shadow">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <h3 className="card-title">
                        <strong>{data.daerah}</strong>
                      </h3>
                      <h5 className="card-title">{data.lokasi}</h5>
                    </div>
                    <div className="col-md-6">
                      <div className="float-end">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        {"   "}
                        {jadwal.tanggal} <br />
                        <div className="float-end">
                          {convertTime(todaysDate)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-5 mb-2">
          <div className="container">
            <div className="card card-waktu-sholat shadow">
              <div className="card-body">
                <h5 className="card-title">
                  <div className="row">
                    <div className="col-md-6">
                      <strong>Imsak</strong>{" "}
                    </div>
                    <div className="col-md-6">
                      <div className="float-end">
                        <FontAwesomeIcon icon={faClock} />
                        {"  "}
                        <strong>{jadwal.imsak}</strong>
                      </div>
                    </div>
                  </div>
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className=" mb-2">
          <div className="container">
            <div className="card card-waktu-sholat shadow">
              <div className="card-body">
                <h5 className="card-title">
                  <div className="row">
                    <div className="col-md-6">
                      <strong>Subuh</strong>{" "}
                    </div>
                    <div className="col-md-6">
                      <div className="float-end">
                        <FontAwesomeIcon icon={faClock} />
                        {"  "}
                        <strong>{jadwal.subuh}</strong>
                      </div>
                    </div>
                  </div>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className=" mb-2">
          <div className="container">
            <div className="card card-waktu-sholat shadow">
              <div className="card-body">
                <h5 className="card-title">
                  <div className="row">
                    <div className="col-md-6">
                      <strong>Dzuhur</strong>{" "}
                    </div>
                    <div className="col-md-6">
                      <div className="float-end">
                        <FontAwesomeIcon icon={faClock} />
                        {"  "}
                        <strong>{jadwal.dzuhur}</strong>
                      </div>
                    </div>
                  </div>
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className=" mb-2">
          <div className="container">
            <div className="card card-waktu-sholat shadow">
              <div className="card-body">
                <h5 className="card-title">
                  <div className="row">
                    <div className="col-md-6">
                      <strong>Ashar</strong>{" "}
                    </div>
                    <div className="col-md-6">
                      <div className="float-end">
                        <FontAwesomeIcon icon={faClock} />
                        {"  "}
                        <strong>{jadwal.ashar}</strong>
                      </div>
                    </div>
                  </div>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className=" mb-2">
          <div className="container">
            <div className="card card-waktu-sholat shadow">
              <div className="card-body">
                <h5 className="card-title">
                  <div className="row">
                    <div className="col-md-6">
                      <strong>Maghrib</strong>{" "}
                    </div>
                    <div className="col-md-6">
                      <div className="float-end">
                        <FontAwesomeIcon icon={faClock} />
                        {"  "}
                        <strong>{jadwal.maghrib}</strong>
                      </div>
                    </div>
                  </div>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className=" mb-2">
          <div className="container">
            <div className="card card-waktu-sholat shadow">
              <div className="card-body">
                <h5 className="card-title">
                  <div className="row">
                    <div className="col-md-6">
                      <strong>Isya</strong>{" "}
                    </div>
                    <div className="col-md-6">
                      <div className="float-end">
                        <FontAwesomeIcon icon={faClock} />
                        {"  "}
                        <strong>{jadwal.isya}</strong>
                      </div>
                    </div>
                  </div>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailKota;

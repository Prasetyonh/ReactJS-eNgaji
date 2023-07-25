import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const Detailsurat = (props) => {
  const [nama, setNama] = useState("");
  const [arti, setArti] = useState("");
  const [ayat, setAyat] = useState("");
  const [namaLatin, setNamaLatin] = useState("");
  const [jumlahAyat, setJumlahAyat] = useState("");
  const [audioFull, setAudioFull] = useState("");

  const id = props.match.params.id;

  useEffect(() => {
    axios
      .get(`https://equran.id/api/v2/surat/${id}`)
      .then((res) => {
        const data = res.data.data;
        console.log(data);
        setNamaLatin(data.namaLatin);
        setJumlahAyat(data.jumlahAyat);
        setNama(data.nama);
        setAyat(data.ayat);
        setArti(data.arti);
        setAudioFull(data.audioFull["05"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleAudioPlay = (audioUrl) => {
    const audio = audioRef.current;

    if (audio && audio.src === audioUrl) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      if (audio) {
        audio.pause();
      }
      audioRef.current = new Audio(audioUrl);
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="scroll overflow-auto">
      <div className=" mb-3">
        <div className="container">
          <div
            className="btn btn-dark mb-2"
            onClick={() => {
              props.history.push("/quran");
            }}
          >
            <FontAwesomeIcon icon={faCircleArrowLeft} /> {"  "}
            Back
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className=" card card-detail-surat shadow">
                <div className="card-body">
                  <h3 className="card-title">
                    {namaLatin} - ({nama})
                  </h3>
                  <span className="card-text">Arti : {arti}</span>
                  <div
                    className="btn btn-success rounded-pill float-end  mt-3"
                    onClick={() => {
                      props.history.push(`/quran/tafsir/${id}`);
                    }}
                  >
                    <FontAwesomeIcon icon={faBookOpen} /> Baca Tafsir
                  </div>
                  <p className="card-text">Jumlah Ayat : {jumlahAyat}</p>{" "}
                  <span>
                    <audio
                      className="audio-player float-end"
                      controls
                      src={audioFull}
                    ></audio>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container detail-ayat">
        <div className="row">
          <div className="col-md-12">
            {ayat.length > 0 ? (
              ayat.map((param) => {
                return (
                  <div className="mb-2" key={param.nomor}>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="card card-ayat shadow">
                          <div className="card-body">
                            <h3 className="card-title">
                              {" "}
                              <strong className="badge rounded-pill bg-dark text-light">
                                {param.nomorAyat}
                              </strong>
                            </h3>

                            <h4
                              className="text-end"
                              onClick={() => handleAudioPlay(param.audio["05"])}
                              style={{ cursor: "pointer" }}
                            >
                              {param.teksArab}
                            </h4>
                            <p className="text-end">{param.teksLatin}</p>
                            <p className="card-text">{param.teksIndonesia}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="d-flex align-items-center">
                <h1>Loading</h1>
                <div className="ms-3 justify-content-center">
                  <div className="spinner-border text-dark" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailsurat;

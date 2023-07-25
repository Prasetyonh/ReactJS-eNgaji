import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const Tafsir = (props) => {
  const [nama, setNama] = useState("");
  const [arti, setArti] = useState("");
  const [namaLatin, setNamaLatin] = useState("");
  const [jumlahAyat, setJumlahAyat] = useState("");
  const [tafsir, setTafsir] = useState([]);
  const [suratKe, setSuratKe] = useState([]);
  const [tempatTurun, setTempatTurun] = useState([]);

  const id = props.match.params.id;
  useEffect(() => {
    axios
      .get(`https://equran.id/api/v2/tafsir/${id}`)
      .then((res) => {
        const data = res.data.data;
        console.log(data);
        setNamaLatin(data.namaLatin);
        setJumlahAyat(data.jumlahAyat);
        setNama(data.nama);
        setArti(data.arti);
        setSuratKe(data.nomor);
        setTafsir(data.tafsir);
        setTempatTurun(data.tempatTurun);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div className="scroll overflow-auto">
      <div className="detail-surat mb-3">
        <div className="container">
          <div
            className="btn btn-dark mb-2"
            onClick={() => {
              props.history.goBack();
            }}
          >
            <FontAwesomeIcon icon={faCircleArrowLeft} /> {"  "}
            Back
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card card-surat shadow">
                <div className="card-body">
                  <h3 className="card-title">
                    {namaLatin} - ({nama})
                  </h3>
                  <span className="card-text">Arti : {arti}</span> <br />
                  <span>Surat ke : {suratKe}</span> <br />
                  <span className="card-text">
                    Jumlah Ayat : {jumlahAyat}
                  </span>{" "}
                  <br />
                  <span className="text-capitalize">
                    Tempat Turun : {tempatTurun}
                  </span>
                  <div
                    className="btn btn-success rounded-pill float-end  mt-3"
                    onClick={() => {
                      props.history.push(`/quran/surat/${id}`);
                    }}
                  >
                    <FontAwesomeIcon icon={faBookOpen} /> Baca Surat
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {tafsir.length > 0 ? (
              tafsir.map((param) => {
                return (
                  <div className="mb-2" key={param.nomor}>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="card card-ayat shadow">
                          <div className="card-body">
                            <h3 className="card-title">
                              {" "}
                              <strong className="badge rounded-pill bg-dark text-light">
                                {param.nomor}
                              </strong>
                            </h3>
                            <strong>Ayat {param.ayat}</strong>
                            <p className="card-text">{param.teks}</p>
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

export default Tafsir;

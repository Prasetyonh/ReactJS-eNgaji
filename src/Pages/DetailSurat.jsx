import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

const Detailsurat = (props) => {
  const [data, setData] = useState({});
  const [nama, setNama] = useState("");
  const [arti, setArti] = useState("");
  const [ayat, setAyat] = useState("");
  const [namaLatin, setNamaLatin] = useState("");
  const [jumlahAyat, setJumlahAyat] = useState("");

  const id = props.match.params.id;

  useEffect(() => {
    axios
      .get(`https://equran.id/api/surat/${id}/`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setNamaLatin(res.data.nama_latin);
        setJumlahAyat(res.data.jumlah_ayat);
        setNama(res.data.nama);
        setAyat(res.data.ayat);
        setArti(res.data.arti);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="scroll overflow-auto">
      <div className=" mb-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card shadow">
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
                      src={data.audio}
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
                                {param.nomor}
                              </strong>
                            </h3>
                            <h4 className="text-end">{param.ar}</h4>
                            <p className="card-text">{param.idn}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailsurat;

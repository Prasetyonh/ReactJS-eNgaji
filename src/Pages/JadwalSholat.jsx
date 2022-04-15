import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import axios from "axios";

import DaftarKota from "../Components/DaftarKota";

const JadwalSholat = (props) => {
  const [kotas, setKotas] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.myquran.com/v1/sholat/kota/semua")
      .then((res) => {
        const kotas = res.data;
        console.log(kotas);
        setKotas(kotas);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const detailKota = (id) => {
    props.history.push(`/jadwal-sholat/detail/${id}`);
  };

  return (
    <div>
      <h2 className="text-center mt-2 ">Waktu Sholat Indonesia</h2>
      <Form className="d-flex mb-3">
        <FormControl
          type="search"
          placeholder="Cari Kota"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </Form>
      <div className="daftarSurat overflow-auto pb-3">
        {kotas &&
          kotas.map((kota, idx) => (
            <DaftarKota key={idx} kota={kota} detailKota={detailKota} />
          ))}
      </div>
    </div>
  );
};

export default JadwalSholat;

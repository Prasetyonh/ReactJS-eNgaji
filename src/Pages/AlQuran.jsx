import React, { useEffect, useState } from "react";
import DaftarSurat from "../Components/DaftarSurat";

import axios from "axios";
import { Button, Form, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const AlQuran = (props) => {
  const [surats, setSurats] = useState([]);

  useEffect(() => {
    axios
      .get("https://equran.id/api/surat")
      .then((res) => {
        const surats = res.data;
        setSurats(surats);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const detailSurat = (id) => {
    props.history.push(`/quran/surat/${id}`);
  };

  return (
    <div>
      <h2 className="text-center mt-2 ">Surat</h2>
      <Form className="d-flex mb-3">
        <FormControl
          type="search"
          placeholder="Cari Surat"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </Form>
      <div className="daftarSurat overflow-auto pb-3">
        {surats &&
          surats.map((surat, idx) => (
            <DaftarSurat key={idx} surat={surat} goDetail={detailSurat} />
          ))}
      </div>
    </div>
  );
};

export default AlQuran;

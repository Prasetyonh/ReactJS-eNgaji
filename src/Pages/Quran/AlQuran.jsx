import React, { useEffect, useState } from "react";
import DaftarSurat from "../../Components/DaftarSurat";

import axios from "axios";
import { Button, Form, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const AlQuran = (props) => {
  const [surats, setSurats] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://equran.id/api/v2/surat")
      .then((res) => {
        const surats = res.data.data;
        console.log(surats);
        setSurats(surats);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="outline-success">
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </Form>
      <div className="daftarSurat overflow-auto pb-3">
        {surats.length > 0 ? (
          surats
            // eslint-disable-next-line array-callback-return
            .filter((value) => {
              if (search === "") {
                return value;
              } else if (
                value.nama_latin.toLowerCase().includes(search.toLowerCase())
              ) {
                return value;
              }
            })
            .map((surat, idx) => (
              <DaftarSurat key={idx} surat={surat} goDetail={detailSurat} />
            ))
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
  );
};

export default AlQuran;

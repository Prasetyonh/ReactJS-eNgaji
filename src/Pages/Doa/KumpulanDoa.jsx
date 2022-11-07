import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import axios from "axios";

import DaftarDoa from "../../Components/DaftarDoa";

const KumpulanDoa = (props) => {
  const [doa, setDoa] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://625c6621c9e78a8cb9b779da.mockapi.io/prasetyonh/kumpulandoa")
      .then((res) => {
        const doa = res.data[0].data;
        console.log(res.data[0].data);
        setDoa(doa);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center mt-2 ">Kumpulan Doa Sehari-hari</h2>
      <Form className="d-flex mb-3">
        <FormControl
          type="search"
          placeholder="Cari Doa"
          className="me-2"
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="outline-success">
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </Form>
      <div className="daftarSurat overflow-auto pb-3">
        {doa.length > 0 ? (
          doa
            // eslint-disable-next-line array-callback-return
            .filter((value) => {
              if (search === "") {
                return value;
              } else if (
                value.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return value;
              }
            })

            .map((doa) => {
              return <DaftarDoa key={doa.title} doa={doa} />;
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
  );
};

export default KumpulanDoa;

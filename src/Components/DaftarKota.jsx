import React from "react";
import { Card } from "react-bootstrap";

const DaftarSurat = ({ kota, detailKota }) => {
  return (
    <div>
      <div className="col-md-6 col-lg-4 mb-3 float-md-start">
        <Card
          className="card-surat m-2 shadow"
          onClick={() => {
            detailKota(kota.id);
          }}
        >
          <Card.Body>
            <Card.Title>
              <p>{kota.lokasi}</p>{" "}
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default DaftarSurat;

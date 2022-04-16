import React from "react";
import { Card } from "react-bootstrap";

const DaftarSurat = ({ surat, goDetail }) => {
  return (
    <div>
      <div className="col-md-6 col-lg-4 mb-3 float-md-start">
        <Card
          className="card-surat m-2 shadow"
          onClick={() => goDetail(surat.nomor)}
        >
          <Card.Body>
            <div className="badge-nomor-surat float-end">
              <strong className="badge rounded-pill ">{surat.nomor}</strong>
            </div>
            <Card.Title>
              {surat.nama_latin} <strong>({surat.nama}</strong> ){" "}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted fst-italic">
              '{surat.arti}'
            </Card.Subtitle>
            <Card.Text>{surat.jumlah_ayat} ayat</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default DaftarSurat;

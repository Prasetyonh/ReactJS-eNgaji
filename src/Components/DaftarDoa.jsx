import React from "react";

const DaftarSurat = ({ doa }) => {
  return (
    <div>
      <div className="card card-ayat">
        <h3>{doa.title}</h3>
        <hr />
        <h4>{doa.arabic}</h4>
        <p className="fst-italic">{doa.latin}</p>
        <p>{doa.translation}</p>
      </div>
    </div>
  );
};

export default DaftarSurat;

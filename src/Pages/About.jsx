import React from "react";
import Contact from "../Components/ContactUs";

const about = () => {
  return (
    <div id="about">
      <section id="tentang-kami" className="pt-3">
        <h2>About Us</h2>
        <p>
          e-Ngaji dibangun pada tahun 2022. Website ini bertujuan untuk
          memberikan kemudahan bagi siapa saja untuk membaca, mempelajari, dan
          mendengarkan Al Quran. Website ini juga tersedia fitur kumpulan doa
          sehari-hari, dan jadwal sholat untuk setiap kota di Indonesia{" "}
        </p>
      </section>
      <section id="kredit">
        <h2>Credits</h2>
        <p>
          Project ini tidak akan mungkin terjadi tanpa banyak open source
          libraries dan public API yang telah kami gunakan :{" "}
        </p>
        <ul>
          <li>
            <a href="https://equran.id/apidev">equran.id</a> : Sebuah public API
            yang menyediakan data Al Quran.
          </li>
          <li>
            <a href="https://api.myquran.com/">api.myquran.com</a> : Sebuah
            public API yang menyediakan data Al Quran, dan juga jadwal sholat di
            setiap kota di Indonesia.
          </li>
          <li>
            <a href="https://github.com/axios/axios">Axios</a> : Merupakan klien
            HTTP berbasis promise sederhana untuk browser dan node.js. Axios
            menyediakan library yang mudah digunakan dalam paket kecil dengan
            antarmuka yang sangat dapat diperluas.
          </li>
          <li>
            <a href="https://vercel.com">Vercel</a> : Merupakan salah satu
            penyedia layanan hosting gratis
          </li>
        </ul>
      </section>

      <section>
        <Contact />
      </section>
    </div>
  );
};

export default about;

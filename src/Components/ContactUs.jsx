import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobeAsia,
  faLocationDot,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useRef } from "react";

const ContactUs = () => {
  const formRef = useRef(null);
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbwH7yhBJc8u6pwjK4qqgZRBEs_nhZWWyZLxzGc9n64dNaVNcAwblHhYd7RZxalQeGEc/exec";
  const myAlert = document.querySelector(".alert");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(scriptUrl, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then((res) => {
        console.log("SUCCESSFULLY SUBMITTED");
        setLoading(false);
        myAlert.classList.toggle("d-none");
        formRef.current.reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-2">Contact Us</h2>
          <ul>
            {" "}
            <p>
              <li>
                <FontAwesomeIcon icon={faLocationDot} /> Banjarnegara, Indonesia
              </li>
            </p>
            <p>
              <li>
                <FontAwesomeIcon icon={faMailBulk} />{" "}
                prasetyonurhidayat@gmail.com
              </li>
            </p>
            <p>
              <li>
                <FontAwesomeIcon icon={faGlobeAsia} /> yotech.my.id
              </li>
            </p>
          </ul>
        </div>

        <div className="col-md-6" style={{ padding: 30 }}>
          <form
            method="post"
            onSubmit={handleSubmit}
            ref={formRef}
            name="Contact-Form"
          >
            <div className="form-group mb-3">
              <div
                class="alert alert-success alert-dismissible fade show d-none "
                role="alert"
              >
                <strong class="fw-bold">Terima kasih!</strong> Pesan Anda sudah
                kami terima.
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="close"
                ></button>
              </div>
              <input
                type="text"
                className="form-control"
                name="nama"
                placeholder="Name"
                required
              />
            </div>

            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="pesan"
                placeholder="Message"
                className="form-control"
                cols="30"
                rows="7"
                required
              ></textarea>
            </div>

            <input
              className="btn btn-primary btn-block mt-2"
              type="submit"
              value={loading ? "Loading..." : "SEND MESSAGE"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

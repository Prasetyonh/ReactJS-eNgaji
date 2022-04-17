import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobeAsia,
  faLocationDot,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useRef } from "react";
import Swal from "sweetalert2";

const ContactUs = () => {
  const formRef = useRef(null);
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbwH7yhBJc8u6pwjK4qqgZRBEs_nhZWWyZLxzGc9n64dNaVNcAwblHhYd7RZxalQeGEc/exec";
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(scriptUrl, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then(() => {
        console.log("SUCCESSFULLY SUBMITTED");
        setLoading(false);
        Swal.fire({
          title: "Terima kasih",
          text: "Pesan anda telah kami terima",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#0d6efd",
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
          showConfirmButton: true,
          showCancelButton: false,
          showCloseButton: false,
          timer: 5000,
          timerProgressBar: true,
        });

        formRef.current.reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-2">Contact Us</h2>
          <ul className="contact">
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

        <div className="col-md-6">
          <h2>Send Us a Message</h2>
          <form
            method="post"
            onSubmit={handleSubmit}
            ref={formRef}
            name="Contact-Form"
            id="Contact-Form"
            className="px-3 mb-5"
          >
            <div className="form-group mb-3">
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
              id="submit"
              className="btn btn-primary btn-block mt-2"
              type="submit"
              value={loading ? "Loading..." : "SEND MESSAGE"}
            />
            <button
              className="btn btn-danger btn-loading d-none"
              type="button"
              disabled
            >
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

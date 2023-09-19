import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { AiOutlineHome } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import {
  AiOutlineMail,
  AiOutlineInfoCircle,
} from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15891.318215123538!2d-2.7880279033104207!3d5.289275862637994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc2bdf6b0f26b47%3A0x9e98811fb960832d!2sElubo!5e0!3m2!1sen!2sgh!4v1694512026594!5m2!1sen!2sgh"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between ">
                <div>
                  <h3 className="contact-title mb-4">Contact </h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                      />
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15">
                        <AiOutlineHome className="fs-5" />
                        <address className="mb-0">
                          Hse 1 Amamamo Street,Elubo
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15">
                        <BiPhoneCall className="fs-5" />
                        <a href="tel:+233 279038909">+233 279038909</a>
                      </li>
                      <li className="mb-3 d-flex gap-15">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:egardener11@gmail.com">
                          egardener11@gmail.com
                        </a>
                      </li>

                      <li className="mb-3 d-flex gap-15">
                        <AiOutlineInfoCircle className="fs-5" />
                        <p className="mb-0">Monday - Friday 11am - 8PM </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card  position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch1.jpeg"
                    className="img-fluid w-100"
                    alt=""
                  />
                </div>
                <div className=" py-3 px-3">
                  <h5 className="title">
                    Apple Watch Series 9 runs watchOS 10
                  </h5>
                  <h6 className="price">$200</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card  position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch3.jpeg"
                    className="img-fluid w-100"
                    alt=""
                  />
                </div>
                <div className=" py-3 px-3">
                  <h5 className="title">
                    Apple Watch Series 9 runs watchOS 10
                  </h5>
                  <h6 className="price">$200</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card  position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch2.jpeg"
                    className="img-fluid w-100"
                    alt=""
                  />
                </div>
                <div className=" py-3 px-3">
                  <h5 className="title">
                    Apple Watch Series 9 runs watchOS 10
                  </h5>
                  <h6 className="price">$200</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card  position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/pad.jpeg"
                    className="img-fluid w-100"
                    alt=""
                  />
                </div>
                <div className=" py-3 px-3">
                  <h5 className="title">The Ucom USB Wireless Game Pad</h5>
                  <h6 className="price">$200</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;

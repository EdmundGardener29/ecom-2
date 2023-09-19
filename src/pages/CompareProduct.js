import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Product"} />
      <BreadCrumb title="Compare Product" />
      <div className="compare-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/camera.jpg" alt="watch" />
                  <div className="compare-product-details">
                    <h5 className="title">Digital Cameras for Photography</h5>
                    <h6 className="price mb-3 mt-3">$100</h6>
                    <div>
                      <div className="product-detail">
                        <h5>Brand:</h5>
                        <p>Digital Camera</p>
                      </div>
                      <div className="product-detail">
                        <h5>Type:</h5>
                        <p>Camera</p>
                      </div>
                      <div className="product-detail">
                        <h5>SKU:</h5>
                        <p>SKU033</p>
                      </div>
                      <div className="product-detail">
                        <h5>Availability:</h5>
                        <p>In Stock</p>
                      </div>
                      <div className="product-detail">
                        <h5>Color:</h5>
                        <Color />
                      </div>
                      <div className="product-detail">
                        <h5>Size:</h5>
                        <div className="d-flex gap-10">
                          <p>S</p>
                          <p>M</p>
                          <p>L</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/headphone.jpg" alt="watch" />
                  <div className="compare-product-details">
                    <h5 className="title">Enjoy premium sound quality</h5>
                    <h6 className="price mb-3 mt-3">$100</h6>
                    <div>
                      <div className="product-detail">
                        <h5>Brand:</h5>
                        <p>Premium Sound Quality </p>
                      </div>
                      <div className="product-detail">
                        <h5>Type:</h5>
                        <p>Watch</p>
                      </div>
                      <div className="product-detail">
                        <h5>SKU:</h5>
                        <p>SKU033</p>
                      </div>
                      <div className="product-detail">
                        <h5>Availability:</h5>
                        <p>In Stock</p>
                      </div>
                      <div className="product-detail">
                        <h5>Color:</h5>
                        <Color />
                      </div>
                      <div className="product-detail">
                        <h5>Size:</h5>
                        <div className="d-flex gap-10">
                          <p>S</p>
                          <p>M</p>
                          <p>L</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/homeapp.jpg" alt="watch" />
                  <div className="compare-product-details">
                    <h5 className="title">Shop for toasters & sandwich</h5>
                    <h6 className="price mb-3 mt-3">$100</h6>
                    <div>
                      <div className="product-detail">
                        <h5>Brand:</h5>
                        <p>Toasters Machine</p>
                      </div>
                      <div className="product-detail">
                        <h5>Type:</h5>
                        <p>Toaster</p>
                      </div>
                      <div className="product-detail">
                        <h5>SKU:</h5>
                        <p>SKU033</p>
                      </div>
                      <div className="product-detail">
                        <h5>Availability:</h5>
                        <p>In Stock</p>
                      </div>
                      <div className="product-detail">
                        <h5>Color:</h5>
                        <Color />
                      </div>
                      <div className="product-detail">
                        <h5>Size:</h5>
                        <div className="d-flex gap-10">
                          <p>S</p>
                          <p>M</p>
                          <p>L</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/acc.jpg" alt="watch" />
                  <div className="compare-product-details">
                    <h5 className="title">Apple Premium AirPods Pro</h5>
                    <h6 className="price mb-3 mt-3">$100</h6>
                    <div>
                      <div className="product-detail">
                        <h5>Brand:</h5>
                        <p>AirPods Pro</p>
                      </div>
                      <div className="product-detail">
                        <h5>Type:</h5>
                        <p>AirPods </p>
                      </div>
                      <div className="product-detail">
                        <h5>SKU:</h5>
                        <p>SKU033</p>
                      </div>
                      <div className="product-detail">
                        <h5>Availability:</h5>
                        <p>In Stock</p>
                      </div>
                      <div className="product-detail">
                        <h5>Color:</h5>
                        <Color />
                      </div>
                      <div className="product-detail">
                        <h5>Size:</h5>
                        <div className="d-flex gap-10">
                          <p>S</p>
                          <p>M</p>
                          <p>L</p>
                        </div>
                      </div>
                    </div>
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

export default CompareProduct;

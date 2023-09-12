import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div
        className={` ${
          location.pathname == "/store" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="add-cart" />
            </Link>
          </div>
          <div className="product-image">
            <img src="images/watch1.png" className="img-fluid" alt="product" />
            <img src="images/watch2.jpeg" className="img-fluid" alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havel's</h6>
            <h5 className="product-title">
              10 Pack multi colored Accessories for students
            </h5>
            <ReactStars count={5} size={24} value={3} activeColor="#ffd700" />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Sometimes called earphones, headphones are a hardware output
              device that connect to a computer line out or speakers port or
              wirelessly with Bluetooth.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="add-cart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={` ${
          // eslint-disable-next-line eqeqeq
          location.pathname == "/store" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="add-cart" />
            </Link>
          </div>
          <div className="product-image">
            <img src="images/watch1.png" className="img-fluid" alt="product" />
            <img src="images/watch2.jpeg" className="img-fluid" alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havel's</h6>
            <h5 className="product-title">
              10 Pack multi colored Accessories for students
            </h5>
            <ReactStars count={5} size={24} value={3} activeColor="#ffd700" />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Sometimes called earphones, headphones are a hardware output
              device that connect to a computer line out or speakers port or
              wirelessly with Bluetooth.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="add-cart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;

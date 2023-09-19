import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import {BsArrowLeftSquare} from 'react-icons/bs'

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Single Blog"} />
      <BreadCrumb title="Single Blog" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to='/blogs' className="d-flex align-items-center gap-10" > <BsArrowLeftSquare className="fs-4" /> Go back to Blogs</Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img src="images/blog-1" alt="blog" />
                <p>
                  The Meta Quest 2 is a groundbreaking virtual reality (VR)
                  headset that takes your gaming and entertainment experiences
                  to new heights. With its impressive
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;

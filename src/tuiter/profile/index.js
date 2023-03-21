import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
  const profile = useSelector((state) => state.profile);

  return (
    <>
      <div className="row d-flex">
        <div className="col-1 d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="col-10">
          <div className="fw-bolder"> &nbsp; Alice Wonderland</div>
          <div className="text-secondary"> &nbsp; 6,114 Tweets</div>
        </div>
      </div>
      <div className="position-relative">
      <img
        src={`../../images/${profile.bannerPicture}`}
        width="100%"
        height="50%"
      />
      <div className="row">
        <div className="col col-9">
          <img
            className="position-absolute rounded-circle bottom-0 ms-3" 
            height="40%"
            width="20%"
            src={`../../images/${profile.profilePicture}`}
          />
        </div>
        <div className="col col-3">
          <Link to="/tuiter/edit-profile">
            <button className="btn btn-light fw-bold rounded-pill float-end mt-2">
              Edit Profile
            </button>
          </Link>
        </div>
      </div>
      </div>
    </>
  );
};
export default ProfileComponent;

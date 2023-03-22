import React from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCake } from "@fortawesome/free-solid-svg-icons";
import { faMap, faCalendar, } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const ProfileComponent = () => {
  const profile = useSelector((state) => state.profile);
  let navigate = useNavigate();
  return (
    <>
      <div className="row d-flex">
        <div className="col-1 d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faArrowLeft} onClick={()=> navigate("/tuiter/home")}/>
        </div>
        <div className="col-10">
          <div className="fw-bolder">
            {" "}
            &nbsp; {`${profile.firstName} ${profile.lastName}`}
          </div>
          <div className="text-secondary"> &nbsp; 6,114 Tweets</div>
        </div>
      </div>
      <div className="position-relative">
        <img
          src={`../../images/${profile.bannerPicture}`}
          width="100%"
          height="40%"
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
      <div className="mt-2">
        <div className="fw-bolder">{`${profile.firstName} ${profile.lastName}`}</div>
        <div className="text-secondary">{profile.handle}</div>
        <div className="mt-1">{profile.bio}</div>
        <div className="mt-2 mb-2">
          <FontAwesomeIcon icon={faMap} /><span>&nbsp; {profile.location} &nbsp;</span>
          <FontAwesomeIcon icon={faCake} /><span>&nbsp; Born on {profile.dateOfBirth}  &nbsp;</span>
          <FontAwesomeIcon icon={faCalendar} /><span>&nbsp; Joined on {profile.dateJoined}</span>
        </div>
        <div>
          <span className="fw-bolder">{profile.followingCount} &nbsp;</span><span className="text-secondary">Following &nbsp;</span>
          <span className="fw-bolder">{profile.followersCount} &nbsp;</span><span className="text-secondary">Followers</span>
        </div>
      </div>
    </>
  );
};
export default ProfileComponent;

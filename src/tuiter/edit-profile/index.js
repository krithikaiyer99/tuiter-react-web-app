import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { updateProfile } from "../profile/profile-reducer";
import "./index.css";

const EditProfile = () => {
  const profile = useSelector((state) => state.profile);
  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);
  const [bio, setBio] = useState(profile.bio);
  const [location, setLocation] = useState(profile.location);
  const [website, setWebsite] = useState(profile.website);
  const [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const updateYourProfile = () => {
    const updatedProfile = {
      firstName: firstName,
      lastName: lastName,
      bio: bio,
      location: location,
      website: website,
      dateOfBirth: dateOfBirth,
    };
    dispatch(updateProfile(updatedProfile));
    navigate("/tuiter/profile");
  };
  console.log(dateOfBirth);
  return (
    <>
      <div className="row mb-2">
        <div className="col-1 d-flex justify-content-center align-items-center">
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => navigate("/tuiter/profile")}
          />
        </div>
        <div className="col-9 fw-bolder d-flex align-items-center">
          &nbsp; Edit Profile
        </div>
        <button onClick={updateYourProfile} className="col-2 btn btn-dark rounded-pill float-end">
          Save
        </button>
      </div>
      <div className="position-relative">
        <img
          src={`../../images/${profile.bannerPicture}`}
          width="100%"
          height="25%"
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
          <div className="col col-3 text-white">Edit profile</div>
          <div className="col col-3 text-white">Edit profile</div>
        </div>
      </div>
      <div className="mt-2 form-group">
        <div class="form-control mb-2">
          <label htmlFor="firstname" className="text-secondary">
            First Name
          </label>
          <br />
          <input
            type="text"
            className="border-0 outline-0"
            id="firstname"
            onChange={(e)=>{setFirstName(e.target.value)}}
            value={firstName}
          />
        </div>
        <div class="form-control mb-2">
          <label htmlFor="lastname" className="text-secondary">
            Last Name
          </label>
          <br />
          <input
            type="text"
            className="border-0 outline-0"
            id="lastname"
            onChange={(e)=>{setLastName(e.target.value)}}
            value={lastName}
          />
        </div>
        <div class="form-control mb-2">
          <label htmlFor="bio" className="text-secondary">
            Bio
          </label>
          <br />
          <textarea className="border-0 outline-0" id="bio" value={bio} onChange={(e)=>{setBio(e.target.value)}}/>
        </div>
        <div class="form-control mb-2">
          <label htmlFor="location" className="text-secondary">
            Location
          </label>
          <br />
          <input
            type="text"
            className="border-0 outline-0"
            id="location"
            onChange={(e)=>{setLocation(e.target.value)}}
            value={location}
          />
        </div>
        <div class="form-control mb-2">
          <label htmlFor="website" className="text-secondary">
            Website
          </label>
          <br />
          <input
            type="text"
            className="border-0 outline-0"
            id="website"
            onChange={(e)=>{setWebsite(e.target.value)}}
            value={website}
          />
        </div>
        <div class="form-control mb-2">
          <label htmlFor="dateofbirth" className="text-secondary">
            Date of Birth
          </label>
          <br />
          <input
            type="date"
            className="border-0 outline-0"
            id="dateofbirth"
            name="dateofbirth"
            onChange={(e)=>{setDateOfBirth(e.target.value)}}
            value={dateOfBirth}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-11 fs-14">Switch to professional</div>
        <div className="col-1">
          <FontAwesomeIcon className="float-end" icon={faGreaterThan} />
        </div>
      </div>
    </>
  );
};
export default EditProfile;

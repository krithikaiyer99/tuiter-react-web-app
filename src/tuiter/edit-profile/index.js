import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { updateProfile } from "../profile/profile-reducer";
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

  return (
    <>
      <div className="row mb-2">
        <div className="col-1 d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <div className="col-9 fw-bolder d-flex align-items-center">
          &nbsp; Edit Profile
        </div>
        <button className="col-2 btn btn-dark rounded-pill float-end">
          Save
        </button>
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
          <div className="col col-3 text-white">Edit profile</div>
          <div className="col col-3 text-white">Edit profile</div>
        </div>
      </div>
      <div className="mt-2">
        
      </div>
    </>
  );
};
export default EditProfile;

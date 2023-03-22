import { createSlice } from "@reduxjs/toolkit";

const profile = {
    firstName: 'Krithika',
    lastName: 'Iyer',
    handle: '@iyer',
    profilePicture: 'profile.png',
    bannerPicture: 'cover.jpg',
    bio: 'Graduate Student @northeastern | Proficient using Java, SQL, Python | Web Development and Mobile Development',
    website: 'www.youtube.com',
    location: 'Boston, MA',
    dateOfBirth : '1968-07-07',
    dateJoined: '2009-04-01',
    followingCount: 340,
    followersCount: 223
};

const profileSlice = createSlice({
  name: "profile",
  initialState: profile,
  reducers: {
    updateProfile(state, action) {
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName
        state.bio = action.payload.bio
        state.dateOfBirth = action.payload.dateOfBirth
        state.location = action.payload.location
        state.website = action.payload.website
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
    name: "profile",
    initialState: {
        value: {
            designation: "", location: "", skills: [], avatar: "",
            yearsOfExperence: 0, expertise: { name: "", from: 2000, to: 2000 },
            currentCompany: "", availableForHiring: false, dealtWith: [],
            busyDays: { from: 0, to: 0 }
        }
    },
    reducers: {
        edit: (state, action) => {
            state.value = { ...state.value, ...action.payload }
        },
    }
})

export const { editProfile } = profileSlice.actions

export default profileSlice.reducer;
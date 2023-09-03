import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 doctorList: [],
};

const lookupSlice = createSlice({
  name: 'lookups',
  initialState: initialState,
  reducers: {

    setDoctorList: (state, action) => {
      return { ...state, data: {}, isAuthenticated: false };
    },

  },
});

export const { setDoctorList } = lookupSlice.actions;

export default lookupSlice.reducer;

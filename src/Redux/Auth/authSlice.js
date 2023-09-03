import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  data: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {

    userLogin: (state, action) => {
      console.log(action.payload)
      // console.log(state)
      return {
        ...state,
        isAuthenticated: true,
        data: action.payload.responseData,
      };
    },

    userLogout: (state, action) => {
      return { ...state, data: {}, isAuthenticated: false };
    },

  },
});

export const { userLogin, userLogout } = authSlice.actions;

export default authSlice.reducer;

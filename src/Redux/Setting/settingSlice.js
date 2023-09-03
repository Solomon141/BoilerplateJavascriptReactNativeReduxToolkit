import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    serverIP: '127.0.0.1',
};

const settingSlice = createSlice({
  name: 'setting',
  initialState: initialState,
  reducers: {

    setServerIP: (state, action) => {
      return { ...state, data: {}, isAuthenticated: false };
    },

  },
});

export const { setServerIP } = settingSlice.actions;

export default settingSlice.reducer;

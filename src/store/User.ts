import { createSlice } from '@reduxjs/toolkit';

interface UserInfo {
  id: string;
  email: string;
  displayName: string;
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userObj: {} as UserInfo,
  },
  reducers: {
    setUserObj: (state, action) => {
      state.userObj = {
        id: action.payload.uid,
        email: action.payload.email,
        displayName: action.payload.displayName,
      };
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;

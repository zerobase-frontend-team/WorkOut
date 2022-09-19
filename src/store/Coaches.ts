import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { dbService } from '../fbase';

interface CoachInfo {
  id: string;
  email: string;
  genre: string[];
  name: string;
}

interface CoachState {
  coaches: Record<string, CoachInfo>;
}

const coachesSlice = createSlice({
  name: 'coaches',
  initialState: {
    coaches: {} as CoachState,
    coachIdList: [] as string[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoaches.fulfilled, (state, action) => {
      state.coaches = action.payload.coachInfo;
      state.coachIdList = action.payload.coachIdList;
    });
  },
});

export const fetchCoaches = createAsyncThunk(
  'coaches/fetchCoaches',
  async () => {
    const coaches = await getDocs(collection(dbService, 'coaches'));
    const coachInfo = {} as any;
    const coachIdList: string[] = [];
    coaches.forEach((coach) => {
      const id: string = coach.id;
      coachInfo[id] = coach.data();
      coachIdList.push(coach.data().id);
    });
    return { coachInfo, coachIdList };
  },
);

export const coachesActions = coachesSlice.actions;
export default coachesSlice.reducer;

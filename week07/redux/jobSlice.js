import { createSlice } from "@reduxjs/toolkit";
export const jobSlice = createSlice({
  name: "job",
  initialState: {
    jobs: [],
  },
  reducers: {
    updateJobs: (state, action) => {
      state.jobs = action.payload;
    },
  },
});
export const { updateJobs } = jobSlice.actions;
export default jobSlice.reducer;

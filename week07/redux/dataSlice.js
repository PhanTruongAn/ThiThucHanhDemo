import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("data/getData", async () => {
  const response = await fetch(
    `https://65420869f0b8287df1ff5d0a.mockapi.io/Users`
  );
  return response.json();
});
export const createData = createAsyncThunk(
  "data/createData",
  async (newData) => {
    const response = await fetch(
      `https://65420869f0b8287df1ff5d0a.mockapi.io/Users`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      }
    );
    return response.json();
  }
);
const userSlide = createSlice({
  name: "data",
  initialState: {
    data: [],
    status: "",
  },
  reducers: {
    updateData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(createData.fulfilled, (state, action) => {
        state.data.push(action.payload);
      });
  },
});
export const { updateData } = userSlide.actions;
export default userSlide.reducer;

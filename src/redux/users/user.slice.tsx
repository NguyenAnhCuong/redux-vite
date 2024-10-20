import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IUser {
  id: number;
  name: string;
  email: string;
}

const initialState: {
  listUser: IUser[];
  isCreateSuccess: boolean;
} = {
  listUser: [],
  isCreateSuccess: false,
};

export const fetchListUser = createAsyncThunk(
  "users/fetchListUser",
  async () => {
    const res = await fetch("http://localhost:8000/users");
    const data = await res.json();
    return data;
  }
);

interface IUserPayload {
  email: string;
  name: string;
}

export const CreateUser = createAsyncThunk(
  "users/CreateUser",
  async (payload: IUserPayload, thunkAPI) => {
    const res = await fetch("http://localhost:8000/users", {
      method: "POST",
      body: JSON.stringify({
        email: payload.email,
        name: payload.name,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data && data.id) {
      //create succed
      thunkAPI.dispatch(fetchListUser());
    }

    return data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetCreate(state) {
      state.isCreateSuccess = false;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchListUser.fulfilled, (state, action) => {
      // Add user to the state array
      state.listUser = action.payload;
    });
    builder.addCase(CreateUser.fulfilled, (state, action) => {
      // Add user to the state array
      state.isCreateSuccess = true;
    });
  },
});

// Action creators are generated for each case reducer function
export const { resetCreate } = userSlice.actions;

export default userSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import service from "./service";

export const getUserList = createAsyncThunk(
  "getUserList",
  async (id, { rejectWithValue }) => {
    try {
      const response = await service.getUserList(id);
      return response;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

export const getComent = createAsyncThunk(
  "getComent",
  async (id, { rejectWithValue }) => {
    try {
      const response = await service.getComent(id);
      return response
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);  



export const getListPosts = createAsyncThunk(
  "getListPosts",
  async (params, { rejectWithValue, getState, dispatch }) => {
    try {
      const response = await service.getListPosts(
        params._page,
        params._limit
      )
      return response;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

export const getPostDetail = createAsyncThunk(
  "getPostDetail",
  async (id, { rejectWithValue }) => {
    try {
      const response = await service.getPostDetail(id);
      return response
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

export const getProfile = createAsyncThunk(
  "getProfile",
  async (id, { rejectWithValue, getState }) => {
    const {idUser} = getState()
    try {
      const response = await service.getProfile(idUser);
      return response
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);


const initialState = {
  isLogged: false,
  idUser: "",
  username: "",
  totalCount: 100,
  email: "",
  password: "",
  userLogin: [],
  userList: [],
  comentList: [],
  postList: [],
  postDetail: []
};

const userSlicer = createSlice({
  name: "userSlicer",
  initialState: { ...initialState },
  reducers: {
    setValue: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserList.fulfilled, (state, action) => {
      state.userList = action.payload.data;
      //   state.bussinesItems = action.payload.data.businesses;
    });
    builder.addCase(getComent.fulfilled, (state, action) => {
      state.comentList = action.payload.data;

      //   state.bussinesItems = action.payload.data.businesses;
    });
    builder.addCase(getListPosts.fulfilled, (state, action) => {
      state.postList = action.payload.data;
    });
    builder.addCase(getPostDetail.fulfilled, (state, action) => {
      const temp = [action.payload.data]
      state.postDetail = temp;
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {      
      state.userLogin = action.payload.data;
    });


    // builder.addCase(getDetailBussiness.fulfilled, (state, action) => {
    //   state.detailItems = action.payload.data;
    // });
  },
});

export const { setValue } = userSlicer.actions;

export default userSlicer.reducer;

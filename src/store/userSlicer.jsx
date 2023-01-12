import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
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

const initialState = {
    email: '',
    password: '',
    userLogin: [],
    userList: [],
}



const userSlicer = createSlice({
    name: 'userSlicer',
    initialState: {...initialState},
    reducers: {
        setValue: (state, action) => {
            state[action.payload.key] = action.payload.value
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUserList.fulfilled, (state, action) => {
            state.userList = action.payload.data
        //   state.bussinesItems = action.payload.data.businesses;
        });
        // builder.addCase(getDetailBussiness.fulfilled, (state, action) => {
        //   state.detailItems = action.payload.data;
        // });
      },
})



export const {setValue} = userSlicer.actions

export default userSlicer.reducer;
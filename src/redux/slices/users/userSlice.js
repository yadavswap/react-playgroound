import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import baseURL from "../../../utils/baseURL";
// initialState
const initialState = {
    loading:false,
    error:null,
    users:[],
    user:{},
    profile:{},
    userAuth:{
        loading:false,
        error:null,
        userInfo:{},
    }
}

// login action
export const loginUserAction = createAsyncThunk(
    "users/login",
    async ({email,password},{isRejectedWithValue,getState,dispatch})=>{
        try {
            // make the http request
            const {data} = await axios.post(`${baseURL}/users/login`,{
                email,
                password,
            });
            localStorage.setItem("userInfo",JSON.stringify(data))
            return data;
        } catch (error) {
            return isRejectedWithValue(error?.response?.data);
        }
    }
)

// register action
export const registerUserAction = createAsyncThunk(
    "users/register",
    async ({email,password,fullname},{isRejectedWithValue,getState,dispatch})=>{
        try {
            // make the http request
            const {data} = await axios.post(`${baseURL}/users/register`,{
                email,
                password,
                fullname
            });
            return data;
        } catch (error) {

            return isRejectedWithValue(error?.response?.data);
        }
    }
)
// users slice 
const userSlice = createSlice({
    name:"users",
    initialState,
    extraReducers:(builder)=>{
        // handle actions
        // login
        builder.addCase(loginUserAction.pending,(state,action)=>{
            state.userAuth.loading = true;
        })
        builder.addCase(loginUserAction.fulfilled,(state,action)=>{
            state.userAuth.userInfo = action.payload;
            state.userAuth.loading = false;
        })
        builder.addCase(loginUserAction.rejected,(state,action)=>{
            
            state.userAuth.error = action.payload;
            state.userAuth.loading = false;
        })
          // register
          builder.addCase(registerUserAction.pending,(state,action)=>{
            state.loading = true;
        })
        builder.addCase(registerUserAction.fulfilled,(state,action)=>{
            console.log('action',action);
            state.user = action.payload;
            state.loading = false;
        })
        builder.addCase(registerUserAction.rejected,(state,action)=>{
            
            state.error = action.payload;
            state.loading = false;
        })

    }
})

// generate reducer
const usersReducer = userSlice.reducer;

export default usersReducer;
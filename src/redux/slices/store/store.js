import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../users/userSlice";

// store
const store = configureStore({
    reducer:{
        users:usersReducer,
    }
})

export default store;
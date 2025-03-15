import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { fetchUser, login } from "@/api/auth";
import {AppDispatch} from "./store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IUser } from "@/interfaces/User";
import { router } from "expo-router";

interface IUserState {
    user: null | IUser;
    token: string | null;
    loading: boolean;
}

const initialState: IUserState = {
    user: null,
    token:null,
    loading: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        setUser(state, action: PayloadAction<any>){
            state.user = action.payload;
        },
        setToken(state, action: PayloadAction<string | null>){
            state.token = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>){
            state.loading = action.payload;
        },
        logout(state){
            state.user = null; 
            state.token = null;
        }
    }
})

export const {setUser, setToken, setLoading, logout} = userSlice.actions;
export default userSlice.reducer;

// Async Actions
export const loginUser = (email: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));

    try {
        const response = await login(email, password);
        if (!response.success) {
            console.log(response);
            throw new Error(response.message); // Handle API error properly
        }

        const token = response.data?.token ?? "";
        await AsyncStorage.setItem("token", token);
        dispatch(setToken(token));

        // ✅ Ensure user profile is fetched before continuing
        dispatch(fetchUserProfile());

    } catch (error: any) {
        throw new Error(error?.message || "Login failed!"); // Re-throw for UI handling
    } finally {
        dispatch(setLoading(false));
    }
};

export const fetchUserProfile = ()=> async(dispatch: AppDispatch)=>{
    try {
        const userData = await fetchUser();
        // console.log("Fetched:", userData)
        dispatch(setUser(userData.data));
    } catch (error) {
        console.log(error);
    }
};
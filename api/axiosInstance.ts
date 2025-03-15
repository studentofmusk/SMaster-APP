import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


const API = axios.create({
    baseURL:"http://192.168.0.102:5000/api",
    timeout:30000
})

API.interceptors.request.use(
    async(config)=>{
        const token = await AsyncStorage.getItem("token");
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config
    },
    (error)=> Promise.reject(error)
);

export default API;

export type IAPIResponse<T> = {
    success: boolean;
    message: string;
    data?: T;
    errors?: any;
    token?: string;
}
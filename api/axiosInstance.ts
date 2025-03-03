import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {SERVER} from "@env";


const API = axios.create({
    baseURL:"http://192.168.0.107:5000/api",
    timeout:10000
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

export interface IAPIResponse<T=any>{
    success: boolean;
    message: string;
    data?:T
}
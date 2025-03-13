import API, { IAPIResponse } from "./axiosInstance";


export const login = async(email: string, password: string)=>{
    try {
        const response = await API.post<IAPIResponse<{token:string}>>("/auth/log-in", {
            email, password
        });
    
        return {
            success: response.data.success,
            message: response.data.message,
            data: response.data.success ? response.data.data : undefined,
          };

    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: error.response?.data?.message || "Something went wrong!",
            };
    }
}


export const fetchUser = async () => {
    const response = await API.get("/user/profile");
    return response.data;
};


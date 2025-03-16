import { useState } from "react";
import API, { IAPIResponse } from "../api/axiosInstance"; // Import your Axios instance


export const useAPI = <T>() => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  const fetchAPI = async (
    endpoint: string,
    method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
    body?: any,
    headers: Record<string, string> = {}
  ): Promise<IAPIResponse<T>> => {
    setLoading(true);
    setError(null);
  
    try {
      const response = await API.request<IAPIResponse<T>>({
        url: endpoint,
        method,
        headers: {
          ...headers,
          ...(body instanceof FormData ? {} : { "Content-Type": "application/json" }),
        },
        data: body,
      });
  
      const apiResponse = response.data;
      if (apiResponse.success) {
        setData(apiResponse.data || null);
      } else {
        setError(apiResponse.message);
      }

      return apiResponse;
    } catch (err: any) {
      console.error("API Error:", err);
      const errorMessage = err.response?.data?.message || "Network error occurred";
      setError(errorMessage);
  
      return {
        success: false,
        message: errorMessage,
        errors: err.response?.data?.error || err.message,
      };
    } finally {
      setLoading(false);
    }
  };
  

  return { fetchAPI, data, loading, error };
};

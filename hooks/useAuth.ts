import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { fetchUserProfile } from "@/store/userSlice";

export const useAuth = (redirect:string="") => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          await dispatch(fetchUserProfile());
          if (redirect){
            router.replace(redirect as any);
          }
        } else {
        
          router.replace("/login");
        }
      } catch (error) {
        console.error("Auth Check Error:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return { loading };
};

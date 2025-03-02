import { View, Text, Image } from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function GetStartedScreen() {
  const router = useRouter();
  useEffect(()=>{
    setTimeout(()=>router.replace("/start"), 3000)
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
      
      <View className="items-center justify-center">

        {/* Logo */}
        <Image source={require("../assets/images/Logo.png")} className="size-60" />
        <View className="mt-2 mb-5" >
          <Text className="text-4xl font-bold text-primary">SMaster</Text>
        </View>
        <View className="flex flex-row items-center justify-center">
          <View className="h-1 w-10 bg-violet"></View>
            
          <View>
            <Text className="text-xl mx-3 uppercase">Sign Master</Text>
          </View>

          <View className="h-1 w-10 bg-violet"></View>


        </View>

      </View>
    </View>
  );
}

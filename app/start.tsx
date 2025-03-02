import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const logo = require("../assets/images/Logo.png");
const heroPic = require("../assets/images/Heropic.png")

export default function GetStartedScreen() {
    const router = useRouter();

    return (
        <SafeAreaView className="bg-white h-full items-center justify-between py-10">
            <View className="items-center">
                <Image
                    source={logo}
                    className="size-32"
                />
                <Text className="font-bold text-secondary text-2xl">SMaster</Text>
            </View>

            <View>

                <Image source={heroPic} className="mt-8 h-60" style={{resizeMode:"contain"}} />

                <Text className="font-junge mt-10 text-2xl text-center">Let&apos;s Create your future {"\n"}communication with SMaster</Text>
                <Text className="font-inder mt-1 text-primary text-sm text-center">Expand your communication skills and be Independent</Text>

            </View>

            <TouchableOpacity onPress={()=>router.replace("/login")} className="mt-20 px-10 py-5 justify-center items-center bg-violet-prime">
                <Text className="text-lg text-white">Let&apos;s Sign Together</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

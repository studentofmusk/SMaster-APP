import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';



const logo = require("../assets/images/Logo.png");
const loginHeropic = require("../assets/images/LoginHeropic.png");

const Login = () => {
    const router = useRouter();
    const [show, setShow] = useState<boolean>(false);
    return (
        <SafeAreaView className='items-center bg-white h-full py-10'>
            <View className='w-full flex flex-row items-center ml-5'>
                <Image
                    source={logo}
                    className='size-16'
                    style={{ resizeMode: "contain" }}
                />
                <Text className='text-secondary uppercase text-xl ml-2'>HELLO <Text className='text-black'> BUDDY!</Text></Text>
            </View>

            <Image source={loginHeropic} className='mt-10 h-60' style={{ resizeMode: "contain" }} />

            <View className='w-[80%]'>
                <Text className='mt-5 text-center text-2xl  text-secondary'>Login</Text>


                <View className='mt-3'>
                    <Text className='text-secondary font-light text-xl ' >Email</Text>
                    <TextInput textContentType='emailAddress' className='border-b-2' placeholder='john@example.com' />
                </View>

                <View className="relative mt-3 w-full">
                    <Text className="text-secondary font-light text-xl">Password</Text>

                    <TextInput
                        secureTextEntry={!show}
                        textContentType="password"
                        className="border-b-2 w-full pr-10 text-lg"
                        placeholder="Enter your password"
                    />

                    {/* Show/Hide Button */}
                    <TouchableOpacity
                        className="absolute right-0 top-1/2 -translate-y-1/2 p-2"
                        onPress={() => setShow(!show)}
                    >
                        <Text className="text-primary">{show ? "Hide" : "Show"}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity className="mt-10 px-20 py-4 justify-center items-center bg-violet-prime">
                <Text className="text-lg text-white">Login</Text>
            </TouchableOpacity>

            <View>
                <Text className='text-lg mt-3 text-primary'>
                    Create an account? 
                    <Text className='font-bold' onPress={()=>router.replace("/signup")}> Sign up</Text>
                </Text>
            </View>


        </SafeAreaView>
    )
}

export default Login
import { View, Text, Image, TextInput, TouchableOpacity, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { fetchUserProfile, loginUser, setLoading } from "../store/userSlice";
import AsyncStorage from '@react-native-async-storage/async-storage';



const logo = require("../assets/images/Logo.png");
const loginHeropic = require("../assets/images/LoginHeropic.png");

const Login = () => {

    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const [show, setShow] = useState<boolean>(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const checkAuth = async () => {
            const token = await AsyncStorage.getItem("token");
            if (token) {
                await dispatch(fetchUserProfile());
                router.replace("/(tabs)");
            }
            setLoading(false);
        };
        checkAuth();
    }, []);

    const handleLogin = async () => {
        if (!email || !password) {
            return Alert.alert("Please fulfill the requirements!");
        }
        try {
            await dispatch(loginUser(email, password));
            Alert.alert("Login Successful!");
            router.replace("/(tabs)");
        } catch (error) {
            Alert.alert("Something went wrong!");
            console.log("Login Error:", error);
        }
    };




    return (
        <SafeAreaView className='bg-white h-full py-10'>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1">
                <ScrollView className='flex-1 w-full' contentContainerStyle={{ alignItems: 'center' }} keyboardShouldPersistTaps="handled">


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
                            <TextInput value={email} onChangeText={(text) => setEmail(text)} textContentType='emailAddress' className='border-b-2' placeholder='john@example.com' />
                        </View>

                        <View className="relative mt-3 w-full">
                            <Text className="text-secondary font-light text-xl">Password</Text>

                            <TextInput
                                value={password}
                                onChangeText={(text) => setPassword(text)}
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

                    <TouchableOpacity onPress={handleLogin} className="mt-10 px-20 py-4 justify-center items-center bg-violet-prime">
                        <Text className="text-lg text-white">Login</Text>
                    </TouchableOpacity>

                    <View>
                        <Text className='text-lg mt-3 text-primary'>
                            Create an account?
                            <Text className='font-bold' onPress={() => router.replace("/signup")}> Sign up</Text>
                        </Text>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Login
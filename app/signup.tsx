import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const logo = require("../assets/images/Logo.png");
const loginHeropic = require("../assets/images/SignupHeropic.png");

const Signup = () => {
    const router = useRouter();
    const [show, setShow] = useState<boolean>(false);

    return (
        <SafeAreaView className='bg-white h-full'>
            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", paddingBottom: 30 }} keyboardShouldPersistTaps="handled">
                <View className='w-full flex flex-row items-center ml-5 mt-5'>
                    <Image source={logo} className='size-16' style={{ resizeMode: "contain" }} />
                    <Text className='text-secondary uppercase text-xl ml-2'>WELCOME <Text className='text-black'> DUDE!</Text></Text>
                </View>

                <Image source={loginHeropic} className='mt-10 h-40' style={{ resizeMode: "contain" }} />

                <View className='w-[80%]'>
                    <Text className='mt-5 text-center text-2xl text-secondary'>Signup</Text>

                    {/* First & Last Name */}
                    <View className='mt-5 flex flex-row w-[80%]' >
                        <View className='mr-10 w-1/2'>
                            <Text className='text-secondary font-light text-xl'>First name</Text>
                            <TextInput textContentType='givenName' className='border-b-2 p-2' placeholder='eg. John' />
                        </View>
                        <View className='w-1/2'>
                            <Text className='text-secondary font-light text-xl'>Last name</Text>
                            <TextInput textContentType='familyName' className='border-b-2 p-2' placeholder='eg. Carter' />
                        </View>
                    </View>

                    {/* Email */}
                    <View className='mt-5'>
                        <Text className='text-secondary font-light text-xl'>Email</Text>
                        <TextInput textContentType='emailAddress' keyboardType="email-address" className='border-b-2 p-2' placeholder='eg. john@example.com' />
                    </View>

                    {/* Password */}
                    <View className="relative mt-5 w-full">
                        <Text className="text-secondary font-light text-xl">Password</Text>
                        <TextInput
                            secureTextEntry={!show}
                            textContentType="password"
                            className="border-b-2 p-2 w-full pr-10 text-lg"
                            placeholder="Enter your password"
                        />
                        <TouchableOpacity
                            className="absolute right-0 top-1/2 -translate-y-1/2 p-2"
                            onPress={() => setShow(!show)}
                        >
                            <Text className="text-primary">{show ? "Hide" : "Show"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Signup Button */}
                <TouchableOpacity className="mt-10 px-20 py-4 justify-center items-center bg-violet-prime">
                    <Text className="text-lg text-white">Signup</Text>
                </TouchableOpacity>

                {/* Login Link */}
                <View>
                    <Text className='text-lg mt-3 text-primary'>
                        Already have an account?
                        <Text className='font-bold' onPress={() => router.replace("/login")}> Login</Text>
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Signup;

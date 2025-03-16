import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useAPI } from '@/hooks/useAPI';
import { signup, signup_otp } from '@/api/user';
import {Picker} from "@react-native-picker/picker"

const logo = require("../assets/images/Logo.png");
const loginHeropic = require("../assets/images/SignupHeropic.png");


const male1 = require("../assets/images/profiles/male-1.png")
const male2 = require("../assets/images/profiles/male-2.png")
const male3 = require("../assets/images/profiles/male-3.png")
const male4 = require("../assets/images/profiles/male-4.png")
const male5 = require("../assets/images/profiles/male-5.png")
const male6 = require("../assets/images/profiles/male-6.png")
const female1 = require("../assets/images/profiles/female-1.png")
const female2 = require("../assets/images/profiles/female-2.png")
const female3 = require("../assets/images/profiles/female-3.png")
const female4 = require("../assets/images/profiles/female-4.png")
const female5 = require("../assets/images/profiles/female-5.png")
const female6 = require("../assets/images/profiles/female-6.png")
const base = require("../assets/images/profiles/default.png")

const profileImages: { [key: string]: any } = {
    "default.png": base,
    "male-1.png":male1,
    "male-2.png":male2,
    "male-3.png":male3,
    "male-4.png":male4,
    "male-5.png":male5,
    "male-6.png":male6,
    "female-1.png":female1,
    "female-2.png":female2,
    "female-3.png":female3,
    "female-4.png":female4,
    "female-5.png":female5,
    "female-6.png":female6,
};
const profiles = [ "default.png", "male-1.png", "male-2.png", "male-3.png", "male-4.png", "male-5.png", "male-6.png", "female-1.png", "female-2.png", "female-3.png", "female-4.png", "female-5.png", "female-6.png",]

const Signup = () => {
     
    const router = useRouter();
    const {fetchAPI: signupOtp, loading: sending} = useAPI();
    const {fetchAPI:createUser, loading} = useAPI(); 
    
    const [show, setShow] = useState<boolean>(false);
    const [sent, setSent] = useState<boolean>(false);
    const [profile, setProfile] = useState(1);

    useEffect(()=>{
        setUser({
            ...user,
            profile: profiles[profile]
        })

    },[profile])

    const [user, setUser] = useState({
        first_name : "",
        last_name : "",
        email : "",
        password : "",
        age : "",
        gender : "MALE",
        language : "ASL",
        profile : "",
        otp : "",
    })

    const changeProfile = ()=>{
        if(profile+1 >= profiles.length){
            setProfile(0);
        }else{
            setProfile(profile+1)
        }
    }

    const sendOtp = async ()=>{
        try {
            if(!user.email) return;
            const response = await signupOtp(signup_otp, "POST", {
                email:user.email
            })

            if(response.success){
                setSent(true);
            }else{
                Alert.alert(response.message);
            }   
        } catch (error) {
            console.log(error);
            Alert.alert("Something went wrong!")
        }
    }

    const handleSubmit = async()=>{
        try {
            if (!user.first_name || !user.last_name || !user.age || !user.gender || !user.otp || !user.password || !user.profile || !user.language) return Alert.alert("Please fulfill the requirements!");
            console.log(user);
            const response = await createUser(signup, "POST", user);
            
            if(response.success){
                Alert.alert("Signed up Successfully!");
                router.replace("/login")
            }else{
                Alert.alert(response.message);
            }
        } catch (error) {
            console.log(error);
            Alert.alert("Something went wrong!")
        }
    }

    return (
        <SafeAreaView className='bg-white h-full'>
            <View className='flex-1 items-center'>
                <View className='w-full flex flex-row items-center ml-5 mt-5'>
                    <Image source={logo} className='size-16' style={{ resizeMode: "contain" }} />
                    <Text className='text-secondary uppercase text-xl ml-2'>Signup <Text className='text-black'> Karo!</Text></Text>
                </View>
                <Image source={profileImages[profiles[profile]]} className='mt-5 size-40' style={{ resizeMode: "contain" }} />
                <TouchableOpacity className='bg-violet px-4 py-2 rounded-lg' onPress={changeProfile}>
                    <Text className='text-white'>Change</Text>
                </TouchableOpacity>

                <ScrollView  className='flex-1 w-full px-10'>

                    {/* First & Last Name */}
                    <View className=' mt-10'>
                        <Text className='text-secondary font-light text-lg'>First name</Text>
                        <TextInput textContentType='givenName' className='border-b-2 border-y-gray-300 p-2' placeholder='eg. John' value={user.first_name} onChangeText={(text)=>setUser({...user, first_name:text})} />
                    </View>
                    <View className=' mt-10'>
                        <Text className='text-secondary font-light text-lg'>Last name</Text>
                        <TextInput textContentType='familyName' className='border-b-2 border-y-gray-300 p-2' placeholder='eg. Carter' value={user.last_name} onChangeText={(text)=>setUser({...user, last_name:text})} />
                    </View>

                    {/* Age */}
                    <View className=' mt-10'>
                        <Text className='text-secondary font-light text-lg'>Age</Text>
                        <TextInput keyboardType='numeric' className='border-b-2 border-y-gray-300 p-2' placeholder='eg. 18' value={user.age} onChangeText={(text)=>setUser({...user, age:text})} />
                    </View>

                    {/* Email */}
                    <View className='mt-10'>
                        <Text className='text-secondary font-light text-lg'>Email</Text>
                        <TextInput textContentType='emailAddress' keyboardType="email-address" className='border-b-2 border-y-gray-300 p-2' placeholder='eg. john@example.com' value={user.email} onChangeText={(text)=>setUser({...user, email:text})} />
                        <TouchableOpacity
                            className="absolute right-0 top-1/2 -translate-y-1/2 p-2"
                            onPress={sendOtp}
                        >
                            {sending?<ActivityIndicator size="small" color="#0c134f" />
                            :<Text className="text-primary">{!sent ? "Send OTP" : "Resend"}</Text>
                            }
                            
                        </TouchableOpacity>
                    </View>

                    {/* OTP  */}
                    <View className=' mt-10'>
                        <Text className='text-secondary font-light text-lg'>OTP</Text>
                        <TextInput keyboardType='numeric' className='border-b-2 border-y-gray-300 p-2' placeholder='Enter your OTP' value={user.otp} onChangeText={(text)=>setUser({...user, otp:text})} />
                    </View>


                    {/* Password */}
                    <View className="relative mt-10 w-full">
                        <Text className="text-secondary font-light text-lg">Password</Text>
                        <TextInput
                            secureTextEntry={!show}
                            textContentType="password"
                            className="border-b-2 border-y-gray-300 p-2 w-full pr-10 text-lg"
                            placeholder="Enter your password"
                            value={user.password} onChangeText={(text)=>setUser({...user, password:text})}
                        />
                        <TouchableOpacity
                            className="absolute right-0 top-1/2 -translate-y-1/2 p-2"
                            onPress={() => setShow(!show)}
                        >
                            <Text className="text-primary">{show ? "Hide" : "Show"}</Text>
                        </TouchableOpacity>
                    </View>

                    
                    <View className=' mt-10'>
                        <Text className='text-secondary font-light text-lg'>Gender</Text>
                        <Picker
                            selectedValue={user.gender}
                            onValueChange={(itemValue)=>setUser({...user, gender: itemValue})}
                            itemStyle={{fontSize:3}}
                            style={{ height: 50, width: 200 }}
                        >
                            <Picker.Item label='MALE' value="MALE" />
                            <Picker.Item label='FEMALE' value="FEMALE" />
                            <Picker.Item label='OTHER' value="OTHER" />
                        </Picker>
                    </View>

                {/* Signup Button */}
                <TouchableOpacity onPress={handleSubmit} disabled={loading} className="mt-10 px-20 py-4 justify-center items-center bg-violet-prime">
                    {
                        loading? <ActivityIndicator size="small" color="white" />
                        :<Text className="text-lg text-white">Signup</Text>
                    }
                </TouchableOpacity>

                {/* Login Link */}
                <View>
                    <Text className='text-lg mb-5 mt-3 text-primary'>
                        Already have an account?
                        <Text className='font-bold' onPress={() => router.replace("/login")}> Login</Text>
                    </Text>
                </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default Signup;

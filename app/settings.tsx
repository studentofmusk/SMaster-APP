import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store/store'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { logout } from '@/store/userSlice'

const settings = () => {
    
  const dispatch = useDispatch<AppDispatch>();
  const handleLogout = () => {
    AsyncStorage.removeItem("token");
    dispatch(logout());
    router.replace("/start");

  }
  return (
    <SafeAreaView className='bg-white' style={{flex:1}}>
        <View className='relative border-b-2 border-gray-700 h-16 justify-end pb-2'>
            <Text className='font-bold text-center text-gray-700 text-xl'>Settings</Text>
            <TouchableOpacity onPress={()=>router.back()} className='absolute right-0 z-20 mr-3 pb-2 text-lg' ><Text className='text-primary uppercase font-bold '>Done</Text></TouchableOpacity>
        </View>

        <View className='justify-between' style={{flex:1}}>
            <View></View>
            <TouchableOpacity onPress={handleLogout} className='mb-5 px-20 py-2 w-[80%] mx-auto border-2 border-sweet-pink rounded-lg'>
                <Text className='text-lg text-sweet-pink text-center '>SIGN OUT</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default settings
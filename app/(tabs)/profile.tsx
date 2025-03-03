import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store/store'
import { logout } from '@/store/userSlice'
import { router } from 'expo-router'
import { useAuth } from '@/hooks/useAuth'
import AsyncStorage from '@react-native-async-storage/async-storage'

const profile = () => {
  const {loading} = useAuth();
  const dispatch = useDispatch<AppDispatch>();
  const handleLogout = ()=>{
    AsyncStorage.removeItem("token");
    dispatch(logout());
    router.replace("/start");

  }

  return (
    <View>
      <Text>profile</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default profile
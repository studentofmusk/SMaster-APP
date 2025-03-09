import { View, Text, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import CircularProgress from './CircularProgress'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

const male = require("../assets/images/profiles/male-1.png")
const female = require("../assets/images/profiles/female-6.png")
const base = require("../assets/images/profiles/default.png")


const Header = () => {
    const user = useSelector((state:RootState)=>state.user.user);
    const loading = useSelector((state:RootState)=>state.user.loading);
    
    return (
        <View className='mt-10 flex flex-row justify-between items-center px-10'>
            <View className='flex flex-row items-center'>
            <Image source={user?.gender === 0?male:user?.gender === 1?female:base} className='size-24 mr-5 border rounded-full' />
            <View>
                <Text>Hello,</Text>
                {loading ? (
                <ActivityIndicator size="small" color="blue" />
                ) : user ? (
                <Text className="text-xl text-primary">
                    {user.first_name} {user.last_name}
                </Text>
                ) : (
                <Text className="text-gray-500">User Not Found</Text>
                )}

            </View>

            

            </View>
            
            <View>
                <CircularProgress progress={10} size={50} strokeWidth={5}  />
            </View>
        </View>
    )

}

export default Header
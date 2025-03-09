import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store'
import { logout } from '@/store/userSlice'
import { router } from 'expo-router'
import { useAuth } from '@/hooks/useAuth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SafeAreaView } from 'react-native-safe-area-context'
import CircularProgress from '@/components/CircularProgress'

const setting = require("../../assets/images/Settings.png")
const pencil = require("../../assets/images/Pencil.png")
const clock = require("../../assets/images/Clock.png")
const male = require("../../assets/images/profiles/male-1.png")
const female = require("../../assets/images/profiles/female-6.png")
const base = require("../../assets/images/profiles/default.png")
const thunder = require("../../assets/images/Thunder.png")
const fire = require("../../assets/images/Fire.png")
const book = require("../../assets/images/Book.png")



const Box:React.FC<{source:any, data: string | number, title: string, className?: string, margin?:boolean }> = ({
  source, data, title, className="", margin=false
})=>(
  <View className='flex-row w-40 my-10'>
    <Image source={source} className={`${className}`} />
    <View className={margin?"mr-5":""}>
      <Text className='text-violet font-bold text-lg'>{data}</Text>
      <Text className='text-gray-700 text-sm'>{title}</Text>
    </View>
  </View>
)

const profile = () => {
  const { loading } = useAuth();
  const user = useSelector((state: RootState) => state.user.user);

  const formatJoinDate = (createdAt:string) => {
    const date = new Date(createdAt);
    return `Joined ${date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`;
  };



  return (
    <SafeAreaView className='h-full bg-white'>
      <TouchableOpacity onPress={()=>router.push("/settings")} className='flex-row justify-end'>
        <Image source={setting} className='size-7 mr-3' />
      </TouchableOpacity>
      <View className='flex-row justify-start m-10'>

        {/* Profile Avatar  */}
        <View className='relative items-center mr-5'>
          <Image source={user?.gender === 0 ? male : user?.gender === 1 ? female : base} className='size-28 mr-5 border-[5px] border-violet rounded-full' />
          <View className='absolute z-20 bottom-0 right-8 bg-violet p-1 rounded-full'>
            <Image source={pencil} className='size-5' />
          </View>
        </View>

        {/* Details */}
        <View className='justify-center'>
          <Text className='text-2xl'>{user?.first_name + " " + user?.last_name}</Text>
          <View className='flex-row items-center mt-3'>
            <Image source={clock} className='size-5 mr-1' />
            <Text className='text-violet'>{user?formatJoinDate(user.createdAt):"UNKNOWN"}</Text>
          </View>
        </View>

      </View>

      <View className='mt-14 px-10'>
        <Text className='text-2xl ml-4'>Overview</Text>

        <View className='flex-row flex-wrap justify-center'>
          
        <Box data='57' margin={true} source={fire} title='Daily Streaks' className='size-14' />
        <Box data={user?.xp || 0} source={thunder} title='Total XP'  />
        <View className='flex-row items-center w-40 my-10 mr-3'>
          <CircularProgress progress={10} size={40} strokeWidth={4} className='text-xs'  />
          <View className='ml-3'>
            <Text className='font-bold text-lg text-violet'>{10}</Text>
            <Text className='text-sm text-gray-700'>Total Completion</Text>
          </View>
        </View>
        <Box data='ASL' source={book} title='Language' className='size-12 mr-2'  />

        </View>
      </View>
      
    </SafeAreaView>
  )
}

export default profile
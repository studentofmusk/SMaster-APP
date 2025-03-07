import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLesson } from '@/contexts/LessonContext';
import { Quit } from '@/components/Icons';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';

const startHero = require("../../assets/images/startHero.jpg");

const Index = () => {

  const { lesson, loading, changeCurrentIndex, reset_xp} = useLesson();

  const handleStart = ()=>{
    changeCurrentIndex(0);
    reset_xp();
    router.push("/(lesson)/topic")

  }

  return (
    <SafeAreaView className='h-full bg-sweet-pink'>
      <TouchableOpacity onPress={()=>router.back()} className='ml-4 mt-2 size-[32px]'>
        <Quit color='#fff' size='32' />
      </TouchableOpacity>

      <View className='justify-center items-center h-full'>
        {loading? <ActivityIndicator size="large" color="white" />
        :<>
          <Image source={startHero} className='h-60 rounded-xl' style={{resizeMode: "contain"}} />
          <View className='h-[20%] mt-3'>
            <Text className='text-white text-3xl font-bold'>{lesson?.lesson_type}</Text>
            <Text className='text-white text-xl mt-2'>Total XP: {lesson?.total_xp}</Text>
          </View>
          <TouchableOpacity onPress={handleStart} className='rounded-sm px-10 py-2 bg-white'>
            <Text className='text-2xl uppercase text-sweet-pink'>Start</Text>
          </TouchableOpacity>
        </>
        }
      </View>
      <StatusBar backgroundColor='#F24D82' style='light' />
    </SafeAreaView>

  )
}

export default Index
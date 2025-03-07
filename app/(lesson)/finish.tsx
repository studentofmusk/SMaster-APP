import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useLesson } from '@/contexts/LessonContext'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';

const finishedImg = require("../../assets/images/ground.png")

const finish = () => {
  const {xp} = useLesson();
  return (
    <SafeAreaView style={{flex:1}} className='relative h-full bg-sweet-pink items-center justify-center'>
      <View className='items-center z-20'>
        <Text className='text-white text-4xl font-bold'>Hurray!!!</Text>
        <Text className='text-white text-xl mb-20'>Total {xp}XP</Text>
        <TouchableOpacity onPress={()=>router.replace("/(tabs)")} className='bg-white rounded-xl px-10 py-4'>
          <Text className='uppercase text-center text-2xl text-sweet-pink'>Claim</Text>
        </TouchableOpacity>
      </View>
      <Image source={finishedImg} className='absolute bottom-0 size-[100vw]' style={{resizeMode: "cover"}} />
      <StatusBar backgroundColor='#F24D82' style='light' />
    </SafeAreaView>
  )
}

export default finish
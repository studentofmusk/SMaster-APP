import { View, Text, Image, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import React from 'react'
import { useLesson } from '@/contexts/LessonContext'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { useAPI } from '@/hooks/useAPI';
import { IUser } from '@/interfaces/User';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { fetchUserProfile, setUser } from '@/store/userSlice';
import { update_level } from '@/api/user';

const finishedImg = require("../../assets/images/ground.png")

const finish = () => {
  const {xp} = useLesson();
  const {fetchAPI:updateLevel, loading} = useAPI<IUser>();
  const user = useSelector((state:RootState)=>state.user.user);
  const dispatch = useDispatch<AppDispatch>();

  const handleFinish = async()=>{
    try {
      
      const response = await updateLevel(update_level, "POST", {
        language_id: "67b0561d55d61a767c9e8ff8",
        current: user?.current.ASL,
        xp
      });

      if(response.success){
        dispatch(fetchUserProfile());
      }else{
        Alert.alert(response.message);
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Something went wrong!");
    }finally{
      router.replace("/(tabs)");
    }
  }
  return (
    <SafeAreaView style={{flex:1}} className='relative h-full bg-sweet-pink items-center justify-center'>
      <View className='items-center z-20'>
        <Text className='text-white text-4xl font-bold'>Hurray!!!</Text>
        <Text className='text-white text-xl mb-20'>Total {xp}XP</Text>
        <TouchableOpacity onPress={handleFinish} className='bg-white rounded-xl px-10 py-4'>
          {!loading
            ?<Text className='uppercase text-center text-2xl text-sweet-pink'>Claim</Text>
            :<ActivityIndicator size={'small'} color={"#f24d82"} />
          }
        </TouchableOpacity>
      </View>
      <Image source={finishedImg} className='absolute bottom-0 size-[100vw]' style={{resizeMode: "cover"}} />
      <StatusBar backgroundColor='#F24D82' style='light' />
    </SafeAreaView>
  )
}

export default finish
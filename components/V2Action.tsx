import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { IV2Action, IVideo } from '@/interfaces/Course'
import { useLesson } from '@/contexts/LessonContext';
import VideoPlayer from './VideoPlayer';
import { Camera, Sound } from './Icons';

const V2Action: React.FC<{v2action?: IV2Action, video?:IVideo}> = ({
    v2action,
    video
}) => {
    const {goToNext} = useLesson();
    const handleNext = ()=>{
      goToNext();
    }
    return (
      <View className='h-[90%] w-full px-10 items-center justify-between'>
        <View className='w-full items-center'>
          <Text className='mb-5 pl-3 text-3xl text-green font-bold w-full'>Action!</Text>
          <VideoPlayer
            video={video}
            key={v2action?._id}
          />
          <View className='mt-4 p-4 rounded-xl bg-green-light '>
            <Text className='text-gray-900 text-2xl font-bold uppercase'>{v2action?.title}</Text>
            </View>
            <View className='flex-row mt-4'>
            <View><Sound size='25' /></View>
            </View>
        </View>
        <TouchableOpacity className='bg-violet w-64 h-40 rounded justify-center items-center'>
            <Camera size='35' />
            <Text className='text-white font-bold'>START</Text>
            <View className='flex-row'>
                <Text className='text-sweet-pink font-bold'>RECORD</Text>
                <Text className='text-white font-bold'>ING</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNext} className='px-32 py-5 bg-sky-blue rounded-xl'>
          <Text className='text-white text-2xl' >Next</Text>
        </TouchableOpacity>
      </View>
    )
}
export default V2Action
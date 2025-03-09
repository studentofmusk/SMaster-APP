import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { IT2Action, IVideo } from '@/interfaces/Course'
import { useLesson } from '@/contexts/LessonContext';
import VideoPlayer from './VideoPlayer';
import { Camera, Sound } from './Icons';
import VideoRecorder from './VideoRecorder';

const T2Action: React.FC<{ t2action?: IT2Action, video?: IVideo }> = ({
  t2action,
  video
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const { goToNext } = useLesson();
  
  const handleNext = () => {
    goToNext();
  }
  return (
    <View className='h-[97%] w-full items-center justify-between'>
      <View className='w-full items-center'>
        <Text className='mb-5 pl-10 text-3xl text-green font-bold w-full'>Action!</Text>

        <View className='mt-4 p-4 rounded-xl bg-green-light '>
          <Text className='text-gray-900 text-2xl font-bold uppercase'>{t2action?.title}</Text>
        </View>
        <View className='flex-row mt-4'>
          <View><Sound size='25' /></View>
        </View>
        <TouchableOpacity onPress={()=>setIsRecording(true)} className={`mt-5 ${isRecording?"hidden":""} bg-violet w-64 h-40 rounded justify-center items-center`}>
          <Camera size='35' />
          <Text className='text-white font-bold'>START</Text>
          <View className='flex-row'>
            <Text className='text-sweet-pink font-bold'>RECORD</Text>
            <Text className='text-white font-bold'>ING</Text>
          </View>
        </TouchableOpacity>
        {
          isRecording?
          <VideoRecorder action_id={video?.action_id} onCancel={()=>setIsRecording(false)} className="mt-10 rounded-sm" />
          :<></>
        }
      </View>
      {
        isRecording?
        <></>
        :<TouchableOpacity onPress={handleNext} className='px-32 py-2 mb-10 border-2 border-sky-blue rounded-xl'>
          <Text className='text-sky-blue text-xl' >Skip for now</Text>
        </TouchableOpacity>
      }
      </View>
  )
}
export default T2Action
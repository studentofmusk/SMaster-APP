import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ILecture, IVideo } from '@/interfaces/Course'
import VideoPlayer from './VideoPlayer'
import { Eye, Sound } from './Icons'
import { useLesson } from '@/contexts/LessonContext'

const Lecture: React.FC<{ lecture?: ILecture, video?: IVideo }> = ({ lecture, video }) => {
  const {goToNext} = useLesson();
  const handleNext = ()=>{
    goToNext();
  }
  return (
    <View className='h-[90%] w-full px-10 items-center justify-between'>
      <View className='w-full items-center'>
        <Text className='mb-5 pl-3 text-3xl text-green font-bold w-full'>Lecture</Text>
        <VideoPlayer
          video={video}
          key={lecture?._id}
        />
        <View className='mt-4 p-4 rounded-xl bg-green-light '>
          <Text className='text-gray-900 text-2xl font-bold uppercase'>{lecture?.title}</Text>
        </View>
        <View className='flex-row mt-4'>
          <View className='mr-3'><Eye size='30' /></View>
          <View><Sound size='25' /></View>
        </View>
      </View>

      <TouchableOpacity onPress={handleNext} className='px-32 py-5 bg-sky-blue rounded-xl'>
        <Text className='text-white text-2xl' >Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Lecture
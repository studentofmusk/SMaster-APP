import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IV2Text, IVideo } from '@/interfaces/Course'
import { useLesson } from '@/contexts/LessonContext';
import VideoPlayer from './VideoPlayer';

const V2Text:React.FC<{video?:IVideo, v2text?: IV2Text, onCorrect:()=>void, onWrong:()=>void}> = ({
    video,
    v2text,
    onCorrect,
    onWrong
}) => { 
    const {goToNext} = useLesson();
    const [select, setSelect] = useState<null|number>(null);
    const handleNext = ()=>{
      goToNext();
    }
    return (
      <View className='h-[90%] w-full px-10 items-center justify-between'>
        <View className='w-full items-center'>
          <Text className='mb-5 pl-3 text-3xl text-green font-bold w-full'>Choose</Text>
          <VideoPlayer
            video={video}
            key={v2text?._id}
          />
        </View>
        <View>

        <View className='flex-row flex-wrap w-full'>
            <View onTouchStart={()=>setSelect(0)} className={`${select === 0?"border border-yellow-bold":"border-[0.5px] border-gray-900 "} shadow bg-white rounded-lg py-4 w-40 mb-3 mr-5`}>
                <Text className='text-center text-xl uppercase text-gray-900'>{v2text?.options[0]}</Text>
            </View>
            <View onTouchStart={()=>setSelect(1)} className={`${select === 1?"border border-yellow-bold":"border-[0.5px] border-gray-900 "} shadow bg-white rounded-lg py-4 w-40 mb-3`}>
                <Text className='text-center text-xl uppercase text-gray-900'>{v2text?.options[1]}</Text>
            </View>
        
            <View onTouchStart={()=>setSelect(2)} className={`${select === 2?"border border-yellow-bold":"border-[0.5px] border-gray-900 "} shadow bg-white rounded-lg py-4 w-40 mb-3 mr-5`}>
                <Text className='text-center text-xl uppercase text-gray-900'>{v2text?.options[2]}</Text>
            </View>
            <View onTouchStart={()=>setSelect(3)} className={`${select === 3?"border border-yellow-bold":"border-[0.5px] border-gray-900 "} shadow bg-white rounded-lg py-4 w-40 mb-3`}>
                <Text className='text-center text-xl uppercase text-gray-900'>{v2text?.options[3]}</Text>
            </View>
        </View>
        </View>
  
        <TouchableOpacity onPress={handleNext} className='px-32 py-5 bg-sky-blue rounded-xl'>
          <Text className='text-white text-2xl' >Next</Text>
        </TouchableOpacity>
      </View>
    )
}

export default V2Text
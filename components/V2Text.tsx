import { View, Text, TouchableOpacity, Alert } from 'react-native'
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
    const [shuffledOptions, setShuffledOptions] = useState<string[]>([])
    const [reveal, setReveal] = useState(false);
    const [status, setStatus] = useState(false);
    const handleNext = ()=>{
      if(!video || select == null) return;
      if(reveal) goToNext();
      if(shuffledOptions[select] === video.title){
        setStatus(true);
        onCorrect();
      }else{
        onWrong();
      }
      setReveal(true) 
    }
    useEffect(()=>{
      if(!v2text) return;
      setShuffledOptions([... v2text.options].sort(()=>Math.random()-0.5));
    },[])
    
    return (
      <View className=' relative h-[97%] w-full items-center justify-between'>
        <View className='w-full items-center'>
          <Text className='mb-5 pl-10 text-3xl text-green font-bold w-full'>Choose</Text>
          <VideoPlayer
            video={video}
            key={v2text?._id}
          />
        

        <View className='flex-row flex-wrap w-full px-10 justify-center mt-10'>
            {
              video && v2text && v2text.options.length > 0?
              shuffledOptions.map((text, idx)=>{
                return (
                  <View key={idx} onTouchStart={()=>setSelect(idx)} className={`${(text === video.title) && reveal? "border-2 border-green-active !bg-green-active" : select === idx && reveal? "border border-red-600 ": select === idx?"border border-yellow-bold":"border-[0.5px] border-gray-900 "} shadow bg-white rounded-lg py-4 w-36 mb-3 mr-5`}>
                      <Text className={`text-center text-xl uppercase ${text === video.title && reveal? "text-white" :"text-gray-900"}`}>{text}</Text>
                  </View>
                )
              })
              :<></>
            }
        </View>
        </View>
  
        <TouchableOpacity disabled={reveal} onPress={handleNext} className='mb-10 px-32 py-5 bg-sky-blue rounded-xl'>
          <Text className='text-white text-2xl' >Next</Text>
        </TouchableOpacity>

        <View className={`absolute duration-300 ${reveal?"bottom-0":"-bottom-60"} h-60 px-9 pt-6 rounded-t-2xl ${status?"bg-green-active":"bg-red-active"} w-full items-start`}>
          <Text className='text-white text-3xl font-bold italic'>{status?"CORRECT":"INCORRECT"}</Text>
          <Text className='text-xl font-bold text-white mt-5 italic'>{status?"Great Job":"Better luck next time!"}</Text>
          <TouchableOpacity onPress={()=>goToNext()} className='mt-3 bg-white rounded-xl w-[320px] py-4 mx-auto'>
            <Text className={`text-2xl ${status?"text-green-active":"text-red-active"} text-center`} >Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
}

export default V2Text
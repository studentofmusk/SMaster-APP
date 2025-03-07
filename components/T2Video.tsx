import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IT2Video, IVideo } from '@/interfaces/Course'
import { useLesson } from '@/contexts/LessonContext';
import { Sound } from './Icons';
import VideoPlayer from './VideoPlayer';

const T2Video: React.FC<{ t2video?: IT2Video, videos: IVideo[], onCorrect:()=>void, onWrong:()=>void }> = ({
    t2video,
    videos,
    onCorrect,
    onWrong
}) => {
    const { goToNext } = useLesson();
    const [select, setSelect] = useState<null | number>(null);
    const [shuffledOptions, setShuffledOptions] = useState<IVideo[]>([])
        const [reveal, setReveal] = useState(false);
        const [status, setStatus] = useState(false);
        
        const handleNext = ()=>{
          if(!t2video || select == null) return;
          if(reveal) goToNext();
          if(shuffledOptions[select].title === t2video.title){
            setStatus(true);
            onCorrect();
          }else{
            onWrong();
          }
          setReveal(true) 
        }
        useEffect(()=>{
          if(!videos) return;
          setShuffledOptions([... videos].sort(()=>Math.random()-0.5));
        },[])
    return (
        <View className='h-[97%] w-full items-center justify-between'>
            <View className='w-full items-center'>
                <Text className='mb-5 pl-10 text-3xl text-green font-bold w-full'>Guess</Text>
                <View className='mt-4 p-4 rounded-xl bg-green-light '>
                    <Text className='text-gray-900 text-2xl font-bold uppercase'>{t2video?.title}</Text>
                </View>
                <View className='flex-row mt-4'>
                    <View><Sound size='20' /></View>
                </View>
            

                <View className='flex-row flex-wrap w-full justify-center mt-10'>
                    {
                        videos && t2video && videos.length > 0?
                        shuffledOptions.map((video, idx)=>{
                        return (
                            <View key={idx} onTouchStart={() => setSelect(idx)} className='m-2'>
                                <VideoPlayer video={videos[idx]} ClassName={`w-40 h-28 ${(video.title === t2video.title) && reveal? "border-[3px] border-green-active" : select === idx && reveal? "border-[1px] border-red-600 ": select === idx?"border-[3px] border-yellow-bold":"border-[1px] border-green-light"} `} loop={true} />
                            </View>
                        )
                        })
                        :<></>
                    }
                </View>

                {/* <View className='flex-row flex-wrap w-full'>
                    <View onTouchStart={() => setSelect(0)} className='m-2'>
                        <VideoPlayer video={videos[0]} ClassName={`w-40 h-28 ${(video.title === t2video.title) && reveal? "border-[3px] border-green-active" : select === idx && reveal? "border-[1px] border-red-600 ": select === idx?"border-[3px] border-yellow-bold":"border-[1px] border-green-light"} `} loop={true} />
                    </View>
                    <View onTouchStart={() => setSelect(1)} className='m-2'>
                        <VideoPlayer video={videos[1]} ClassName={`w-40 h-28 ${select ===1 ? "border-[3px] border-yellow-bold" : "border-[1px] border-green-light"}`} loop={true} />
                    </View>
                    <View onTouchStart={() => setSelect(2)} className='m-2'>
                        <VideoPlayer video={videos[2]} ClassName={`w-40 h-28 ${select ===2 ? "border-[3px] border-yellow-bold" : "border-[1px] border-green-light"}`} loop={true} />
                    </View>
                    <View onTouchStart={() => setSelect(3)} className='m-2'>
                        <VideoPlayer video={videos[3]} ClassName={`w-40 h-28 ${select ===3 ? "border-[3px] border-yellow-bold" : "border-[1px] border-green-light"}`} loop={true} />
                    </View>
                </View> */}
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

export default T2Video
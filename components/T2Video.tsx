import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
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
    const handleNext = () => {
        goToNext();
    }
    return (
        <View className='h-[90%] w-full px-10 items-center justify-between'>
            <View className='w-full items-center'>
                <Text className='mb-5 pl-3 text-3xl text-green font-bold w-full'>Guess</Text>
                <View className='mt-4 p-4 rounded-xl bg-green-light '>
                    <Text className='text-gray-900 text-2xl font-bold uppercase'>{t2video?.title}</Text>
                </View>
                <View className='flex-row mt-4'>
                    <View><Sound size='20' /></View>
                </View>
            </View>
            <View>

                <View className='flex-row flex-wrap w-full'>
                    <View onTouchStart={() => setSelect(0)} className='m-2'>
                        <VideoPlayer video={videos[0]} ClassName={`w-40 h-28 ${select ===0 ? "border-[3px] border-yellow-bold" : "border-[1px] border-green-light"}`} loop={true} />
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
                </View>
            </View>

            <TouchableOpacity onPress={handleNext} className='px-32 py-5 bg-sky-blue rounded-xl'>
                <Text className='text-white text-2xl' >Next</Text>
            </TouchableOpacity>
        </View>
    )
}

export default T2Video
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLesson } from '@/contexts/LessonContext'
import { SafeAreaView } from 'react-native-safe-area-context';
import { TopicTypes } from '@/enums/Course';
import { ITopic } from '@/interfaces/Course';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Quit } from '@/components/Icons';
import Lecture from '@/components/Lecture';
import V2Text from '@/components/V2Text';
import T2Video from '@/components/T2Video';
import V2Action from '@/components/V2Action';
import T2Action from '@/components/T2Action';

const topic = () => {
  const {lesson, currentIndex, goToNext, update_xp, finished, videoMap, lectureMap, v2textMap, t2videoMap, v2actionMap, t2actionMap, loading} = useLesson();
  const [TOPIC, setTOPIC] = useState<ITopic>();
  useEffect(()=>{
    setTOPIC(lesson?.topics[currentIndex]);
  }, [currentIndex])

  useEffect(()=>{
    if(finished){
      router.replace("/(lesson)/finish")
    }
  }, [finished])
  
  const renderTopicContent = () => {
    if (!TOPIC) return <Text>Topic Not Found</Text>;

    switch (TOPIC.topic_type) {  // Assuming `TOPIC.type` holds the topic type
      case TopicTypes.LECTURE:{
        let lecture = lectureMap.get(TOPIC.topic_id);
        let video = videoMap.get(lecture?.video ||"");
        return <Lecture lecture={lecture} video={video} onCorrect={()=>update_xp(TOPIC.xp)} onWrong={()=>{}}/>;
      }
      case TopicTypes.V2TEXT:{
        let v2text = v2textMap.get(TOPIC.topic_id);
        let video = videoMap.get(v2text?.video ||"");
        
        return <V2Text v2text={v2text} video={video} onCorrect={()=>update_xp(TOPIC.xp)} onWrong={()=>{}} />;
      }
      case TopicTypes.T2VIDEO:{
        const t2video = t2videoMap.get(TOPIC.topic_id);
        const videos = (t2video?.options || [])
            .map(video_id => videoMap.get(video_id))
            .filter(video => video !== undefined);
            return <T2Video t2video={t2video} videos={videos} onCorrect={()=>update_xp(TOPIC.xp)} onWrong={()=>{}} />;
          }
      case TopicTypes.V2ACTION:{
        let v2action = v2actionMap.get(TOPIC.topic_id);
        let video = videoMap.get(v2action?.video ||"");
        
        return <V2Action v2action={v2action} video={video} />;
        }
      case TopicTypes.T2ACTION:{
        let t2action = t2actionMap.get(TOPIC.topic_id);
        let video = videoMap.get(t2action?.video ||"");
        
        return <T2Action t2action={t2action} video={video} />;
        }
      default:
        return <Text onPress={()=>goToNext()}>Unknown Topic Type</Text>;
    }
  };
  

  return (
    <SafeAreaView style={{flex: 1}} className='bg-white' >
      {/* Progress Bar  */}
      <View className='justify-center h-[100px] bg-white'>
          <View className='flex-row justify-between items-center px-4 w-full'>
            <TouchableOpacity onPress={()=>router.back()}>
              <Quit size='30'/>
            </TouchableOpacity>
            <View className='w-[80%] rounded-full h-5 border border-gray-700'>
              <View className='bg-sky-blue h-full rounded-full' style={{
                width:
                lesson?.topics?.length || 0 > 1
                ? `${currentIndex===0?10 :(currentIndex / ((lesson?.topics.length || 2) - 1)) * 100}%`
                : "0%",
                backgroundColor:
                currentIndex / ((lesson?.topics.length || 2)- 1) < 0.3
                  ? "#15C6F2"
                  : currentIndex / ((lesson?.topics.length || 2)- 1) < 0.5
                  ? "#4BD0BA"
                  : currentIndex / ((lesson?.topics.length || 2)- 1) <0.7
                  ?"#E6D24C"
                  :"#E69C4C"
                }}></View>
            </View>
            <View></View>
          </View>
      </View>

      {/* Topic  */}
      <View className='items-center h-[90%]'>
        
        {loading?
        <ActivityIndicator size="large" color="#000" />
        :(
          lesson?(
            TOPIC?(
              renderTopicContent()
            )
            :<Text>Topic Not Found</Text>
          )
          :<Text>Lesson Not Found</Text>
        )
        }
      </View>
      <StatusBar backgroundColor='white' style='dark' />
    </SafeAreaView>
  )
}

export default topic
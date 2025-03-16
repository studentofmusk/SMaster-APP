import { View, Text, Image, TouchableOpacity, ActivityIndicator, FlatList, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAPI } from '@/hooks/useAPI';
import { IVideo } from '@/interfaces/Course';
import { get_videos } from '@/api/course';
import { Quit, Reply, Retry } from '@/components/Icons';
import VideoPlayer from '@/components/VideoPlayer';

const lib_img = require("../../assets/images/library/Library.png")

const library = () => {
  useAuth();
  const {data:videos, loading, error, fetchAPI:getVideos} = useAPI<IVideo[]>();
  const [explore, setExplore] = useState(false);

  const [query, setQuery] = useState("");
  const [searchVideos, setSearchVideos] = useState<IVideo[]>([]);
  const [video, setVideo] = useState<IVideo | null>(null)

  useEffect(()=>{
    if(!explore) return;
    getVideos(get_videos);

  }, [explore])

  useEffect(()=>{
    if(query.trim()){
      let filtered = videos?.filter((video)=>video.title.includes(query.toLowerCase()))
      if(filtered){
        setSearchVideos(filtered)
      }else{
        setSearchVideos([]);
      }
    }else{
      setSearchVideos(videos || []);
    }
  }, [query])

  useEffect(()=>{
    setSearchVideos(videos||[])
  }, [videos])

  return (
    <SafeAreaView style={{flex:1}} className='relative bg-white'>
      <View className='mt-4 pl-5' >
        <Text className='text-gray-800 text-2xl'>Library</Text>
      </View>
      {!explore?
      <View className='mt-5 p-5 w-[90%] mx-auto bg-my-yellow h-72'>
      <View className='flex-row items-start '>
        <Image 
        source={lib_img} 
        className='size-40 rounded-lg' 
        style={{resizeMode:"contain"}} 
        />
        <View className='ml-5 mt-4 items-start' style={{flex:1}}>
          <Text className='text-violet text-xl uppercase font-bold'>Just refresh {"\n"}your Brain!</Text>
          <Text className='text-primary mt-2' >Here you can Revise all the concept you’ve learned</Text>
        </View>
        
        </View>
        <TouchableOpacity className='p-3 bg-[#F0F0F0] mt-4' onPress={()=>setExplore(true)} style={{
            shadowColor:"#000",
            shadowOffset:{
              height:2,
              width:0
            },
            shadowOpacity:0.25,
            shadowRadius:3.84,
            elevation:3
          }}>
            <Text className='text-black text-center text-lg'>Explore Library</Text>
          </TouchableOpacity>
          
      </View>
      :<View style={{flex:1}}>

          <TextInput 
              placeholder='Search'
              className='mx-auto w-[80%] mt-5 p-5 mb-10 border border-gray-700 rounded-xl'
              value={query}
              onChangeText={(text)=>setQuery(text)}
            />

        {
          loading
          ? <View style={{flex:1}} className='items-center justify-center'><ActivityIndicator size="large" color="blue" /></View>
          : error
          ? <Text>Error: {error}</Text>
          :<FlatList
            data={searchVideos}
            keyExtractor={(video)=>video._id}
            renderItem={({item:video})=>{
              return (
                <TouchableOpacity onPress={()=>setVideo(video)} style={{
                  shadowColor:"#000",
                  shadowOffset:{
                    width:2,
                    height:0
                  },
                  shadowOpacity:0.25,
                  shadowRadius:3.5,
                  elevation:3
                }} className='bg-white mx-8 pr-5 my-3 flex-row justify-between items-center h-20 border border-yellow-bold box-border rounded-xl overflow-hidden'>
                    <Image source={{uri:video.thumbnail}} style={{height:"100%"}} className='w-20 border-2 rounded-l-lg border-yellow-bold  ' resizeMode='cover' />
                    <View>
                      <Text className='uppercase font-bold text-xl text-gray-900'>{video.title}</Text>
                    </View>
                    <Retry size='25' />

                </TouchableOpacity>
              );
            }}
            ListEmptyComponent={()=>(
              <View >
                <Text className='text-center'>No Action found!</Text>
              </View>
            )}
          />

        }
      </View>
      }
      {video?
      <View className='absolute z-20 top-0 left-0 bg-white w-full h-[90vh]'>
        <View className='ml-auto mr-3 mt-3'>
          <TouchableOpacity onPress={()=>setVideo(null)}>
            <Quit color='black' size='40' />
          </TouchableOpacity>
            
        </View>
        
        <View className='mx-auto my-auto items-center '>
          <VideoPlayer 
          video={video}
          />
          <Text className='mt-5 text-center uppercase font-bold px-5 py-3 rounded-lg bg-green-light text-gray-900 text-2xl'>{video.title}</Text>
        </View>
      </View>
      :<></>
      }
    </SafeAreaView>
  )
}

export default library

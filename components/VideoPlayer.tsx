import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { ResizeMode, Video} from "expo-av"
import { IVideo } from '@/interfaces/Course'
import {Image} from "react-native"
import {Ionicons} from "@expo/vector-icons"
import { Reply } from './Icons'


const reply = require("../assets/images/lesson/reply.png")

const VideoPlayer:React.FC<{video?:IVideo}> = ({video}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [loading, setLoading] = useState(false)
  return (
    <View className='relative w-full h-56 border-[5px] rounded-2xl overflow-hidden border-yellow-bold'>
        <View className='absolute z-20 right-0 m-4'>
            {!isPlaying? <Reply size='20' />:""}
        </View>
        {
            isPlaying?(
                <Video
                    // ref={videoRef}
                    source={{ uri: video?.url! }}
                    style={{ width: '100%', height: "100%" }}
                    className='h-full'
                    // useNativeControls
                    shouldPlay
                    isMuted
                    resizeMode={ResizeMode.COVER}
                    onLoadStart={() => setLoading(true)}
                    onLoad={() => setLoading(false)}
                    onError={(e) => console.error("Video error:", e)}
                    onTouchStart={()=>setIsPlaying(false)}
                    
                    
                />
            ):(
                <TouchableOpacity onPress={()=>setIsPlaying(true)} className='w-full h-full' >
                    <Image
                        source={{uri:video?.thumbnail}}
                        style={{width:"100%", height:"100%"}}
                        resizeMode='cover'
                    />
                    <View>
                        {
                            loading ? (
                                <ActivityIndicator size="large" color="white" />
                            ):(
                                <Ionicons name='play-circle' size={60} color={"white"} />
                            )
                        }
                    </View>
                </TouchableOpacity>
            )
        }
    </View>
  )
}

export default VideoPlayer
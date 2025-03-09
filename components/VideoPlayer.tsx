import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { ResizeMode, Video} from "expo-av"
import { IVideo } from '@/interfaces/Course'
import {Image} from "react-native"
import {Ionicons} from "@expo/vector-icons"
import { Reply } from './Icons'


const reply = require("../assets/images/lesson/reply.png")

const VideoPlayer:React.FC<{video?:IVideo, ClassName?:string, loop?:boolean}> = ({
    video,
    ClassName="w-80 h-52 border-[5px]  border-yellow-bold",
    loop=false
}) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [loading, setLoading] = useState(false)
  return (
    <View className={`relative ${ClassName} rounded-2xl overflow-hidden`}>
        {
            !loop?
            <View className='absolute z-20 right-0 m-4'>
                {!isPlaying? <Reply size='20' />:""}
            </View>
            :<></>
        }
        {
            isPlaying || loop?(
                <Video
                    // ref={videoRef}
                    source={{ uri: video?.url! }}
                    style={{ width: '100%', height: "100%" }}
                    // useNativeControls
                    shouldPlay
                    isLooping={loop}
                    isMuted
                    resizeMode={ResizeMode.COVER}
                    onLoadStart={() => setLoading(true)}
                    onLoad={() => setLoading(false)}
                    onError={(e) => console.error("Video error:", e)}
                    onTouchStart={()=>setIsPlaying(false || loop)}
                    
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
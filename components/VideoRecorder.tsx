import { View, Text, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { CameraView, useCameraPermissions, useMicrophonePermissions } from 'expo-camera';
import { Quit } from './Icons';
import { useAPI } from '@/hooks/useAPI';
import { check_action } from '@/api/course';

const VideoRecorder: React.FC<{ action_id: number | undefined, duration?: number, className?:string, onCancel:()=>void, setOkay:(ok:boolean)=>void }> = ({ 
    duration = 10, 
    className="", 
    action_id=0,
    onCancel=()=>{},
    setOkay=(ok:boolean)=>{}
 }) => {
    const {fetchAPI:uploadVideo, loading} = useAPI<boolean>()
    const [cameraPermission, requestCameraPermission] = useCameraPermissions();
    const [microphonePermission, requestMicrophonePermission] = useMicrophonePermissions();
    const [tempUri, setTempUri] = useState<string>("");

    // const [audioPermission, setAudioPermission] = useState(false);
    const cameraRef = useRef<CameraView>(null);
    const [isRecording, setIsRecording] = useState(false);
    const [recordingMessage, setRecordingMessage] = useState('');

    
    
    // -------------------------RECORDING------------------------------
    
    const startRecording = async()=>{
        if (!cameraRef.current) return ;

        try {
            const videoPromise =  cameraRef.current.recordAsync({
                maxDuration:duration
            });

            setIsRecording(true);
            setRecordingMessage('Recording...');
            
            const videoData = await videoPromise;

            setIsRecording(false);
            setRecordingMessage('Recording stopped.');

            if (videoData?.uri) {
                setTempUri(videoData.uri);
                check();
            }

        } catch (error) {
            console.error('Error recording video:', error);
            Alert.alert('Error', 'Failed to record video.');
            setIsRecording(false);
        }
    }
    
    // ------------------------------------------------------------------

    const check =  async()=>{
        const formData = new FormData();
        formData.append("video", {
            uri:tempUri,
            type: "video/mp4",
            name:`video_${Date.now()}.mp4`
        } as any);
        formData.append("action_id", `${action_id}`);

        try {
            const response = await uploadVideo(check_action, "POST", formData, {
                "Content-Type":"multipart/form-data"
            });
            if(response.success){
                if(response.data){
                    setOkay(true)
                }else{
                    Alert.alert("Action NOT Matched!\nTry Again!\nYou can do it!");
                }
            }else{
                Alert.alert(response.message);
            }
        } catch (error) {
            Alert.alert("Something went wrong!")
        }
    }

    useEffect(()=>{
        requestCameraPermission();
        requestMicrophonePermission();
    }, [])
    // Render permission request UI
    if (!cameraPermission || !microphonePermission) {
        return (
            <View>
                <ActivityIndicator size="large" color="blue" />
            </View>
        );
    }

    // Render permission request UI
    if (!cameraPermission?.granted || !microphonePermission) {
        return (
            <View>
                <ActivityIndicator size="large" color="blue" />
                <TouchableOpacity onPress={requestCameraPermission}>
                    <Text >Grant Permission</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View className={`${className}`}>
            <CameraView
                ref={cameraRef}
                facing="front"
                mode='video'
                style={{
                    height:350,
                    width:220,
                    borderRadius:10,
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"flex-end",
                    alignItems:"center"
                }}
            >
                <View className='px-6 py-3 bg-white z-20 mb-3 rounded-md' >
                    {isRecording ? (
                        <TouchableOpacity onPress={()=>cameraRef.current?.stopRecording()} ><Text>{recordingMessage}</Text></TouchableOpacity>
                    ) : 
                    loading? (
                    <ActivityIndicator size="small" color="blue" />
                            )
                    :(
                        <TouchableOpacity onPress={startRecording}>
                            <Text className='uppercase w-[100px] text-center text-sky-blue'  >Start</Text>
                        </TouchableOpacity>
                    )}
                </View>
                <TouchableOpacity onPress={onCancel} className='absolute top-0 right-0 m-3'>
                    <Quit size='30' color='white' />
                </TouchableOpacity>
            </CameraView>
            
        </View>
    );
};
export default VideoRecorder;
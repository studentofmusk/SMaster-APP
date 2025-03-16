import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { IV2Action, IVideo } from '@/interfaces/Course'
import { useLesson } from '@/contexts/LessonContext';
import VideoPlayer from './VideoPlayer';
import { Camera, Sound } from './Icons';
import VideoRecorder from './VideoRecorder';

const completed = require("../assets/images/lesson/completed.jpg");

const V2Action: React.FC<{ v2action?: IV2Action, video?: IVideo, onCorrect?: () => void, onWrong?: () => void }> = ({
  v2action,
  video,
  onCorrect = () => { },
  onWrong = () => { }
}) => {
  const [status, setStatus] = useState<"idle" | "recording" | "completed">("idle");
  const { goToNext } = useLesson();

  const handleNext = () => {
    if (status === "completed") {
      onCorrect();
    }
    goToNext();
  };

  return (
    <View className="w-full items-center justify-between flex-1">
      <View className="w-full items-center">
        <Text className="mb-5 pl-10 text-3xl text-green font-bold w-full">Action!</Text>

        {/* Video Display */}
        <VideoPlayer
          video={video}
          key={v2action?._id}
          ClassName={`${status === "recording" ? "w-60 h-40" : "w-80 h-52"} border-[5px] border-yellow-bold`}
        />

        {status === "idle" && (
          <>
            <View className="mt-4 p-4 rounded-xl bg-green-light">
              <Text className="text-gray-900 text-2xl font-bold uppercase">{v2action?.title}</Text>
            </View>

            <View className="flex-row mt-4">
              <Sound size="25" />
            </View>

            <TouchableOpacity
              onPress={() => setStatus("recording")}
              className="mt-5 bg-violet w-64 h-40 rounded justify-center items-center"
            >
              <Camera size="35" />
              <Text className="text-white font-bold">START</Text>
              <View className="flex-row">
                <Text className="text-sweet-pink font-bold">RECORD</Text>
                <Text className="text-white font-bold">ING</Text>
              </View>
            </TouchableOpacity>
          </>
        )}

        {status === "recording" && (
          <VideoRecorder
            action_id={video?.action_id}
            duration={5}
            onCancel={() => setStatus("idle")}
            setStatus={setStatus}
            className="mt-10 rounded-sm"
          />
        )}

        {status === "completed" && (
          <View className="my-2 items-center justify-center h-52 w-52">
            <Image source={completed} className="size-32" style={{ resizeMode: "contain" }} />
            <Text className="text-teal-500 font-bold text-xl uppercase">Completed</Text>
          </View>
        )}
      </View>

      {/* Navigation Buttons */}
      
      <TouchableOpacity
        onPress={handleNext}
        className={`px-32 py-3 mb-16  ${status === "completed" ? "bg-sky-blue" :status== "recording"? "hidden" :"border-2 border-sky-blue"} rounded-xl`}
      >
        <Text className={status === "completed" ? "text-white" : "text-sky-blue"} text-xl>
          {status === "completed" ? "Next" : "Skip for now"}
        </Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default V2Action;

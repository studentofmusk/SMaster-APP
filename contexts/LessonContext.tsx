import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useLocalSearchParams } from "expo-router";
import { ILecture, ILesson, IT2Action, IT2Video, IV2Action, IV2Text, IVideo } from "@/interfaces/Course";
import { get_lectures, get_lessons, get_t2action, get_t2video, get_v2action, get_v2text, get_videos } from "@/api/course";
import { useAPI } from "@/hooks/useAPI";

// Define the type for the context value
interface LessonContextType {
  lesson: ILesson | null;
  videoMap: Map<string, IVideo>;
  lectureMap: Map<string, ILecture>;
  v2textMap: Map<string, IV2Text>;
  t2videoMap: Map<string, IT2Video>;
  v2actionMap: Map<string, IV2Action>;
  t2actionMap: Map<string, IT2Action>;
  loading: boolean;
  currentIndex: number;
  xp:number;
  update_xp: (xp:number)=>void;
  goToNext: ()=>void;
  finished: boolean;
  changeCurrentIndex: (idx: number)=>void
}

// Create a context with the defined type
const LessonContext = createContext<LessonContextType>({
    lesson: null,
    videoMap: new Map(),
    lectureMap: new Map(),
    v2textMap: new Map(),
    t2videoMap: new Map(),
    v2actionMap: new Map(),
    t2actionMap: new Map(),
    loading: true,
    currentIndex:0,
    xp:0,
    update_xp:(xp)=>{},
    goToNext:()=>{},
    finished: false,
    changeCurrentIndex:(idx:number)=>{}
  });
    
    

// Define props type for the provider
interface LessonProviderProps {
  children: ReactNode; // ✅ Fix for the "children" error
}

export const LessonProvider: React.FC<LessonProviderProps> = ({ children }) => {
  const { id } = useLocalSearchParams();
  const {data:lesson, fetchAPI:getLesson, loading} = useAPI<ILesson>();
  const { data: lectures, fetchAPI: getLectures } = useAPI<ILecture[]>();
  const { data: v2texts, fetchAPI: getV2texts } = useAPI<IV2Text[]>();
  const { data: t2videos, fetchAPI: getT2videos } = useAPI<IT2Video[]>();
  const { data: v2actions, fetchAPI: getV2actions } = useAPI<IV2Action[]>();
  const { data: t2actions, fetchAPI: getT2actions } = useAPI<IT2Action[]>();
  
  const {data:videos, error:videoError, fetchAPI:getVideos} = useAPI<IVideo[]>();

  // Maps
  const [videoMap, setVideoMap] = useState<Map<string, IVideo>>(new Map()); 
  const [lectureMap, setLectureMap] = useState<Map<string, ILecture>>(new Map()); 
  const [v2textMap, setV2textMap] = useState<Map<string, IV2Text>>(new Map()); 
  const [t2videoMap, setT2videoMap] = useState<Map<string, IT2Video>>(new Map()); 
  const [v2actionMap, setV2actionMap] = useState<Map<string, IV2Action>>(new Map()); 
  const [t2actionMap, setT2actionMap] = useState<Map<string, IT2Action>>(new Map()); 

  // States
  const [xp, setXp] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  // Update XP
  const update_xp = (newXp: number)=>{
    setXp((prevXp)=>prevXp + newXp)
  }

  const goToNext = ()=>{
    if ((currentIndex + 1) < (lesson?.topics||[]).length){
      setCurrentIndex(currentIndex + 1);
    }else{
      setFinished(true);
    }
  }

  const changeCurrentIndex = (idx: number)=>{
    if (idx < (lesson?.topics||[]).length){
      setCurrentIndex(idx);
    }
  }


  

  useEffect(()=>{
    setVideoMap(new Map(videos?.map((video)=>[video._id, video])));
  }, [videos])
  
  useEffect(()=>{
    setLectureMap(new Map(lectures?.map((lecture)=>[lecture._id, lecture])));
  }, [lectures])
  
  useEffect(()=>{
    setV2textMap(new Map(v2texts?.map((v2text)=>[v2text._id, v2text])));
  }, [v2texts])
  
  useEffect(()=>{
    setT2videoMap(new Map(t2videos?.map((t2video)=>[t2video._id, t2video])));
  }, [t2videos])
  
  useEffect(()=>{
    setV2actionMap(new Map(v2actions?.map((v2action)=>[v2action._id, v2action])));
  }, [v2actions])
  
    useEffect(()=>{
      setT2actionMap(new Map(t2actions?.map((t2action)=>[t2action._id, t2action])));
    }, [t2actions])
  
  useEffect(()=>{
    getVideos(get_videos);
    getLectures(get_lectures);
    getV2texts(get_v2text);
    getT2videos(get_t2video);
    getV2actions(get_v2action);
    getT2actions(get_t2action);
  }, [])

  useEffect(() => {
    if (!id) return;
    getLesson(get_lessons + "?id="+id);
  }, [id]);


  return (
    <LessonContext.Provider value={{ lesson, xp, update_xp, currentIndex, goToNext, changeCurrentIndex, finished, videoMap, lectureMap, v2textMap, t2videoMap, v2actionMap, t2actionMap, loading }}>
      {children}
    </LessonContext.Provider>
  );
};


export const useLesson = () => useContext(LessonContext);
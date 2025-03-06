import React from 'react'
import { Stack } from 'expo-router'
import { LessonProvider } from '@/contexts/LessonContext'


const RootLesson = () => {
  return (
    <LessonProvider>
          <Stack initialRouteName='index'>
              <Stack.Screen name='index' options={{headerShown:false}} />
              <Stack.Screen name='topic' options={{headerShown:false}} />
              <Stack.Screen name='finish' options={{headerShown:false}} />
          </Stack>
    </LessonProvider>
  )
}

export default RootLesson
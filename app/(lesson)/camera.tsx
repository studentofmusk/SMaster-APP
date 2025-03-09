import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import VideoRecorder from '@/components/VideoRecorder'

const camera = () => {
  return (
    <SafeAreaView>
        <VideoRecorder duration={3} />
    </SafeAreaView>
  )
}

export default camera
import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Tabs } from 'expo-router'

const RootTab = () => {
  return (
    <SafeAreaView className='' style={{flex:1}}>
      <Tabs 
      screenOptions={{
        tabBarStyle:{
          backgroundColor: "#fff",
          paddingBottom: 5
        },
        tabBarActiveTintColor:"#f03",
        tabBarInactiveTintColor:"gray",
        headerShown:false
      }}
      >

        <Tabs.Screen 
          name='index'
          options={{
            title: "Home",
            tabBarIcon:(({color, size})=><View><Text style={{color}}>H</Text></View>)
          }}
        />

        <Tabs.Screen 
          name='explore'
          options={{
            title: "Explore",
            tabBarIcon:(({color, size})=><View><Text className='text-green-600' >E</Text></View>)
          }}
        />
        
      </Tabs>
    </SafeAreaView>
  )
}

export default RootTab
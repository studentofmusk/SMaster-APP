import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Tabs } from 'expo-router'
import { useAuth } from '@/hooks/useAuth';
// Icons 
const homeImg = require("../../assets/images/tabs/Home.png");
const bellImg = require("../../assets/images/tabs/Bell.png");
const bookmarkImg = require("../../assets/images/tabs/Bookmark.png");
const userImg = require("../../assets/images/tabs/User.png");


const RootTab = () => {
  const {loading} = useAuth();

  return (
    <SafeAreaView className='' style={{flex:1}}>
      <Tabs 
      initialRouteName='index'
      screenOptions={{
        tabBarStyle:{
          backgroundColor: "#fff",
          paddingBottom: 5
        },
        tabBarActiveTintColor:"#1D267D",
        tabBarInactiveTintColor:"#fff",
        headerShown:false
      }}
      >

        <Tabs.Screen 
          name='index'
          options={{
            title: "Home",
            tabBarIcon:(({color})=><Image className='size-8' source={homeImg} />)
          }}
        />
        {/* <Tabs.Screen 
          name='notification'

          options={{
            title: "Notification",
            tabBarIcon:(({color})=><Image className='size-8' source={bellImg} />)
          }}
          
        /> */}
        <Tabs.Screen 
          name='library'
          options={{
            title: "Library",
            tabBarIcon:(({color})=><Image className='size-8' source={bookmarkImg} />)
          }}
        />
        <Tabs.Screen 
          name='profile'
          options={{
            title: "Profile",
            tabBarIcon:(({color})=><Image className='size-8' source={userImg} />)
          }}
        />
        
      </Tabs>
      {/* <StatusBar style="dark" backgroundColor='white' /> */}
    </SafeAreaView>
  )
}

export default RootTab
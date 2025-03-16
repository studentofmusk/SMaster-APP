import { View, Text, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import CircularProgress from './CircularProgress'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

const male1 = require("../assets/images/profiles/male-1.png")
const male2 = require("../assets/images/profiles/male-2.png")
const male3 = require("../assets/images/profiles/male-3.png")
const male4 = require("../assets/images/profiles/male-4.png")
const male5 = require("../assets/images/profiles/male-5.png")
const male6 = require("../assets/images/profiles/male-6.png")
const female1 = require("../assets/images/profiles/female-1.png")
const female2 = require("../assets/images/profiles/female-2.png")
const female3 = require("../assets/images/profiles/female-3.png")
const female4 = require("../assets/images/profiles/female-4.png")
const female5 = require("../assets/images/profiles/female-5.png")
const female6 = require("../assets/images/profiles/female-6.png")
const base = require("../assets/images/profiles/default.png")

const profileImages: { [key: string]: any } = {
    "default.png": base,
    "male-1.png":male1,
    "male-2.png":male2,
    "male-3.png":male3,
    "male-4.png":male4,
    "male-5.png":male5,
    "male-6.png":male6,
    "female-1.png":female1,
    "female-2.png":female2,
    "female-3.png":female3,
    "female-4.png":female4,
    "female-5.png":female5,
    "female-6.png":female6,
};

const Header: React.FC<{ percentage: number }> = ({ percentage = 0 }) => {
    const user = useSelector((state: RootState) => state.user.user);
    const loading = useSelector((state: RootState) => state.user.loading);

    // Use mapped image or default
    const profile = user?.profile ? profileImages[user.profile] || base : base;

    return (
        <View className='mt-5 flex flex-row justify-between items-center px-10'>
            <View className='flex flex-row items-center'>
                <Image source={profile} className='size-24 mr-5 border rounded-full' />
                <View>
                    <Text>Hello,</Text>
                    {loading ? (
                        <ActivityIndicator size="small" color="blue" />
                    ) : user ? (
                        <Text className="text-xl text-primary">
                            {user.first_name} {user.last_name}
                        </Text>
                    ) : (
                        <Text className="text-gray-500">User Not Found</Text>
                    )}
                </View>
            </View>

            <View>
                <CircularProgress progress={percentage} size={50} strokeWidth={5} />
            </View>
        </View>
    )
}

export default Header;

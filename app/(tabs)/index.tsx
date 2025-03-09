import { View, Image, Text, ScrollView, FlatList, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import Header from '@/components/Header';
import { IGroup, ILesson, ISeason } from '@/interfaces/Course';
import { Tile1, Tile2, Tile3, Tile4, Tile5, Tile6, Tile7, Tile8, Tile9 } from '@/components/LevelIcon';
import { LessonTypes } from '@/enums/Course';
import { router } from 'expo-router';

const fire = require("../../assets/images/Fire.png")

const { width } = Dimensions.get("window"); // Get screen width dynamically


const index = () => {

  const user = useSelector((state: RootState) => state.user.user);
  const loading = useSelector((state: RootState) => state.user.loading);

  
  const [curr_season, curr_group, curr_lesson] = (user?.current.ASL || "0.0.0").split(".").map((ele)=>parseInt(ele))


  const [seasons, setSeasons] = useState<ISeason[]>([
    {
      "_id": "67b05c01432f709a1a979b0d",
      "title": "SEASON 1",
      "language_id": "67b0561d55d61a767c9e8ff8",
      "groups": [
        "67c537b5b762c9a115b8f6df",
        "67c554be5af07320e0883033",
        "67c554d45af07320e0883037",
        "67c554dd5af07320e088303b"
      ],
      "createdAt": "2025-02-15T09:18:57.436Z",
      "updatedAt": "2025-03-03T07:19:36.995Z",
      "__v": 6
    }
  ]);
  const [groups, setGroups] = useState<IGroup[]>([
    {
      "_id": "67c537b5b762c9a115b8f6df",
      "title": "basic signs",
      "season_id": "67b05c01432f709a1a979b0d",
      "lessons": [
        "67c54d38d9d066afd217b188",
        "67c55063679bdafdc78d1804",
        "67c55e9e5af07320e0883d6e",
        "67c697fdc42333d603fea744",
        "67c69bf6c42333d603feba95"
      ],
      "createdAt": "2025-03-03T05:01:41.282Z",
      "updatedAt": "2025-03-04T06:30:34.223Z",
      "__v": 3
    },
    {
      "_id": "67c554be5af07320e0883033",
      "title": "fruits and vegetables",
      "season_id": "67b05c01432f709a1a979b0d",
      "lessons": [
        "67c555105af07320e0883106",
        "67c558565af07320e08835da",
        "67c692b3c42333d603fea1f8",
        "67c69bbdc42333d603feb3f7",
        "67c69c6cc42333d603febd36"
      ],
      "createdAt": "2025-03-03T07:05:34.542Z",
      "updatedAt": "2025-03-04T06:30:54.224Z",
      "__v": 3
    },
    {
      "_id": "67c554d45af07320e0883037",
      "title": "greetings",
      "season_id": "67b05c01432f709a1a979b0d",
      "lessons": [
        "67c55a4f5af07320e0883781",
        "67c55ab75af07320e0883855",
        "67c69a63c42333d603fead92",
        "67c69cd0c42333d603fec189",
        "67c69c73c42333d603febd39"
      ],
      "createdAt": "2025-03-03T07:05:56.010Z",
      "updatedAt": "2025-03-04T06:31:19.374Z",
      "__v": 3
    },
    {
      "_id": "67c554dd5af07320e088303b",
      "title": "sports",
      "season_id": "67b05c01432f709a1a979b0d",
      "lessons": [
        "67c55b945af07320e08839b4",
        "67c55b9c5af07320e08839b7",
        "67c69a6fc42333d603fead95",
        "67c69dd5c42333d603fec7f8",
        "67c69c7ac42333d603febd3e"
      ],
      "createdAt": "2025-03-03T07:06:05.231Z",
      "updatedAt": "2025-03-04T06:33:06.907Z",
      "__v": 3
    }
  ]);
  const [lessons, setLessons] = useState<ILesson[]>([
    {
      "_id": "67c54d38d9d066afd217b188",
      "total_xp": 70,
      "group_id": "67c537b5b762c9a115b8f6df",
      "lesson_type": "LEARNING",
      "topics": [
        {
          "topic_type": "LECTURE",
          "topic_id": "67c53be8b762c9a115b8f794",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a19dc42333d603fef122"
        },
        {
          "topic_type": "LECTURE",
          "topic_id": "67c53c77b762c9a115b8f7b1",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a19dc42333d603fef123"
        },
        {
          "topic_type": "TEXT_TO_VIDEO",
          "topic_id": "67c54e56c215a52b5999550c",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a19dc42333d603fef124"
        },
        {
          "topic_type": "VIDEO_TO_ACTION",
          "topic_id": "67c5465ab762c9a115b8f83f",
          "skippable": true,
          "xp": 15,
          "_id": "67c6a19dc42333d603fef125"
        },
        {
          "topic_type": "TEXT_TO_VIDEO",
          "topic_id": "67c54b92b762c9a115b8f95a",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a19dc42333d603fef126"
        },
        {
          "topic_type": "VIDEO_TO_ACTION",
          "topic_id": "67c54651b762c9a115b8f83b",
          "skippable": true,
          "xp": 15,
          "_id": "67c6a19dc42333d603fef127"
        }
      ],
      "__v": 8
    },
    {
      "_id": "67c55063679bdafdc78d1804",
      "total_xp": 60,
      "group_id": "67c537b5b762c9a115b8f6df",
      "lesson_type": "LEARNING",
      "topics": [
        {
          "topic_type": "LECTURE",
          "topic_id": "67b9d5a752aacad832dbfe25",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a1c9c42333d603fef231"
        },
        {
          "topic_type": "VIDEO_TO_TEXT",
          "topic_id": "67c54950b762c9a115b8f923",
          "skippable": false,
          "xp": 5,
          "_id": "67c6a1c9c42333d603fef232"
        },
        {
          "topic_type": "LECTURE",
          "topic_id": "67c53c24b762c9a115b8f7a1",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a1c9c42333d603fef233"
        },
        {
          "topic_type": "VIDEO_TO_ACTION",
          "topic_id": "67c5462cb762c9a115b8f82b",
          "skippable": true,
          "xp": 15,
          "_id": "67c6a1c9c42333d603fef234"
        },
        {
          "topic_type": "VIDEO_TO_TEXT",
          "topic_id": "67c549d4b762c9a115b8f92c",
          "skippable": false,
          "xp": 5,
          "_id": "67c6a1c9c42333d603fef235"
        },
        {
          "topic_type": "VIDEO_TO_ACTION",
          "topic_id": "67c5463eb762c9a115b8f833",
          "skippable": true,
          "xp": 15,
          "_id": "67c6a1c9c42333d603fef236"
        }
      ],
      "__v": 3
    },
    {
      "_id": "67c555105af07320e0883106",
      "total_xp": 30,
      "group_id": "67c554be5af07320e0883033",
      "lesson_type": "LEARNING",
      "topics": [
        {
          "topic_type": "LECTURE",
          "topic_id": "67c53bf5b762c9a115b8f798",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a1f1c42333d603fef34b"
        },
        {
          "topic_type": "VIDEO_TO_TEXT",
          "topic_id": "67c549b5b762c9a115b8f929",
          "skippable": false,
          "xp": 5,
          "_id": "67c6a1f1c42333d603fef34c"
        },
        {
          "topic_type": "LECTURE",
          "topic_id": "67b9d58c52aacad832dbfe17",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a1f1c42333d603fef34d"
        },
        {
          "topic_type": "VIDEO_TO_TEXT",
          "topic_id": "67c54914b762c9a115b8f920",
          "skippable": false,
          "xp": 5,
          "_id": "67c6a1f1c42333d603fef34e"
        }
      ],
      "__v": 4
    },
    {
      "_id": "67c558565af07320e08835da",
      "total_xp": 50,
      "group_id": "67c554be5af07320e0883033",
      "lesson_type": "LEARNING",
      "topics": [
        {
          "topic_type": "LECTURE",
          "topic_id": "67b9d59d52aacad832dbfe21",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a22ec42333d603fef9d6"
        },
        {
          "topic_type": "LECTURE",
          "topic_id": "67c53c06b762c9a115b8f79c",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a22ec42333d603fef9d7"
        },
        {
          "topic_type": "VIDEO_TO_TEXT",
          "topic_id": "67c54a25b762c9a115b8f932",
          "skippable": false,
          "xp": 5,
          "_id": "67c6a22ec42333d603fef9d8"
        },
        {
          "topic_type": "TEXT_TO_VIDEO",
          "topic_id": "67c54c6ad282d4fba86ac947",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a22ec42333d603fef9d9"
        },
        {
          "topic_type": "VIDEO_TO_ACTION",
          "topic_id": "67ba802a8896a2e51bcafb96",
          "skippable": true,
          "xp": 15,
          "_id": "67c6a22ec42333d603fef9da"
        }
      ],
      "__v": 6
    },
    {
      "_id": "67c55a4f5af07320e0883781",
      "total_xp": 65,
      "group_id": "67c554d45af07320e0883037",
      "lesson_type": "LEARNING",
      "topics": [
        {
          "topic_type": "LECTURE",
          "topic_id": "67c53bbfb762c9a115b8f78a",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a258c42333d603fefe8a"
        },
        {
          "topic_type": "LECTURE",
          "topic_id": "67b9d51152aacad832dbfe03",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a258c42333d603fefe8b"
        },
        {
          "topic_type": "TEXT_TO_VIDEO",
          "topic_id": "67c54b3fb762c9a115b8f94e",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a258c42333d603fefe8c"
        },
        {
          "topic_type": "VIDEO_TO_TEXT",
          "topic_id": "67c5497fb762c9a115b8f926",
          "skippable": false,
          "xp": 5,
          "_id": "67c6a258c42333d603fefe8d"
        },
        {
          "topic_type": "VIDEO_TO_ACTION",
          "topic_id": "67c54636b762c9a115b8f82f",
          "skippable": true,
          "xp": 15,
          "_id": "67c6a258c42333d603fefe8e"
        },
        {
          "topic_type": "VIDEO_TO_ACTION",
          "topic_id": "67c54623b762c9a115b8f827",
          "skippable": true,
          "xp": 15,
          "_id": "67c6a258c42333d603fefe8f"
        }
      ],
      "__v": 2
    },
    {
      "_id": "67c55ab75af07320e0883855",
      "total_xp": 65,
      "group_id": "67c554d45af07320e0883037",
      "lesson_type": "LEARNING",
      "topics": [
        {
          "topic_type": "LECTURE",
          "topic_id": "67b9d53052aacad832dbfe0d",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a287c42333d603feffb7"
        },
        {
          "topic_type": "LECTURE",
          "topic_id": "67c53c5fb762c9a115b8f7ad",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a287c42333d603feffb8"
        },
        {
          "topic_type": "VIDEO_TO_TEXT",
          "topic_id": "67c54a04b762c9a115b8f92f",
          "skippable": false,
          "xp": 5,
          "_id": "67c6a287c42333d603feffb9"
        },
        {
          "topic_type": "VIDEO_TO_ACTION",
          "topic_id": "67c5468cb762c9a115b8f84d",
          "skippable": true,
          "xp": 15,
          "_id": "67c6a287c42333d603feffba"
        },
        {
          "topic_type": "TEXT_TO_VIDEO",
          "topic_id": "67c54c1c0dc0af74f2bee12f",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a287c42333d603feffbb"
        },
        {
          "topic_type": "VIDEO_TO_ACTION",
          "topic_id": "67c5469cb762c9a115b8f851",
          "skippable": true,
          "xp": 15,
          "_id": "67c6a287c42333d603feffbc"
        }
      ],
      "__v": 2
    },
    {
      "_id": "67c55b945af07320e08839b4",
      "total_xp": 70,
      "group_id": "67c554dd5af07320e088303b",
      "lesson_type": "LEARNING",
      "topics": [
        {
          "topic_type": "LECTURE",
          "topic_id": "67c53c45b762c9a115b8f7a9",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a2b8c42333d603ff0392"
        },
        {
          "topic_type": "LECTURE",
          "topic_id": "67b9d4cd52aacad832dbfdff",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a2b8c42333d603ff0393"
        },
        {
          "topic_type": "TEXT_TO_VIDEO",
          "topic_id": "67c54c9cd282d4fba86ac94d",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a2b8c42333d603ff0394"
        },
        {
          "topic_type": "VIDEO_TO_ACTION",
          "topic_id": "67c546a6b762c9a115b8f855",
          "skippable": true,
          "xp": 15,
          "_id": "67c6a2b8c42333d603ff0395"
        },
        {
          "topic_type": "TEXT_TO_VIDEO",
          "topic_id": "67c54cf2d282d4fba86ac95f",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a2b8c42333d603ff0396"
        },
        {
          "topic_type": "VIDEO_TO_ACTION",
          "topic_id": "67c546adb762c9a115b8f859",
          "skippable": true,
          "xp": 15,
          "_id": "67c6a2b8c42333d603ff0397"
        }
      ],
      "__v": 2
    },
    {
      "_id": "67c55b9c5af07320e08839b7",
      "total_xp": 40,
      "group_id": "67c554dd5af07320e088303b",
      "lesson_type": "LEARNING",
      "topics": [
        {
          "topic_type": "LECTURE",
          "topic_id": "67c53c3cb762c9a115b8f7a5",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a2d0c42333d603ff076f"
        },
        {
          "topic_type": "TEXT_TO_VIDEO",
          "topic_id": "67c54cbbd282d4fba86ac953",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a2d0c42333d603ff0770"
        },
        {
          "topic_type": "LECTURE",
          "topic_id": "67c53c9db762c9a115b8f7b5",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a2d0c42333d603ff0771"
        },
        {
          "topic_type": "TEXT_TO_VIDEO",
          "topic_id": "67c54cd1d282d4fba86ac959",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a2d0c42333d603ff0772"
        }
      ],
      "__v": 2
    },
    {
      "_id": "67c55e9e5af07320e0883d6e",
      "total_xp": 60,
      "group_id": "67c537b5b762c9a115b8f6df",
      "lesson_type": "WARMUP",
      "topics": [
        {
          "topic_type": "TEXT_TO_VIDEO",
          "topic_id": "67c54e56c215a52b5999550c",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a0edc42333d603fee806"
        },
        {
          "topic_type": "VIDEO_TO_ACTION",
          "topic_id": "67c54651b762c9a115b8f83b",
          "skippable": true,
          "xp": 15,
          "_id": "67c6a0edc42333d603fee807"
        },
        {
          "topic_type": "TEXT_TO_ACTION",
          "topic_id": "67c5471bb762c9a115b8f88b",
          "skippable": true,
          "xp": 20,
          "_id": "67c6a0edc42333d603fee808"
        },
        {
          "topic_type": "VIDEO_TO_TEXT",
          "topic_id": "67c549d4b762c9a115b8f92c",
          "skippable": false,
          "xp": 5,
          "_id": "67c6a0edc42333d603fee809"
        },
        {
          "topic_type": "TEXT_TO_VIDEO",
          "topic_id": "67c6977bc42333d603fea4fb",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a0edc42333d603fee80a"
        }
      ],
      "__v": 4
    },
    {
      "_id": "67c692b3c42333d603fea1f8",
      "total_xp": 70,
      "group_id": "67c554be5af07320e0883033",
      "lesson_type": "WARMUP",
      "topics": [
        {
          "topic_type": "VIDEO_TO_ACTION",
          "topic_id": "67c6969dc42333d603fea396",
          "skippable": true,
          "xp": 15,
          "_id": "67c6a175c42333d603feef28"
        },
        {
          "topic_type": "TEXT_TO_ACTION",
          "topic_id": "67c696f8c42333d603fea4a4",
          "skippable": true,
          "xp": 20,
          "_id": "67c6a175c42333d603feef29"
        },
        {
          "topic_type": "TEXT_TO_VIDEO",
          "topic_id": "67c69682c42333d603fea389",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a175c42333d603feef2a"
        },
        {
          "topic_type": "VIDEO_TO_TEXT",
          "topic_id": "67c54a25b762c9a115b8f932",
          "skippable": false,
          "xp": 5,
          "_id": "67c6a175c42333d603feef2b"
        },
        {
          "topic_type": "TEXT_TO_ACTION",
          "topic_id": "67c54752b762c9a115b8f8a3",
          "skippable": true,
          "xp": 20,
          "_id": "67c6a175c42333d603feef2c"
        }
      ],
      "__v": 3
    },
    {
      "_id": "67c697fdc42333d603fea744",
      "total_xp": 60,
      "group_id": "67c537b5b762c9a115b8f6df",
      "lesson_type": "EXERCISE",
      "topics": [
        {
          "topic_type": "VIDEO_TO_TEXT",
          "topic_id": "67c696c1c42333d603fea3a6",
          "skippable": false,
          "xp": 5,
          "_id": "67c6a354c42333d603ff0e09"
        },
        {
          "topic_type": "TEXT_TO_VIDEO",
          "topic_id": "67c54e56c215a52b5999550c",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a354c42333d603ff0e0a"
        },
        {
          "topic_type": "TEXT_TO_ACTION",
          "topic_id": "67c6970cc42333d603fea4c8",
          "skippable": true,
          "xp": 20,
          "_id": "67c6a354c42333d603ff0e0b"
        },
        {
          "topic_type": "VIDEO_TO_ACTION",
          "topic_id": "67c5462cb762c9a115b8f82b",
          "skippable": true,
          "xp": 15,
          "_id": "67c6a354c42333d603ff0e0c"
        },
        {
          "topic_type": "TEXT_TO_VIDEO",
          "topic_id": "67c6977bc42333d603fea4fb",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a354c42333d603ff0e0d"
        }
      ],
      "__v": 3
    },
    {
      "_id": "67c69a63c42333d603fead92",
      "total_xp": 55,
      "group_id": "67c554d45af07320e0883037",
      "lesson_type": "WARMUP",
      "topics": [
        {
          "topic_type": "TEXT_TO_ACTION",
          "topic_id": "67c54713b762c9a115b8f887",
          "skippable": true,
          "xp": 20,
          "_id": "67c6a24ec42333d603fefcc9"
        },
        {
          "topic_type": "VIDEO_TO_TEXT",
          "topic_id": "67c69483c42333d603fea358",
          "skippable": false,
          "xp": 5,
          "_id": "67c6a24ec42333d603fefcca"
        },
        {
          "topic_type": "TEXT_TO_VIDEO",
          "topic_id": "67c54b3fb762c9a115b8f94e",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a24ec42333d603fefccb"
        },
        {
          "topic_type": "VIDEO_TO_ACTION",
          "topic_id": "67c5468cb762c9a115b8f84d",
          "skippable": true,
          "xp": 15,
          "_id": "67c6a24ec42333d603fefccc"
        },
        {
          "topic_type": "VIDEO_TO_TEXT",
          "topic_id": "67c54aa2b762c9a115b8f93b",
          "skippable": false,
          "xp": 5,
          "_id": "67c6a24ec42333d603fefccd"
        }
      ],
      "__v": 4
    },
    {
      "_id": "67c69a6fc42333d603fead95",
      "total_xp": 55,
      "group_id": "67c554dd5af07320e088303b",
      "lesson_type": "WARMUP",
      "topics": [
        {
          "topic_type": "TEXT_TO_VIDEO",
          "topic_id": "67c54c9cd282d4fba86ac94d",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a2aec42333d603ff01cf"
        },
        {
          "topic_type": "VIDEO_TO_ACTION",
          "topic_id": "67c546adb762c9a115b8f859",
          "skippable": true,
          "xp": 15,
          "_id": "67c6a2aec42333d603ff01d0"
        },
        {
          "topic_type": "TEXT_TO_VIDEO",
          "topic_id": "67c54cbbd282d4fba86ac953",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a2aec42333d603ff01d1"
        },
        {
          "topic_type": "VIDEO_TO_TEXT",
          "topic_id": "67c696abc42333d603fea39d",
          "skippable": false,
          "xp": 5,
          "_id": "67c6a2aec42333d603ff01d2"
        },
        {
          "topic_type": "VIDEO_TO_ACTION",
          "topic_id": "67c696bec42333d603fea3a3",
          "skippable": true,
          "xp": 15,
          "_id": "67c6a2aec42333d603ff01d3"
        }
      ],
      "__v": 3
    },
    {
      "_id": "67c69bbdc42333d603feb3f7",
      "total_xp": 70,
      "group_id": "67c554be5af07320e0883033",
      "lesson_type": "EXERCISE",
      "topics": [
        {
          "topic_type": "TEXT_TO_ACTION",
          "topic_id": "67ba97de66797133104202fc",
          "skippable": true,
          "xp": 20,
          "_id": "67c6a3edc42333d603ff1927"
        },
        {
          "topic_type": "VIDEO_TO_TEXT",
          "topic_id": "67c54914b762c9a115b8f920",
          "skippable": false,
          "xp": 5,
          "_id": "67c6a3edc42333d603ff1928"
        },
        {
          "topic_type": "TEXT_TO_ACTION",
          "topic_id": "67c69701c42333d603fea4a8",
          "skippable": true,
          "xp": 20,
          "_id": "67c6a3edc42333d603ff1929"
        },
        {
          "topic_type": "TEXT_TO_VIDEO",
          "topic_id": "67c6964cc42333d603fea380",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a3edc42333d603ff192a"
        },
        {
          "topic_type": "VIDEO_TO_ACTION",
          "topic_id": "67c546b4b762c9a115b8f85d",
          "skippable": true,
          "xp": 15,
          "_id": "67c6a3edc42333d603ff192b"
        }
      ],
      "__v": 2
    },
    {
      "_id": "67c69bf6c42333d603feba95",
      "total_xp": 70,
      "group_id": "67c537b5b762c9a115b8f6df",
      "lesson_type": "FINISH",
      "topics": [
        {
          "topic_type": "TEXT_TO_ACTION",
          "topic_id": "67c69717c42333d603fea4cc",
          "skippable": true,
          "xp": 20,
          "_id": "67c6a34ec42333d603ff0df2"
        },
        {
          "topic_type": "TEXT_TO_VIDEO",
          "topic_id": "67c54b92b762c9a115b8f95a",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a34ec42333d603ff0df3"
        },
        {
          "topic_type": "VIDEO_TO_TEXT",
          "topic_id": "67c54950b762c9a115b8f923",
          "skippable": false,
          "xp": 5,
          "_id": "67c6a34ec42333d603ff0df4"
        },
        {
          "topic_type": "TEXT_TO_ACTION",
          "topic_id": "67c5471bb762c9a115b8f88b",
          "skippable": true,
          "xp": 20,
          "_id": "67c6a34ec42333d603ff0df5"
        },
        {
          "topic_type": "VIDEO_TO_ACTION",
          "topic_id": "67c5463eb762c9a115b8f833",
          "skippable": true,
          "xp": 15,
          "_id": "67c6a34ec42333d603ff0df6"
        }
      ],
      "__v": 2
    },
    {
      "_id": "67c69c6cc42333d603febd36",
      "total_xp": 65,
      "group_id": "67c554be5af07320e0883033",
      "lesson_type": "FINISH",
      "topics": [
        {
          "topic_type": "VIDEO_TO_ACTION",
          "topic_id": "67c6969dc42333d603fea396",
          "skippable": true,
          "xp": 15,
          "_id": "67c6a36ec42333d603ff10d8"
        },
        {
          "topic_type": "TEXT_TO_ACTION",
          "topic_id": "67ba97de66797133104202fc",
          "skippable": true,
          "xp": 20,
          "_id": "67c6a36ec42333d603ff10d9"
        },
        {
          "topic_type": "VIDEO_TO_TEXT",
          "topic_id": "67c54914b762c9a115b8f920",
          "skippable": false,
          "xp": 5,
          "_id": "67c6a36ec42333d603ff10da"
        },
        {
          "topic_type": "VIDEO_TO_ACTION",
          "topic_id": "67ba802a8896a2e51bcafb96",
          "skippable": true,
          "xp": 15,
          "_id": "67c6a36ec42333d603ff10db"
        },
        {
          "topic_type": "TEXT_TO_VIDEO",
          "topic_id": "67c54c6ad282d4fba86ac947",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a36ec42333d603ff10dc"
        }
      ],
      "__v": 2
    },
    {
      "_id": "67c69c73c42333d603febd39",
      "total_xp": 70,
      "group_id": "67c554d45af07320e0883037",
      "lesson_type": "FINISH",
      "topics": [
        {
          "topic_type": "TEXT_TO_VIDEO",
          "topic_id": "67c54bbfb762c9a115b8f960",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a38dc42333d603ff11e1"
        },
        {
          "topic_type": "TEXT_TO_ACTION",
          "topic_id": "67c54724b762c9a115b8f88f",
          "skippable": true,
          "xp": 20,
          "_id": "67c6a38dc42333d603ff11e2"
        },
        {
          "topic_type": "VIDEO_TO_TEXT",
          "topic_id": "67c54a04b762c9a115b8f92f",
          "skippable": false,
          "xp": 5,
          "_id": "67c6a38dc42333d603ff11e3"
        },
        {
          "topic_type": "VIDEO_TO_ACTION",
          "topic_id": "67c5469cb762c9a115b8f851",
          "skippable": true,
          "xp": 15,
          "_id": "67c6a38dc42333d603ff11e4"
        },
        {
          "topic_type": "TEXT_TO_ACTION",
          "topic_id": "67c54762b762c9a115b8f8a7",
          "skippable": true,
          "xp": 20,
          "_id": "67c6a38dc42333d603ff11e5"
        }
      ],
      "__v": 2
    },
    {
      "_id": "67c69c7ac42333d603febd3e",
      "total_xp": 50,
      "group_id": "67c554dd5af07320e088303b",
      "lesson_type": "FINISH",
      "topics": [
        {
          "topic_type": "VIDEO_TO_ACTION",
          "topic_id": "67c546a6b762c9a115b8f855",
          "skippable": true,
          "xp": 15,
          "_id": "67c6a3a8c42333d603ff12e6"
        },
        {
          "topic_type": "VIDEO_TO_TEXT",
          "topic_id": "67c54ac9b762c9a115b8f93e",
          "skippable": false,
          "xp": 5,
          "_id": "67c6a3a8c42333d603ff12e7"
        },
        {
          "topic_type": "TEXT_TO_VIDEO",
          "topic_id": "67c54cf2d282d4fba86ac95f",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a3a8c42333d603ff12e8"
        },
        {
          "topic_type": "TEXT_TO_ACTION",
          "topic_id": "67c5473fb762c9a115b8f89b",
          "skippable": true,
          "xp": 20,
          "_id": "67c6a3a8c42333d603ff12e9"
        }
      ],
      "__v": 3
    },
    {
      "_id": "67c69cd0c42333d603fec189",
      "total_xp": 55,
      "group_id": "67c554d45af07320e0883037",
      "lesson_type": "EXERCISE",
      "topics": [
        {
          "topic_type": "VIDEO_TO_TEXT",
          "topic_id": "67c5497fb762c9a115b8f926",
          "skippable": false,
          "xp": 5,
          "_id": "67c6a458c42333d603ff1a47"
        },
        {
          "topic_type": "VIDEO_TO_ACTION",
          "topic_id": "67c54623b762c9a115b8f827",
          "skippable": true,
          "xp": 15,
          "_id": "67c6a458c42333d603ff1a48"
        },
        {
          "topic_type": "VIDEO_TO_TEXT",
          "topic_id": "67c54a04b762c9a115b8f92f",
          "skippable": false,
          "xp": 5,
          "_id": "67c6a458c42333d603ff1a49"
        },
        {
          "topic_type": "TEXT_TO_ACTION",
          "topic_id": "67c54749b762c9a115b8f89f",
          "skippable": true,
          "xp": 20,
          "_id": "67c6a458c42333d603ff1a4a"
        },
        {
          "topic_type": "TEXT_TO_VIDEO",
          "topic_id": "67c54c1c0dc0af74f2bee12f",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a458c42333d603ff1a4b"
        }
      ],
      "__v": 3
    },
    {
      "_id": "67c69dd5c42333d603fec7f8",
      "total_xp": 65,
      "group_id": "67c554dd5af07320e088303b",
      "lesson_type": "EXERCISE",
      "topics": [
        {
          "topic_type": "TEXT_TO_ACTION",
          "topic_id": "67c696edc42333d603fea4a0",
          "skippable": true,
          "xp": 20,
          "_id": "67c6a48fc42333d603ff1b50"
        },
        {
          "topic_type": "VIDEO_TO_TEXT",
          "topic_id": "67c54a50b762c9a115b8f935",
          "skippable": false,
          "xp": 5,
          "_id": "67c6a48fc42333d603ff1b51"
        },
        {
          "topic_type": "VIDEO_TO_ACTION",
          "topic_id": "67c546adb762c9a115b8f859",
          "skippable": true,
          "xp": 15,
          "_id": "67c6a48fc42333d603ff1b52"
        },
        {
          "topic_type": "TEXT_TO_VIDEO",
          "topic_id": "67c54cbbd282d4fba86ac953",
          "skippable": false,
          "xp": 10,
          "_id": "67c6a48fc42333d603ff1b53"
        },
        {
          "topic_type": "VIDEO_TO_ACTION",
          "topic_id": "67c696bec42333d603fea3a3",
          "skippable": true,
          "xp": 15,
          "_id": "67c6a48fc42333d603ff1b54"
        }
      ],
      "__v": 2
    }
  ]);

  // Maps
  const [lessonMap, setLessonMap] = useState<Map<string, ILesson>>(new Map());

  const positionClass = {
    0: "-translate-x-20",
    1: "translate-x-0",
    2:"translate-x-20",
    3:"translate-x-0"
    
  }
  
  const handleTileClick = (isCurrent:boolean, lesson_id: string)=>{
    // if (!isCurrent) return;
    router.push(`/(lesson)?id=${lesson_id}`)
  }
  
  useEffect(() => {
    setLessonMap(new Map(lessons.map((lesson) => [lesson._id, lesson])));
  }, [lessons])


  return (
    <SafeAreaView className='bg-white h-full'>
      {
        loading?
        <View className='items-center justify-center'>
          <ActivityIndicator size="large" color="blue" />
        </View>
        :<>
          <Header />
      <View className='mt-5 py-5 flex-row justify-between px-10 items-center'>
        <View>
          <Text className='text-2xl text-gray-900 '>Learning</Text>
        </View>
        <View className='flex-row items-center'>
          <Image source={fire} className='size-10 mr-1' />
          <Text>57</Text>
        </View>
      </View>


      <FlatList
        data={groups}
        keyExtractor={(item) => item._id}
        renderItem={({ item, index:group_idx }) => {

          let lineWidth = (width - (item.title.length * 7) - 90) / 2;

          return (
            <>
              <View className='flex-row justify-center'>

                <View className='flex-row items-center justify-center '>
                  <View style={{ width: lineWidth }} className='h-0.5 bg-primary'></View>
                  <View style={{ width: item.title.length * 7 }} className='mx-3'><Text className=' text-center text-xl text-secondary'>{item.title}</Text></View>
                  <View style={{ width: lineWidth }} className='h-0.5 bg-primary'></View>
                  <Text className='ml-2 text-primary bg-gray-400 rounded-full size-5 text-center'>i</Text>
                </View>

              </View>
              
              
              <FlatList
                data={item.lessons}
                keyExtractor={(lesson) => lesson}
                renderItem={({ item: lesson, index: lesson_idx }) => {
                  let LESSON = lessonMap.get(lesson);
                  let Tile;
                  let isOver = curr_group > group_idx || (curr_group === group_idx &&  curr_lesson >= lesson_idx);
                  let isCurr = curr_group === group_idx &&  curr_lesson === lesson_idx;
                 

                  switch(LESSON?.lesson_type){
                    case LessonTypes.LEARNING:{
                      if (!isOver) {
                        Tile = <Tile1 topColor='#FBFAE6' bottomColor='#FFEFC7' iconColor='#FF81A9' />;
                        break
                      }
                      Tile=<Tile1 active={isCurr} />;
                      break;
                    }
                    case LessonTypes.WARMUP:{
                      if (!isOver) {
                        Tile = <Tile2 topColor='#FBFAE6' bottomColor='#FFEFC7' iconColor='#FF81A9' />;
                        break
                      }
                      Tile=<Tile2 active={isCurr} />;
                      break;
                    }
                    case LessonTypes.EXERCISE:{
                      if (!isOver) {
                        Tile = <Tile3 topColor='#FBFAE6' bottomColor='#FFEFC7' iconColor='#FF81A9' />;
                        break
                      }
                      Tile=<Tile3 active={isCurr} />;
                      break;
                    }
                    case LessonTypes.FINAL:{
                      if (!isOver) {
                        Tile = <Tile8 topColor='#FBFAE6' bottomColor='#FFEFC7' iconColor='#FF81A9' />;
                        break
                      }
                      Tile=<Tile8 active={isCurr} />;
                      break;
                    }
                    default:{
                      if (!isOver) {
                        Tile = <Tile9 topColor='#FBFAE6' bottomColor='#FFEFC7' iconColor='#FF81A9' />;
                        break
                      }
                      Tile=<Tile9 active={isCurr}  />
                      break;
                    }

                  }
                  return (
                  <TouchableOpacity onPress={()=>handleTileClick(isCurr, lesson)} className={`scale-75 mx-auto translate-x-20 ${positionClass[(lesson_idx) % Object.keys(positionClass).length  as keyof typeof positionClass ]}`}>
                      {Tile}
                  </TouchableOpacity>
                  )
                }}
              />
            </>

          )

        }
        }
      />

      <View className='translate-x-20 -translate-x-20 ' />

        </>
      }
    </SafeAreaView>
  )
}

export default index
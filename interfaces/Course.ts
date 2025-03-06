export interface ISeason{
    _id: string;
    title: string;
    language_id: string;
    groups: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface IGroup {
    _id: string;
    title: string;
    season_id: string;
    lessons: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
}
export interface ILesson {
    _id: string;
    total_xp: number;
    group_id: string;
    lesson_type: string;
    topics: {
        topic_type: string;
        topic_id: string;
        skippable: boolean;
        xp: number;
        _id: string;
    }[];
    __v: number;
}
export interface ITopic {
    topic_type: string;
    topic_id: string;
    skippable: boolean;
    xp: number;
    _id: string;
}
export interface ILecture{
    _id: string;
    title: string;
    video: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}
export interface IT2Action{
    _id: string;
    title: string;
    video: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface IT2Video {
    _id: string;
    title: string;
    options: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
} 

export interface IV2Action{
    _id: string;
    title: string;
    video: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}


export interface IV2Text {
    _id: string;
    title: string;
    video: string;
    options: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
}


export interface IVideo {
    _id: string;
    title: string;
    url: string;
    thumbnail: string;
    audio: string;
    action_id: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
}
  
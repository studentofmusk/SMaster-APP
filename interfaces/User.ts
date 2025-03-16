export interface IUser {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    age: number;
    current: {
        ASL: string;
    };
    gender: number;
    xp: number;
    profile:string;
    streak:number;
    highestStreak: number;
    lastActive: Date;
    createdAt: string;
    updatedAt: string;
    __v: number;
}
import { ILesson } from "@/interfaces/Course";
import API, {IAPIResponse} from "./axiosInstance";

export const get_lesson = async (id: string)=>{
    try {
        let response = await API.get<IAPIResponse<ILesson>>(`/course/get-lessons?id=${id}`);
        
        return {
            success: response.data.success,
            message: response.data.message,
            data: response.data.success ? response.data.data : undefined,
          };

    } catch (error: any) {
        return {
            success: false,
            message: error.response?.data?.message || "Something went wrong!",
            };
    }
}

export const get_languages = "/course/get-languages";
export const get_seasons = "/course/get-seasons";
export const get_groups = "/course/get-groups";
export const get_lessons = "/course/get-lessons";
export const get_lectures = "/course/get-lectures";
export const get_v2text = "/course/get-v2text";
export const get_t2video = "/course/get-t2video";
export const get_v2action = "/course/get-v2action";
export const get_t2action = "/course/get-t2action";
export const get_videos = "/course/get-videos";
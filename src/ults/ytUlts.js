import axios from "axios";
import  { YOUTUBE_API_KEY } from "../config/APIKEY";
export const getMostPopularVideos = () => {
    const url = "https://www.googleapis.com/youtube/v3/videos";
    const params = {
        key: YOUTUBE_API_KEY,
        chart:"mostPopular",
        regionCode: "US",
        part: "snippet,contentDetails,statistics",
        maxResult: 20
    };

    return axios.get(url,{ params }).then(res => {
        // console.log("this is the API response:" , res);
        return res.data;
    })
};
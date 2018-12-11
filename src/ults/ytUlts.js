import axios from "axios";
import  { YOUTUBE_API_KEY } from "../config/APIKEY";
export const getMostPopularVideos = () => {
    const url = "https://www.googleapis.com/youtube/v3/videos";
    const params = {
        key: YOUTUBE_API_KEY,
        chart:"mostPopular",
        regionCode: "US",
        part: "snippet,contentDetails,statistics",
        maxResults: 20
    };



    return axios.get(url,{ params }).then(res => {
        // console.log("this is the API response:" , res);
        return res.data;
    })
};

export const fetchYouTubeVideos = (keyword) => {
    const url = "https://www.googleapis.com/youtube/v3/search";
    const params = {
        key: YOUTUBE_API_KEY,
        maxResults: 20,
        part: 'snippet',
        q: keyword,
        type: "video"
    
    }
    return axios.get(url, { params }).then(res => {
        return res.data
    })
};

export const getVideoInfo = (videoId) => {
    const url= "https://www.googleapis.com/youtube/v3/videos";
    const params = {
        key: YOUTUBE_API_KEY,
        id: videoId,
        part: 'snippet,contentDetails,statistics',
    }

    return axios.get(url, { params }).then(res => {
        return res.data
    })

}

export const getRelativeVideoList = (videoId) => {
    const url= "https://www.googleapis.com/youtube/v3/search";
    const params = {
        key: YOUTUBE_API_KEY,
        part: 'snippet',
        relatedToVideoId: videoId,
        type: 'video'
    };

    return axios.get(url, { params }).then(res => {
        return res.data
    })
}

export const getCommentsList = (videoId) => {
    const url= "https://www.googleapis.com/youtube/v3/commentThreads";
    const params = {
        key: YOUTUBE_API_KEY,
        part: 'snippet,replies',
        videoId: videoId
    };
    
    return axios.get(url, { params }).then(res => {
        return res.data
    })
}

    

    
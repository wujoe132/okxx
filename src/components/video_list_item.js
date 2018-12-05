import React from "react";

const VideoListItem = ({ video }) => {
    const imagUrl = video .snippet.thumbnails.default.url
    // const video = props.videos
    return (
        <li>
            <div>
                <div>
                    <img src={ imgeUrl }/>
                </div>
                <div>
                    <h1 { video.snippet.title }/>
                </div>
            </div>
        </li>
    )
};

export default VideoListItem;
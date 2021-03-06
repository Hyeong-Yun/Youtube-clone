import React from 'react';
import VideoItem from '../video_item/videoItem'
import styles from './video_list.module.css'

const VideoList = (props) => (
      <ul className = {styles.videos}>
        {props.videos.map(video =>{
         return <VideoItem key = {video.id} video = {video} />
        })}
      </ul>
  );

export default VideoList;
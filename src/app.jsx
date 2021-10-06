import './App.css';
import VideoList from './components/video_list/videoList'
import {useState, useEffect} from 'react'
import Search from './components/search/search'

function App({youtube}) {
  const [videos, setVideos] = useState([]);

  const search = query =>{
    youtube.search(query)
    .then(videos => setVideos(videos))
  };

  useEffect(() => {
   youtube
   .mostPopular()
   .then(videos => setVideos(videos))
  }
      )

  return(
     <>
      <Search onSearch = {search}/>
      <VideoList videos = {videos} />
    </>
  )
}
export default App;

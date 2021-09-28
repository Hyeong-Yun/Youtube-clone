import './App.css';
import VideoList from './components/video_list/videoList'
import {useState, useEffect} from 'react'
import Search from './components/search/search'

function App() {
  const [videos, setVideos] = useState([]);

  const search = query =>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCnO5XUDyoONoCJhp3MZGUFdLCSk_YpPMI&part=snippet&maxResults=25&q=${query}&type=video`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id: item.id.videoId})))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCnO5XUDyoONoCJhp3MZGUFdLCSk_YpPMI", requestOptions)
      .then(response => response.text())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error))
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

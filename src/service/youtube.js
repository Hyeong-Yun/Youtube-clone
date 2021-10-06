class Youtube{
  constructor(key){
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }

  mostPopular(){
   return fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=5&key=${this.key}`, 
     this.getRequestOptions)
      .then(response => response.json())
      .catch(error => console.log('error', error))
  }

  search(query){
   return fetch(`https://www.googleapis.com/youtube/v3/search?key=${this.key}&part=snippet&maxResults=5&q=${query}&type=video`, 
    this.getRequestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id: item.id.videoId})))
      .catch(error => console.log('error', error));
  }
}

export default Youtube;
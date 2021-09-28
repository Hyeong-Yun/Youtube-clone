import React, {useEffect,useState, useRef} from 'react';
import styles from './search.module.css'

const Search = ({onSearch}) => {
  const [searchValue, setSearchValue]= useState([]);

  const inputRef = useRef();
  
  const handleSearch = ()=>{
    const value = inputRef.current.value;
    onSearch(value)
  }

  // const onClick = () =>{
  //   handleSearch()
  // }

  const onKeyPress = (e) =>{
    if(e.key === 'Enter'){
      handleSearch();
    }
  }

  // useEffect(() => {
  //   const requestOptions = {
  //     method: 'GET',
  //     redirect: 'follow'
  //   };
    
  //   fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCnO5XUDyoONoCJhp3MZGUFdLCSk_YpPMI&part=snippet&maxResults=25&q=${searchValue}`, requestOptions)
  //     .then(response => response.json())
  //     .then(result => console.log(result))
  //     .catch(error => console.log('error', error));
  // }, [searchValue])

  return (
  <header className = {styles.search_header}>
     <img src="/images/logo.png" alt="logo" />
     <h2 className = {styles.title}>Youtube</h2>
     <input 
      ref = {inputRef} 
      type="search" 
      placeholder = "Search..."
      onKeyPress = {onKeyPress}
     />
    </header>  
  )
  };

export default Search; 
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import styles from './style.module.scss'
import Image from 'next/image'
import Post from '../../post';
import Loader from '../../loader'

const FeedBox = ({page}) => {

  const[val,setValue] = useState([]);
  const userLikes = new Set(useSelector((state)=>state.user.likes));
  const [load,setLoad] = useState(false);
  
  useEffect(()=>{
    async function fetchPost(){
      setLoad(true); 
      const file = `https://api.unsplash.com/photos/?client_id=${process.env.NEXT_PUBLIC_CLIENTID}&page=${page}`;
      const obj = await fetch(file)
      const txt = await obj.json();
      let data = [...val,...txt];
      // localStorage.setItem('data', JSON.stringify(data));
      setValue((prev)=>[...prev,...txt]);
      setLoad(false);
    }
    fetchPost();
  },[page])

  if(val.length===0){
    return(
      <>
        <Loader/>
      </>
    )
  }
  return (
    <div className={styles.feedbox}>
      {
        val!==[] &&
         val.map((data,idx)=>(
          <Post postData={data} likeID={userLikes} key={idx}/>
        ))
      }
      {load===true && <Loader/>}
    </div>
  )
}

export default FeedBox
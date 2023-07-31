import React, { useState } from 'react'
import styles from './style.module.scss'
import PostBox from './PostBox'
import FeedBox from './FeedBox'

const index = () => {

  const [page,setPage] = useState(1);
  
  const handleInfinity = async(e)=>{
    try{
      if(window.innerHeight+e.target.scrollTop+5>=e.target.scrollHeight){
        setPage((prev)=>prev+1);
      }
    }catch(e){
      console.log(e);
    }
  }


  return (
    <div className={styles.container}  onScroll={(e)=>handleInfinity(e)}>
      <PostBox/>
      <FeedBox page={page} />
    </div>
  )
}

export default index
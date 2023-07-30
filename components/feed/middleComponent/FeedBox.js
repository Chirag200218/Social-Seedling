'use client';
import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import Post from '../../post'
import { useSelector } from 'react-redux'
import Loader from '../../loader'
import { useQuery } from 'react-query';

const FeedBox = ({page}) => {

  const[val,setValue] = useState([]);
  const userLikes = new Set(useSelector((state)=>state.user.likes));
  const [load,setLoad] = useState(false);
  const[error,setError] = useState({state:"false",message:"none"})


  useEffect(()=>{
    let value = JSON.parse(localStorage.getItem('data'));
    if(value){
      setValue(value);
    }
  },[])
  useEffect(()=>{
    async function fetchPost(){
      setLoad(true); 
      const file = `https://api.unsplash.com/photos/?client_id=pDHY6BQBdLm6dNLZHBk4xlE1Xu0yLLrtDaBus61FIy8&page=${page}`;
      const obj = await fetch(file)
      const txt = await obj.json();
      let data = [...val,...txt];
      localStorage.setItem('data', JSON.stringify(data));
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
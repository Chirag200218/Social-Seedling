import React from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import { useSelector } from 'react-redux'

const  PostBox = () => {
  const user = useSelector((state)=>state.user);
  return (
    <div className={styles.postBox}>
        <div style={{position:"relative",height:"60px",width:"60px",margin:"0px 15px"}}>
          {user.image==null?
          <Image alt="image_tag" style={{borderRadius:"50%"}} src={'/profile.png'} layout='fill'></Image>
          :<Image alt="image_tag" style={{borderRadius:"50%",border:"0.8px solid #c3c3c3"}} src={user.image} layout='fill'></Image>
          }
        </div>
        <div className={styles.writepost}>
          <input placeholder='write about today..' style= {{height:"100%", width:"80%"}}></input>
          <button>Create</button>
        </div>
    </div>
  )
}

export default PostBox;
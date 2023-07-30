import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from './style.module.scss';

const NavBar = ({id}) => {
  const router = useRouter();
  const user = useSelector((state)=>state.user);
  const [curr,setCurr] = useState(router.asPath.length===1?'Home':router.query===user.id?"Profile":"null");
  function directTo(link){
    router.push(link);
  }

  return (
    <>
        <div className={styles.mobileheader}>
          {console.log(router.asPath)}
          {console.log(router.query)}
          <h2>Social Seedlings</h2>
          <img alt="image_tag" src='/notification.png' width={30} height={30}></img>
        </div>  
      <div className={styles.container}>
        <h2 className={styles.header}>Social Seedlings</h2>
        <Image className={styles.headerimg} src='/instagramicon.png' width={40} height={40}></Image>
        <ul>
          <li onClick={()=>{directTo(`/`),setCurr("Home")}} style={{fontWeight:curr==="Home"?"bolder":"400",cursor: "pointer"}}><img alt="image_tag" src='/home.png' width={30} height={30}></img><span>Home</span></li>
          <li  style={{fontWeight:curr==="Search"?"bolder":"400"}}><img alt="image_tag" src='/search.png' width={30} height={30}></img><span>Search</span></li>
          <li style={{fontWeight:curr==="Explore"?"bolder":"400"}}> <img alt="image_tag" src='/explore.png' width={30} height={30}></img><span>Explore</span></li>
          <li style={{fontWeight:curr==="Reels"?"bolder":"400"}}><img alt="image_tag" src='/reel.png' width={30} height={30}></img><span >Reels</span></li>
          <li  style={{fontWeight:curr==="Messenger"?"bolder":"400"}}><img alt="image_tag" src='/messenger.png' width={30} height={30}></img><span >Messenger</span></li>
          <li style={{fontWeight:curr==="Messenger"?"bolder":"400"}}><img alt="image_tag" src='/notification.png' width={30} height={30}></img><span >Notification</span></li>
          <li onClick={()=>{directTo(`/users/${user.username}`),setCurr("Profile")}} style={{fontWeight:curr==="Profile"?"bolder":"400",cursor: "pointer"}}><img alt="image_tag" src='/profile.png' width={30} height={30}></img><span>Profile</span></li>       
          
          
          <li style={{position:"absolute",bottom:"10px"}}><span><img alt="image_tag" src='/hamburger.png' width={30} height={30}></img>More</span></li>           
        </ul>

         
    </div>
    </>
    

  )
}

export default NavBar
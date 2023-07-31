import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Image from 'next/image'

import styles from './style.module.scss'


const index = ({postData,likeID,hgt}) => {
  const router = useRouter();
  const[like,setLike] = useState(false);
  const[unlike,setUnLike] =useState(false);
 
  function directTo(link){
    router.push(link);
  }

  function toggleLike(e){
    if(likeID.has(postData.id)===false && like===false){
      setLike(true);setUnLike(false);
      let link = `https://api.unsplash.com/photos/${postData.id}/like?client_id=${process.env.NEXT_PUBLIC_CLIENTID}`
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`);

      var raw = "";

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch(link,requestOptions)
        .then(response => response.json())
        .then(result => {setLike(true),setUnLike(false)})
        .catch(error => {setLike(false);setUnLike(true),console.log('error', error)});
    }else{
      setLike(false),setUnLike(true)
      let link = `https://api.unsplash.com/photos/${postData.id}/like?client_id=${process.env.NEXT_PUBLIC_CLIENTID}`
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`);

      var raw = "";

      var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch(link,requestOptions)
        .then(response => response.text())
        .then(result => {setLike(false),setUnLike(true)})
        .catch(error => {setLike(true),setUnLike(false),console.log('error',error)});
    }
  }



  return (
    
    <div className={styles.postbox}>
        <div className={styles.userInfo}>
            <Image onClick={()=>directTo(`/users/${postData.user.username}`)} style={{borderRadius:"50%",cursor:'pointer'}} src={postData.user.profile_image?.small} width={40} height={40}></Image>
            <p onClick={()=>directTo(`/users/${postData.user.username}`)} style={{cursor:'pointer'}}>{postData.user.username}</p>
            <Image style={{position:"absolute",right:"20px",cursor:"pointer"}} src={"/3dot.png"} width={18} height={18}></Image>
        </div>
        <div style={{position:"relative",width:"100%",height:hgt?"250px":"400px"}}>
            <Image style={{borderRadius:"2px"}} alt={"users_post"} src={postData.urls.regular} layout='fill'></Image>
        </div>
        <div className={styles.features}>
            {((unlike===true)||(like===false && likeID.has(postData.id)===false))?<Image onClick={(e)=>toggleLike(e)} style={{marginRight:"20px",cursor:'pointer'}} src={"/like.png"} width={24} height={24}></Image>:<Image onClick={(e)=>toggleLike(e)} style={{marginRight:"20px",cursor:'pointer'}} src={"/heart.png"} width={24} height={24}></Image>}
            <Image style={{marginRight:"20px",cursor:'pointer'}} src={"/comment.png"} width={24} height={24}></Image>
            <Image style={{marginRight:"20px",cursor:'pointer'}} src={"/Insshare.png"} width={24} height={24}></Image>

            <Image style={{position:"absolute",right:"0px",marginRight:"20px",cursor:'pointer'}} src={"/save.png"} width={30} height={30}></Image>
        </div>
        <div className={styles.likeCount}>
            <p><span style={{fontWeight:"500"}}>{postData.likes}</span> likes</p>
        </div>
        {
            postData.description!==null && 
            <div className={styles.description}>
             <p><span style={{fontWeight:"600"}}>{postData.user.username}</span> {postData.description}</p>
            </div>
        }
    </div>
  )
}

export default index
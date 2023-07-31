import NavBar from '../../feed/navbar'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import UserBox from './UserBox'
import Loader from '../../loader'

const index = ({id}) => {
  const [user,setUser] = useState(null);
  const owner = useSelector((state)=>state.user);

  useEffect(()=>{
    function fetchUser(){
      var myHeaders = new Headers();
      myHeaders.append("Authorization",`Bearer ${process.env.NEXT_PUBLIC_TOKEN}`);
  
      var raw = "";
  
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
  
      fetch(`https://api.unsplash.com/users/${id}/?client_id=${process.env.NEXT_PUBLIC_CLIENTID}`, requestOptions)
        .then(response => response.json())
        .then(result =>  {
          console.log(result)
          const data = {
            id:result.id,
            username:result.username,
            name:result.name,
            image: result.profile_image.large,
            email:result.email,
            headline:result.bio,
            location:result.location,
            total_photos:result.total_photos,
            followers_count:result.followers_count,
            following_count:result.following_count,
            photos:result.photos,
            interest:result.tags.custom,
          }
          setUser(data);
        })
        .catch(error => console.log('error',error))
    }
    if(owner.username!==id){
      fetchUser();
    }else{
      setUser(owner);
    }
  },[id])

  if(user===null){
    return (
      <Loader/>
    )
  }
  return (
    <>
        <NavBar id={id===user.username?"Profile":null}/>
        <UserBox user={user}/>
    </>
    
  )
}

export default index
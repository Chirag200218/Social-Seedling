import React, { useEffect } from 'react'
import {useDispatch,useSelector } from 'react-redux';
import {CreateId,updateLikeIds} from '../redux/UserSlice' 
import { useQuery } from 'react-query';
import { useState } from 'react';

const FirstConnection = () => {
    
    const dispatch = useDispatch();
    const[error,setError] = useState({state:"false",message:"none"})

    useEffect(()=>{
        function fetchUserDetails(){
            let myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`);
            
            let requestOptions = {
              method: 'GET',
              headers: myHeaders,
              redirect: 'follow'
            };
            
            fetch(`https://api.unsplash.com/me/?client_id=${process.env.NEXT_PUBLIC_CLIENTID}`, requestOptions)
              .then(response => response.json())
              .then(result => {
                fetch(`https://api.unsplash.com/users/chiragj/likes?client_id=${process.env.NEXT_PUBLIC_CLIENTID}&per_page=1000`,requestOptions)
                .then(response => response.json())
                .then(result1 => {
                  let likes = [];
                    result1.map((data)=>{
                    likes.push(data.id)
                  })
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
                      likes:likes,
                      interest:result.tags.custom,

                    }
                    dispatch(CreateId(data));
                })
              })
              .catch(error =>{console.log("error", error)});
        }
        fetchUserDetails();
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    },[])

  return (
     <>
     </>
  )
}

export default FirstConnection
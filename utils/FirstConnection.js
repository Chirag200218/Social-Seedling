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
            myHeaders.append("Authorization", "Bearer 9VOLcNhimpopaTeIbeBtbG63Vdb0QEanTtZs2F10s2o");
            
            let requestOptions = {
              method: 'GET',
              headers: myHeaders,
              redirect: 'follow'
            };
            
            fetch("https://api.unsplash.com/me/?client_id=pDHY6BQBdLm6dNLZHBk4xlE1Xu0yLLrtDaBus61FIy8", requestOptions)
              .then(response => response.json())
              .then(result => {
                fetch("https://api.unsplash.com/users/chiragj/likes?client_id=pDHY6BQBdLm6dNLZHBk4xlE1Xu0yLLrtDaBus61FIy8&per_page=1000",requestOptions)
                .then(response => response.json())
                .then(result1 => {
                  let likes = [];
                    result1.map((data)=>{
                    likes.push(data.id)
                  })
                  console.log(result);
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
              .catch(error =>{console.log(error),setError({state:true,message:error+""})});
        }
        fetchUserDetails();
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    },[])
    // if(error.state===true){&
    //   return(
    //     <div style={{zIndex:"1",backgroundColor:"white",position:"absolute",top:"50px",marginLeft:"40%",textAlign:"center",height:"300px",width:"300px",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0px 2px 8px 0px grey"}}>
    //       <span>{error.message}</span>
    //     </div>
    //   )
    // }
  return (
     <>
     </>
  )
}

export default FirstConnection
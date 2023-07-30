import NavBar from '../../feed/navbar'
import React, { useEffect, useState } from 'react'
import UserBox from './UserBox'
import { useSelector } from 'react-redux'
import Loader from '../../loader'
const index = ({id}) => {
  const [user,setUser] = useState(null);
  const owner = useSelector((state)=>state.user);
  const[error,setError] = useState({state:"false",message:"none"})

  useEffect(()=>{
    function fetchUser(){
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer 9VOLcNhimpopaTeIbeBtbG63Vdb0QEanTtZs2F10s2o");
  
      var raw = "";
  
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
  
      fetch(`https://api.unsplash.com/users/${id}/?client_id=pDHY6BQBdLm6dNLZHBk4xlE1Xu0yLLrtDaBus61FIy8`, requestOptions)
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
        .catch(error => console.log('error', setError({state:true,message:error+""})))
    }
    console.log(owner.username+" "+id);
    if(owner.username!==id){
      fetchUser();
    }else{
      setUser(owner);
    }
   
  },[id])

  if(error.state===true){
    return(
      <div style={{backgroundColor:"white",position:"absolute",top:"50px",margin:"auto",height:"300px",width:"300px",display:"flex",alignItems:"center",justifyContent:"center"}}>
        {error.message}
      </div>
    )
  }

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
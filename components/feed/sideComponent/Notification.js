import React from 'react'
import styles from './style.module.scss'

const Notification = () => {
  const messages =[{message:'Hoping you like my work',img:'/groww.png'},{message:'Tushar has started following you',img:"/dummyprofile.png"},{message:'5 person liked your photos',img:"/like.png"},{message:'Chirag comment on your photo',img:"/dummyprofile.png"},{message:'5 unseen messages',img:"/messenger.png"},{message:"5 people like your last reel",img:'/heart.png'}]
  return (
    <div className={styles.notificationbox}> 
      <span style={{marginBottom:"10px"}}>Latest Notification</span>
      {
        messages.map((mess,idx)=>{
          return(
            <p key={idx+"@message"}><img style={{width:"32px",height:"32px",marginRight:"5px",borderRadius:"50%"}} src={mess.img}></img>{mess.message}</p>
          )
        })

      }
      
    </div>
  )
}

export default Notification
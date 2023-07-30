import React from 'react'
import styles from './style.module.scss'
import Notification from './Notification'
import Advertisement from './Advertisement'

const index = () => {
  return (
    <div className={styles.container}>
        <Notification/>
        <Advertisement/>
    </div>
  )
}

export default index
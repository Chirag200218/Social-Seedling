import React from 'react'
import styles from './style.module.scss'
import Image from 'next/image'

const Advertisement = () => {
  return (
    <div className={styles.advertisementbox}>
      <Image src={'/grow.jpg'} layout="fill" ></Image>
    </div>
  )
}

export default Advertisement
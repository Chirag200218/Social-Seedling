import React from 'react'
import { useRouter } from 'next/router'
import User from '../../../components/profile/userInfo'
const userId = () => {
    const router = useRouter();
    const id= router.query.userId;
    console.log(id);
    return (
        <User id={id}/> 
    )
}

export default userId
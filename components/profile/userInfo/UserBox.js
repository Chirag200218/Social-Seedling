import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Image from 'next/image';
import styles from './style.module.scss';
import Post from '../../post'
import Loader from '../../loader'

const UserBox = ({ user }) => {
    const [show, setShow] = useState("Post");
    const [posts, setPost] = useState([]);
    const [display, setDisplay] = useState('grid')
    const [load, setLoad] = useState(false);
    const [page, setPage] = useState(1);
    const[showPost,setShowPost] = useState(null);

    const box = [
        { one: "#ffd9f2", two: "#ff00a9" },
        { one: "#fff5ca", two: "rgb(255 137 0)" },
        { one: "#d2ffd2", two: "#126c12" },
        { one: "rgb(210 210 255)", two: "#12366c" },
        { one: "hsl(39deg 96.33% 78.55%)", two: "#833625" },

    ]


    function userPosts(pageno) {
        setLoad(true);
        let link = `https://api.unsplash.com/users/${user.username}/photos?client_id=${process.env.NEXT_PUBLIC_CLIENTID}&page=${pageno}&per_page=12`;
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`);
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(link, requestOptions)
            .then(response => response.json())
            .then(result => {setPost((prev) => [...prev, ...result]), setLoad(false);})
            .catch(error => console.log('error:',error));
        
    }
   
    const handleInfinity = (e) => {
        try {
            if(page*10>=user.total_photos){
                return;
            }
            if (window.innerHeight + e.target.scrollTop + 5 >= e.target.scrollHeight) {
                
                userPosts(page + 1);
                setPage((prev) => prev + 1);
                console.log("page reload")
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        function userPosts() {
            let link = `https://api.unsplash.com/users/${user.username}/photos?client_id=${process.env.NEXT_PUBLIC_CLIENTID}8&page=1&per_page=12`;
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`);
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch(link, requestOptions)
                .then(response => response.json())
                .then(result => setPost(result))
                .catch(error => console.log('error', error));
        }
        userPosts();
    }, [user])

    const GridImage = function ({ data, idx }) {
        return (
            <div style={{cursor:"pointer"}} onClick={()=>setShowPost(data)} className={styles.gridimage}>
                <Image src={data.urls.regular} layout='fill' alt="owner_posts"></Image>
            </div> 
        )
    }


    return (
        <>
        <div className={styles.rootdiv} onScroll={(e) => handleInfinity(e)}>
            <div className={styles.userbox}>
                <div className={styles.userinfo}>
                    {user?.image == null ?
                        <Image style={{ borderRadius: "50%" }} src={'/profile.png'} height={140} width={140}></Image>
                        : <Image style={{ borderRadius: "50%", border: "0.8px solid #c3c3c3" }} src={user.image} height={150} width={150}></Image>
                    }

                    <div className={styles.userdetail}>
                        <div className={styles.namediv}>
                            <div style={{ height: "100%", width: "fit-content", display: "flex", flexDirection: "column", marginRight: "50px" }}>
                                <p style={{ fontSize: "24px", fontWeight: "500" }}>{user?.username}</p>
                                <p style={{ fontSize: "16px", color: "grey" }}>{user?.name}</p>
                            </div>
                            <button style={{ height: "80%", width: "100px" }}>{user.name==="Chirag Jain"?"Edit Profile":"Follow"}</button>
                            <div className={styles.dots} style={{}}>
                                <Image src={'/3dot.png'} height={16} width={16}></Image>
                            </div>

                        </div>

                        <div className={styles.follow}>
                            <p><span>{user?.total_photos}</span> Posts</p>
                            <p><span>{user?.followers_count}</span> Followers</p>
                            <p><span>{user?.following_count}</span> Following</p>
                        </div>
                        <p className={styles.bio}>
                            {user.headline === null ? "write about yourself.." : user.headline}
                        </p>
                        <div className={styles.interest}>
                            {
                                user.interest.map((data, idx) => (
                                    <button style={{ backgroundColor: box[idx].one, color: box[idx].two }}>{data.title}</button>
                                ))}

                        </div>

                    </div>
                </div>
                <div className={styles.mobileuserinfo}>
                    <div style={{height:"100px",width:"100%",display:"flex",justifyContent:"space-between",padding:"10px"}}>
                        {user?.image == null ?
                            <Image style={{ borderRadius: "50%" }} src={'/profile.png'} height={80} width={80}></Image>
                            : <Image style={{ borderRadius: "50%", border: "0.8px solid #c3c3c3" }} src={user.image} height={80} width={80}></Image>
                        }
                        <div className={styles.userFollow}>
                            <p>{user?.username}</p>
                            <Image src={'/3dot.png'} height={16} width={16}></Image>
                            
                            <button>{user.name==="Chirag Jain"?"Edit Profile":"Follow"}</button>
                        </div>
                    </div>
                    <p style={{marginTop:"10px", marginLeft:"5px",fontSize:"15px",fontWeight:"600"}}>{user?.name}</p>
                    <p style={{fontSize:"14px", padding: "10px"}}>{user.headline}</p>
                    <div className={styles.followcnt}>
                        <div className={styles.stats}>
                            <p>{user?.total_photos}</p>
                            <p>posts</p>
                        </div>
                        <div className={styles.stats}>
                            <p>{user?.followers_count}</p>
                            <p>followers</p>
                        </div>
                        <div className={styles.stats}>
                            <p>{user?.following_count}</p>
                            <p>following</p>
                        </div>
                    </div>

                </div>
                <div className={styles.option}>
                    <p onClick={() => { setShow("Post") }} style={{ borderBottom: show === "Post" ? "2.5px solid var(--box-color)" : "none", fontWeight: show === "Post" ? "500" : "none" }}>Posts</p>
                    <p onClick={() => { setShow("Analytics") }} style={{ borderBottom: show === "Analytics" ? "2.5px solid var(--box-color)" : "none", fontWeight: show === "Analytics" ? "500" : "none" }}>Analytics</p>
                </div>
            </div>
            {
                show === "Post" &&
                <div className={styles.databox}>
                    <div className={styles.postsheader}>
                        {display === 'grid' ? <Image onClick={() => setDisplay('list')} src={'/list.png'} width={24} height={24}></Image> : <Image onClick={() => setDisplay('grid')} src={'/grid.png'} width={24} height={24}></Image>}
                    </div>
                    {
                        display === 'grid' &&
                        <div className={styles.gridphoto}>
                            {
                                posts.map((data, idx) => ((
                                    <GridImage data={data} idx={idx} key={idx} />
                                )))
                            }
                        </div>
                    }
                    {
                        display === 'list' &&
                        <div className={styles.listphoto}>
                            {
                                posts.map((data, idx) => (
                                    <Post postData={data} likeID={new Set(user.likes)} key={idx} />
                                ))
                            }

                        </div>
                    }
                    {load===true && <Loader/>}

                </div>
            }
        </div>
        {
            showPost!==null && (
                <div className={styles.showPost}>
                    <img className={styles.cross}  style={{cursor:"pointer"}} onClick={()=>setShowPost(null)} src={"/cross.png"}></img>
                    <div className={styles.imgsize}>
                        <Post postData={showPost} likeID={new Set(user.likes)} hgt={true}/>
                    </div>
                    
                </div> 
            )

        }
        </>
    )
}

export default UserBox;
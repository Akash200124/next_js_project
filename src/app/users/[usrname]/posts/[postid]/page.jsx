"use client";

import React, { use } from 'react'

const postid =  (props) => {

    // console.log(props) 
    // use this function to get the params in client server 

    const username = use(props.params)

    console.log("user name is => ", username)
    return (
        <div>

            user : {username.usrname} and post: {username.postid}
        </div>
    )
}

export default postid

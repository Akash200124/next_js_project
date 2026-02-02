import React from 'react'

const postid = async (props) => {

    // console.log(props)

    const username = await props.params

    console.log("user name is => ",username)
    return (
        <div>
            this is a dyamic user page 
            
            {
                
                username.postid
            }
        </div>
    )
}

export default postid

import React from 'react'

const page = async (props) => {

    console.log(props)

    const username = await props.params
    console.log("user name is => ",username)
    return (
        <div>
            this is a dyamic user page
        </div>
    )
}

export default page

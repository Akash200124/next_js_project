"use client"
import React from 'react'

function page(params) {
  return (
    <div>
      <h1>this is a contact page</h1>
      <button className='bg-red-500 p-5' onClick={() => {
        alert("hii")
      }}>click me </button>
    </div>
  )
}

export default page

import React, { useEffect } from 'react'

const User = (props) => {
    useEffect(()=>{
        console.log("mount")
        let timer = setInterval(()=>{
            console.log("interval")
        },1000)
        return ()=>{
            console.log("unmount")
            clearInterval(timer)
        }
    },[])
  return (
    <div>User: {props.name}</div>
  )
}

export default User
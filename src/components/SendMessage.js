import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import {auth, db } from '../firebase';


const SendMessage = ({scroll}) => {
   
    const [input,setInput]=useState('')
    const SendMessage =async(e)=>{
        e.preventDefault();
        if(input != ""){
        const {uid, displayName}= auth.currentUser
        await addDoc(collection(db,'messages'),{
            text:input,
            name:displayName,
            uid,
            time:serverTimestamp()
        })
    }
    scroll.current.scrollIntoView({behavior: 'smooth'})
    setInput('')
   
    }

  return (
    <div>
       <form onSubmit={SendMessage} className='h-14 w-full max-w-[1000px]  flex text-xl absolute bottom-0 '>
        <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Message' className='w-full text-3xl p-3 bg-gray-900 text-white outline-none border-none' type='text'></input>
        <button type='submit' className='w-[20%] bg-green-500'>Send</button>
    </form>
    </div>
   
  )
}

export default SendMessage
import React, { useRef, useState, useEffect } from 'react'
import Message from './Message'
import { db } from '../firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import SendMessage from './SendMessage';

const Chat = () => {
    const [message,setMessage]=useState([]);
    const scroll= useRef();
    useEffect(()=>{
        const q = query(collection(db,'messages'),orderBy('time'))
        const unsubscribe= onSnapshot(q,(querySnapshot)=>{
            let message=[]
            querySnapshot.forEach((doc)=>{
                message.push({...doc.data(),id:doc.id});
            })
            setMessage(message);
        })
        return()=>unsubscribe();
    },[])

  return (
    <div >
     
        <main className=' flex flex-col p-[10px] '>
        {message && message.map((message)=>(
            <Message key={message.id} message={message}></Message>
           
        ))}
           
        </main>
        
      
        <SendMessage scroll={scroll} />
      <span ref={scroll}></span>
    </div>
    
  )
}

export default Chat
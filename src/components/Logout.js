import React from 'react'
import { auth } from '../firebase'
const Logout = () => {
    const signOut=()=>{
        signOut(auth)
    }
  return (
    <div >
        <button className='bg-gray-200 px-4 py-2 hover:bg-gray-100' onClick={()=>auth.signOut()}>Log out</button>
    </div>
  )
}

export default Logout
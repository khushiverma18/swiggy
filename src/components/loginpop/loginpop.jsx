import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import './loginpop.css'

export default function Loginpop({setlog}) {
    const[curr,setcurr]=useState("Login")
  return (
    <div className='loging-popup'>
        <from className="container">
            <div className='title'>
               <b><h1 className='hh'>{curr}</h1></b>
                <span className='close' onClick={()=>setlog(false)}><b><IoClose /></b></span>
            </div>
         <div className='inputs'>
            {curr==="Login"?<></>:
            <input type='text' placeholder='Your name' required/>}
            <input type='email' placeholder='Your email' required/>
            <input type='password' placeholder='Password' required/>
         </div>
         <button>{curr==="Sign Up"?"Create account":"Login"}</button>
         <div className='condition'>
            <input type='checkbox' required/>
            <p>By continuing,i agree to the terms of use & privacy policy.</p>
         </div>
         {curr==="Login"?
         <p className='pp'>Create a new  account?<span onClick={()=>setcurr("Sign Up")}>Click here</span></p>
        : <p className='pp'>Already have an account?<span onClick={()=>setcurr("Login")}>Login here</span></p>}
        </from>
      
    </div>
  )
}

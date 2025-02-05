import React, { useState } from 'react';
import Loginpop from './loginpop/loginpop';
import { RxCaretDown } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { MdHome } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { Link } from 'react-router-dom';



export default function Header() {
  const [log,setlog]=useState(false);
    const [toggle,settoggle]=useState(false);
    function show(){
    console.log("print");
    settoggle(true);
    }

    function hideshd(){
      settoggle(false);
    }

  //
  const handleSpeech = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };
  return (
    <>
     {log?<Loginpop setlog={setlog}/>:<></>}
    <div className='black-overly w-full h-full fixed duration-500' onClick={hideshd} style={{
        opacity:toggle?1:0,
        visibility:toggle?"visible":"hidden"
    }}>
        <div onClick={(e)=>{
            e.stopPropagation();
        }}
        className='w-[450px] bg-white h-full absolute duration-[400ms]' 
        style={{left:toggle? '0%':'-100%'}}>

        </div>
    </div>
      <header className='p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]'>
        <div className='max-w-[1200px] mx-auto  flex items-center'>
           <div className='w-[50px]'>
          <Link to='/'><img src='image/sw.webp' className='w-full' alt='mg' /> </Link>  
          </div>
            <div className=''>
               <span className='font-bold border-b-[3px] border-[black]'> Ratanda </span>Jodhpur,Rajasthan,india <RxCaretDown onClick={show} fontSize={25} className='font-bold inline  text-[#fc8019]'/>
           </div>

        <nav className='flex list-none gap-10 ml-auto mr-2 font-semibold text-[18px] cursor-pointer'>
     <Link to='/'><li onClick={()=>handleSpeech('home')}  className='hover:text-[#fc8019]'><MdHome  className='inline'/>Home</li></Link> 
          <Link to='/search'><li onClick={()=>handleSpeech('search')} className='hover:text-[#fc8019]'><IoSearch className='inline'/>
            Search</li></Link> 
            <li onClick={()=>handleSpeech('offer')} className='hover:text-[#fc8019]'><BiSolidOffer className='inline'/>
            Offer</li>
            <li onClick={()=>{ handleSpeech('singin your account') ;setlog(true)}} className='hover:text-[#fc8019]'><IoPerson className='inline'/>Sign in</li>
       <Link to='/cart'> <li onClick={()=>handleSpeech('cart')} className='hover:text-[#fc8019]'><BsCart2 className='inline'/>Cart</li></Link>  
        </nav>
        </div>
      </header>
      </>
  )
}

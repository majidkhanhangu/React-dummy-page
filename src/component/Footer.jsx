import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";



export default function Footer() {
  return (
    <div className='Footer-all-section flex justify-between m-16 ml-6'>
    <div className='Footer-small-div' >
    <img className='bottom-logo-pic w-40 h-40' src="https://data.chinahighlights.com/pic/logo/bottom-logo-b.png" alt="logo-pic" />
    <p className='footer-para text-red-50 text-1xl mt-2'>Rated 5 out of 5 | 98.8% Excellence<br/>
       China Highlights International<br/>
        Travel Service Co., LTD</p>
    </div>
    <div className="Footer-company text-white">
    <h1 className=' foote text-gray-500 font-bold'>Company</h1>
    <h1 className='mt-2'>About us</h1>
    <h1 className='mt-2'>Travel Agent</h1>
    <h1 className='mt-2'>Review</h1>
    <h1 className='mt-2'>Contact-us</h1>
    <h1 className='mt-2'>Loyalty & Referral Program</h1>
    <h1 className='mt-2'>Partener</h1>
    <h1 className='mt-2'>Privicy and Policy</h1>
    <h1 className='mt-2'>Terms</h1> 
    </div>
    <div className="Footer-language text-white">
    <h1 className=' foote text-gray-500 font-bold'>LANGUAGES</h1>
   <h1 className='mt-2'>Deutsch</h1> 
   <h1 className='mt-2'>Français</h1> 
   <h1 className='mt-2'>Español</h1> 
    <h1 className='mt-2'>Italianoh1</h1>
    <h1 className='mt-2'>Русский</h1>
   <h1 className='mt-2'>日本語</h1> 
    </div>
    <div className="Footer-follow-us">
    <h1 className=' foote text-gray-500 font-bold'>FOLLOW-US</h1>
    <div className="icon-div">
    <div className="icon text-white flex mt-2 gap-2">
    <div className="faze mt-1">
     <FaFacebook />
    </div>
    <div className="faze">
    <h1>Facebook</h1>
    </div>
    </div>
    </div>
    <div className="icon-div text-white flex mt-2 gap-2">
     <div className="faze mt-1">
     <CiTwitter />
    </div>
    <div className="faze">
    <h1>Twitter</h1>
    </div>
    </div>
    <div className="icon-div flex text-white mt-2 gap-2">
     <div className="faze mt-1">
     <FaInstagram />
    </div>
    <div className="faze">
    <h1>Instagram</h1>
    </div>
    </div>
    </div>
    </div>
  )
}

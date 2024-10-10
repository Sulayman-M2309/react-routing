

import { MdError } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";

const Service = () => {
    const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [emailerror,setEmailerror]=useState('')
const [passworderror,setPassworderror]=useState('')
const [showpassword,setShowpassword]=useState(false)
    let handlEmail=(em)=>{
        setEmail(em.target.value)
        setEmailerror('')
    }
    let handlPassword=(pass)=>{
        setPassword(pass.target.value)
        setPassworderror('')
    }
    let handleLogin=()=>{
        if(!email){
            setEmailerror('Email is Requirs')
        }
        if(!password){
            setPassworderror('password is requird')
        }
       else{
        console.log('login succesful');
       }
    }
    let handleShowPassword=()=>{
        setShowpassword(!showpassword);
    }
    return (
        <div>
        {/*
This example requires updating your template:

```
<html class="h-full bg-white">
<body class="h-full">
```
*/}
<div className="flex shadow-2xl min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
<div className="sm:mx-auto sm:w-full sm:max-w-sm">

  <h2 className="mt-10 text-center text-2xl font-bold text-orange-500 leading-9 tracking-tight ">
    Sign in to your account
  </h2>
</div>

<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
  <div className="space-y-6">
    <div>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
        Email address
      </label>
      <div className="mt-2">
        <input
        onChange={handlEmail}
          id="email"
          name="email"
          // type="email"
          type='text'
           placeholder='Enter Your Email'
          // required
          // autoComplete="email"
          className="block px-5 text-2xl font-bold w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {
          emailerror && 
         <div className='flex items-center justify-between '>
          <p className='text-red-500 ml-4'>  {emailerror}</p>
          <MdError className='text-red-500' /></div>
        }
     
        {/* <p className='text-red-500 ml-4'>  {emailerror}</p> */}
     
      </div>
    </div>

    <div>
      <div className="flex items-center justify-between">
        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
          Password
        </label>
        <div className="text-sm">
          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Forgot password?
          </a>
        </div>
      </div>
      <div className="mt-2 relative">
        <input
        onChange={handlPassword}
          id="password"
          name="password"
          type={showpassword ? 'text' : 'password'}
          placeholder='Enter Your Password'
          // required
          // autoComplete="current-password"
          className="block px-5 text-2xl font-bold w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      {
      showpassword ?          <IoEye onClick={handleShowPassword} className='absolute top-3 right-2' />:

      <IoMdEyeOff onClick={handleShowPassword} className='absolute top-3 right-2' />
      }
      
       
 {
  passworderror&&
  <div className='flex items-center justify-between '>
  <p className='text-red-500 ml-4'>  {passworderror}</p>
  <MdError className='text-red-500' /></div>
 }
 {/*    <p className='text-red-500 ml-4'>{passworderror}</p> */}
      </div>
    </div>

    <div>
      <button
      onClick={handleLogin}
        type="submit"
        className="flex  w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Sign in
      </button>
    </div>
  </div>

  <p className="mt-10 text-center text-sm text-gray-500">
    Not a member?{' '}
    <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
      Start a 14 day free trial
    </a>
  </p>
</div>
</div>
  </div>
    );
};

export default Service;
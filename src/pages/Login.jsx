import React from 'react'
import Img from '../assets/web-programming-languages.webp'

export default function Login() {
  return (
    <div className="grid w-full h-screen grid-cols-1 sm:grid-cols-2">
      <div className='hidden sm:block'>
        <img className='object-cover w-full h-full' src={Img} alt="" />
      </div>
      <div className="flex flex-col justify-center bg-Img-color">
        <form className="max-w-[400px] w-full mx-auto bg-form-color p-8 px-8 rounded-lg">
          <h2 className='text-4xl font-bold text-center text-white'>SIGN IN</h2>
          <div className="flex flex-col py-2 text-gray-400">
            <label className='text-gray-300' >User Name</label>
            <input className='p-2 mt-2 rounded-lg bg-Input-color focus:border-blue-500 focus:bg-focus-color focus:outline-none' type="text"  />
          </div>
          <div className="flex flex-col py-2 text-gray-400">
            <label className='text-gray-300' >Password</label>
            <input className='p-2 mt-2 rounded-lg bg-Input-color focus:border-blue-500 focus:bg-focus-color focus:outline-none' type="password"  />
          </div>
          <div className="flex justify-between py-2 text-gray-400">
            <p className='text-gray-300'><input type="checkbox" className='mr-2'  />Remember me</p>
            <p className='text-gray-300'>Forgot Password</p>
          </div>
          <button className='w-full py-2 my-5 font-semibold text-white bg-teal-500 rounded-lg shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40'>Sign In</button>
        </form>
      </div>
    </div>
  );
}

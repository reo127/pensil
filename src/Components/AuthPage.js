import React from 'react'
import loginLogo from '../images/loginLogo.svg'
import facebook from '../images/facebook-logo.svg'
import google from '../images/google-logo.svg'


const AuthPage = () => {
  return (
    <div className='bg-[#141519] flex items-center justify-center h-[100vh]'>
      <div className='bg-[#25272C] px-6 py-12 rounded-lg'>
        <div className='flex items-center flex-col'>
          <img src={loginLogo} alt="" />
          <p className='text-white text-lg font-semibold mt-8'>Login</p>

          <div className="btns">
            <div className="text-white border py-2 px-20 rounded-md mt-4 cursor-pointer hover:bg-black" >
              <i class="fa-solid fa-phone mr-3"></i>
              <span>Continue with Modile</span>
            </div>

            <div className="text-white border py-2 px-20 rounded-md mt-4 cursor-pointer hover:bg-black" >
            <i class="fa-regular fa-envelope mr-3"></i>
              <span>Continue with Email</span>
            </div>

            <div className="text-white border py-2 px-20 rounded-md mt-4 flex cursor-pointer hover:bg-black" >
              <img src={google} alt="google" className='w-4 mr-3' />
              <span>Start with Google</span>
            </div>

            <div className="text-white border py-2 px-20 rounded-md mt-4 flex items-center cursor-pointer hover:bg-black" >
              <img src={facebook} alt="facebook" className='w-6 mr-3' />
              <span>Start with Facebook</span>
            </div>
          </div>
          <p className='text-white text-left mt-2'>Don't have an account? <a href="/" className='text-blue2'>Register now</a></p>

        </div>
      </div>
    </div>
  )
}

export default AuthPage
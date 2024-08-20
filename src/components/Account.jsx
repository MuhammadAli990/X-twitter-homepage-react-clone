import React from 'react'

function Account(props) {
    const {profileImage,name,unique} = props;
  return (
    <div className='flex gap-2 items-center'>
      <div>
        <img className='h-10 w-10 rounded-full' src={profileImage} alt="loading error" />
      </div>
      <div className='flex flex-col'>
        <h1 className='font-semibold'>{name}</h1>
        <p className='text-gray-400 text-sm'>{unique}</p>
      </div>
      <div className='ml-auto'>
        <button className='px-3 py-1 bg-white font-semibold rounded-full text-black hover:bg-gray-200 duration-200'>Follow</button>
      </div>
    </div>
  )
}

export default Account

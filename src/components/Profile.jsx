import React from 'react'

function Profile(props) {
    const {name,id,link} = props;
  return (
    <div className='flex gap-4 items-center'>
      <div>
        <img src={link} alt="loading error" className='w-12 h-12 rounded-full'/>
      </div>

      <div className='lg:flex flex-col hidden'>
        <h1 className='font-bold'>{name}</h1>
        <p className='font-extralight text-gray-400'>{id}</p>
      </div>

      <div className='hidden sm:flex'>
        <i className='fa-solid fa-ellipsis'></i>
      </div>
    </div>
  )
}

export default Profile

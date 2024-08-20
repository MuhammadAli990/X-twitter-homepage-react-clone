import React from 'react'

function Trending(props) {
   const {hashtag,noOfPosts} = props; 
  return (
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400'>Trending in Pakistan</p>
      <h2 className='font-semibold'>{hashtag}</h2> 
      <p className='text-sm text-gray-400'>{noOfPosts} posts</p>
    </div>
  )
}

export default Trending

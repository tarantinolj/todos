import React from 'react'
import { BsCheck } from 'react-icons/bs'

const Check = ({isComplited}) => {
  return (
    <div className={` border-2 rounded-lg border-pink-500 ${isComplited ? 'bg-pink-400' : ''} w-7 h-7 mr-5 `}>
        {isComplited && <BsCheck size={24} className='text-white'/>}
    </div>
  )
}

export default Check
import React from 'react'

const SingleTrendCart = ({img,text}) => {
  return (
    <>
    <div className="p-4 text-center">
        <div className="">
            <img src={img} alt="photo"  className='w-full h-[200px] object-cover'/>
        </div>
        <p className='mt-2'>{text}</p>
        <div className="flex justify-center gap-2 mt-1">
            <span className='text-gray-300'>$98.00</span>
            <span className='text-[#CEBD9C] line-through'>$120.00</span>
        </div>
    </div>
    </>
  )
}

export default SingleTrendCart
import Image from 'next/image'
import React from 'react'
import { AiOutlineRight, AiTwotoneCloud } from 'react-icons/ai'
import { BsArrowReturnRight, BsFillPlayCircleFill, BsUsbC } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'
import { MdComment, MdFlag } from 'react-icons/md'
import { PiDotOutlineFill } from 'react-icons/pi'
import Image1 from '@/public/Avatar Image 3.png'

function PreviewTask() {
  return (
    <div className='max-md:hidden absolute right-[70px] bottom-[70px] bg-white shadow-md shadow-slate-200 w-[400px] text-[#4D5E80] rounded-lg'>
      <div className='flex justify-between p-[10px] items-center font-bold gap-[10px]'>
        <div className='text-[30px] text-blue-500'><PiDotOutlineFill/></div>
        <div className='flex items-center gap-[20px] w-[100%]'>Development Apps<BsUsbC className='text-[#C3CAD9] text-[25px]'/></div>
        <div><IoMdClose className='text-[#C3CAD9] text-[25px]' /></div>
      </div>
      <div className='flex flex-wrap gap-[15px] border-b-2 border-b-[#EDEFF2] p-[20px] pl-[50px] font-bold text-[12px]'>
        <div className='flex w-[150px] items-center h-[30px] gap-2'><BsArrowReturnRight className='text-[20px] text-[#C3CAD9]'/>4 Subtasks</div>
        <div className='flex w-[150px] items-center h-[30px] gap-2'><MdFlag className='text-[20px] text-[#C3CAD9]'/>Priority Enabled</div>
        <div className='flex w-[150px] items-center h-[30px] gap-2'><AiTwotoneCloud className='text-[20px] text-[#C3CAD9]'/>3 Files</div>
        <div className='flex w-[150px] items-center h-[30px] gap-2'><MdComment className='text-[20px] text-[#C3CAD9]'/>7 Comments</div>
        <div className='flex w-[150px] items-center h-[30px] gap-2'><Image className='h-[30px] w-[30px]' src={Image1} />Tyler Norman</div>
      </div>
      <div className='flex items-center gap-[10px] p-[20px] pl-[50px] text-[12px] font-bold'>
        <div>
          <div>START DATE</div>
          <div>Sep 3, 9:00 pm</div>
        </div>
        <div><AiOutlineRight className='text-[14px]'/></div>
        <div>
          <div>DUE DATE</div>
          <div>Sep 4, 9:00 pm</div>
        </div>
        <div className='flex items-center gap-[10px] ml-6'><BsFillPlayCircleFill className='text-green-600 text-[40px]'/>0:00</div>
      </div>
    </div>
  )
}

export default PreviewTask
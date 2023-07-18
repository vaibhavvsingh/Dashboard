import Image from 'next/image'
import React from 'react'
import { BsListUl } from 'react-icons/bs'
import { FaEllipsisH, FaPlus } from 'react-icons/fa'
import { MdAccessAlarm, MdOutlineAttachment } from 'react-icons/md'
import Image1 from '@/public/Image 1.png'
import Image2 from '@/public/Avatar Image 1.png'
import Image3 from '@/public/Avatar Image 2.png'
import Card from './Card'

function CardList({data}) {
  return (
    <div className='flex flex-col'>
          <div className='flex text-[#C3CAD9] bg-white shadow-sm mb-[30px] shadow-slate-200 justify-around rounded-md items-center w-[210px] border-l-4 border-l-indigo-600 p-2'>
            <div className='flex items-center gap-[10px]'>
              <div className='text-[#4D5E80] font-bold text-[12px]'>{data.title}</div>
              <div className='text-[#6B7A99] rounded-full shadow-sm shadow-slate-300 w-[20px] p-1 text-[10px] text-center'>5</div>
            </div>
            <div className='flex items-center gap-4'><FaEllipsisH/><FaPlus/></div>
          </div>
          {data.items.map((item)=>{
            return (
              <Card key={item.name} item={item} />
            )
          })}
          {data.newTaskBtn && <div className='flex mt-[10px] mx-[15px] items-center gap-1 font-bold text-[#6B7A99] text-[12px]'>+ NEW TASK</div>}
        </div>
  )
}

export default CardList
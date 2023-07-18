import React from 'react'
import {FaEllipsisH} from 'react-icons/fa'
import {AiOutlineSearch, AiOutlineRight} from 'react-icons/ai'
import {MdAccountCircle, MdCancel} from 'react-icons/md'
import {BiSolidBell} from 'react-icons/bi'
import { HiOutlineBars3 } from 'react-icons/hi2'

function TopNav() {
  return (
    <div className='flex justify-between border-b-2 border-b-[#EDEFF2] py-[20px] px-[25px] items-center font-bold text-[#6B7A99]'>
      <div className='bg-white rounded-full p-[10px] shadow-sm shadow-slate-200 text-xl text-[#ADB8CC]'><HiOutlineBars3/></div>
      <div className='text-[#4D5E80] text-[18px]'>Constructor</div>
      <div className='max-md:hidden flex gap-[21px] text-[13px] items-center'>
        <div>Dashboard</div>
        <div>About Us</div>
        <div>News</div>
        <div>User Policy</div>
        <div>Contacts</div>
        <div className='text-[#ADB8CC]'><FaEllipsisH/></div>
      </div>
      <div className='max-xl:hidden flex gap-[10px] bg-white items-center px-[20px] py-[10px] rounded-full shadow-sm shadow-slate-200 text-[#ADB8CC]'>
        <div className='flex gap-[10px] items-center py-[5px]'>
          <div className='text-[18px] font-[900]'><AiOutlineSearch/></div>
          <div className='text-[12px] w-[300px]'>Search Products, Orders and Clients</div>
        </div>
        <div className='text-[10px]'><AiOutlineRight/></div>
      </div>
      <div className='flex items-center gap-[10px]'>
        <div className='text-[20px] text-[#ADB8CC]'><MdAccountCircle/></div>
        <div className='max-lg:hidden text-[13px]'>Clayton Santos</div>
        <div className='max-lg:hidden rounded-full text-[20px] p-[15px] bg-white shadow-sm shadow-slate-200 text-[#ADB8CC]'><BiSolidBell/></div>
        <div className='max-lg:hidden rounded-full text-[20px] p-[15px] bg-white shadow-sm shadow-slate-200 text-[#ADB8CC]'><MdCancel/></div>
      </div>
    </div>
  )
}

export default TopNav
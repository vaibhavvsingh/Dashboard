import React from 'react'
import {BiSolidUser,BiSolidDashboard, BiSolidBookContent} from 'react-icons/bi'
import {FaEllipsisH} from 'react-icons/fa'
import {GoChecklist} from 'react-icons/go'
import {AiTwotoneCloud} from 'react-icons/ai'
import {ImWrench} from 'react-icons/im'
import {MdSupervisorAccount} from 'react-icons/md'
import {IoMdMail,IoMdCalendar, IoLogoWhatsapp, IoIosSend, IoMdCall} from 'react-icons/io'
import Image from 'next/image'
import Image1 from '@/public/Image.png'

function SideBar() {
  return (
    <div className='max-xl:hidden py-[42px] px-[56px] text-[#ADB8CC] font-bold'>
      <div className='w-[240px] flex flex-col items-center'>
        <div className='w-[100%] flex justify-between text-[15px]'>
          <div className='p-[12px] bg-white rounded-full shadow-sm shadow-slate-200'><BiSolidUser/></div>
          <div className='p-[12px] bg-white rounded-full shadow-sm shadow-slate-200'><FaEllipsisH/></div>
        </div>
        <div className='w-[130px] p-[10px] rounded-full border-2 mx-auto border-[#3361FF] mb-[31px] mt-[18px]'><Image className='w-[110px] rounded-full bg-[rgba(255,203,51,0.4)]' src={Image1} /></div>
        <div className='text-[16px] text-[#6B7A99] py-[3px] mb-[4px]'>Hello Alfred Bryant</div>
        <div className='text-[14px] py-[5px]'>adrain.nader@yahoo.com</div>
      </div>
      <div className='flex flex-wrap text-[12px] w-[240px] mt-[30px] box-border'>
        <div className='flex flex-col justify-center items-center gap-4 w-[120px] h-[120px] border-2 border-[#EDEFF2]'>
          <div className='text-[18px]'><BiSolidDashboard/></div>
          <div>Dashboard</div>
        </div>
        <div className='flex flex-col justify-center items-center gap-4 w-[120px] h-[120px] border-2 border-[#EDEFF2]'>
          <div className='text-[18px]'><GoChecklist/></div>
          <div>Notes</div>
        </div>
        <div className='flex flex-col justify-center items-center gap-4 w-[120px] h-[120px] border-2 border-[#EDEFF2]'>
          <div className='text-[18px]'><GoChecklist/></div>
          <div>Tasks</div>
        </div>
        <div className='flex flex-col justify-center items-center gap-4 w-[120px] h-[120px] border-2 border-[#EDEFF2]'>
          <div className='text-[18px]'><AiTwotoneCloud/></div>
          <div>Files</div>
        </div>
        <div className='flex flex-col justify-center items-center gap-4 w-[120px] h-[120px] border-2 border-[#EDEFF2]'>
          <div className='text-[18px]'><IoMdMail/></div>
          <div>Emails</div>
        </div>
        <div className='flex flex-col justify-center items-center gap-4 w-[120px] h-[120px] border-2 border-[#EDEFF2]'>
          <div className='text-[18px]'><MdSupervisorAccount/></div>
          <div>Clients</div>
        </div>
        <div className='flex flex-col justify-center items-center gap-4 w-[120px] h-[120px] border-2 border-[#EDEFF2]'>
          <div className='text-[18px]'><IoMdCalendar/></div>
          <div>Calendars</div>
        </div>
        <div className='flex flex-col justify-center items-center gap-4 w-[120px] h-[120px] border-2 border-[#EDEFF2]'>
          <div className='text-[18px]'><ImWrench/></div>
          <div>Settings</div>
        </div>
      </div>
      <div className='flex justify-around text-[24px] mt-[120px] border-2 border-[#EDEFF2] p-4 rounded-full'>
        <div className='text-red-500'><IoMdCall/></div>
        <div className='text-green-500'><IoMdMail/></div>
        <div className='text-indigo-500'><BiSolidBookContent/></div>
        <div className='text-blue-500'><IoIosSend/></div>
        <div className='text-green-500'><IoLogoWhatsapp/></div>
      </div>
    </div>
  )
}

export default SideBar
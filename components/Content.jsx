import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiSolidDashboard } from 'react-icons/bi'
import { GoChecklist } from 'react-icons/go'
import { HiOutlineBars3, HiOutlineBars3BottomLeft } from 'react-icons/hi2'
import { IoMdCalendar } from 'react-icons/io'
import { PiTrendUpFill } from 'react-icons/pi'
import Image1 from '@/public/Image 1.png'
import Image3 from '@/public/Avatar Image 2.png'
import Image5 from '@/public/Avatar Image 4.png'
import Image6 from '@/public/Image 2.png'
import CardList from './CardList'

const ToDo = {
  title: "TO DO",
  newTaskBtn: true,
  items: [
    {
      image: Image1,
      category: "Space Tasks 2",
      name: "Make Money Through Online",
      icons: true,
      authors: [Image5]
    },
    {
      category: "Space Tasks 2",
      name: "Make Money Through Online",
      icons: false,
      authors: [Image5, Image3]
    },
    {
      category: "Space Tasks 2",
      name: "Search Engine Optimization...",
      icons: false,
      authors: [Image5]
    },
    {
      category: "Space Tasks 2",
      name: "Characteristics Of A Succesful",
      icons: false,
      authors: [Image5]
    },
    {
      category: "Space Tasks 2",
      name: "Getting Free Publicity",
      icons: false,
      authors: [Image5]
    },
    {
      category: "Space Tasks 2",
      name: "Importance Of The Custom...",
      icons: false,
      authors: [Image5]
    },
    
  ]
}
const InWOrk = {
  title: "IN WORK",
  newTaskBtn: true,
  items: [
    {
      category: "Space Tasks 2",
      name: "Types Of Paper In Catalog",
      icons: false,
      authors: [Image5]
    },
    {
      image: Image6,
      category: "Space Tasks 2",
      name: "Global Resorts Network",
      icons: true,
      authors: [Image5]
    },
    {
      category: "Space Tasks 2",
      name: "Development Apps",
      icons: false,
      authors: [Image5]
    },
    {
      category: "Space Tasks 2",
      name: "Copper Canyon",
      icons: true,
      authors: [Image5]
    },
  ]
}
const Review = {
  title: "REVIEW",
  newTaskBtn: true,
  items: [
    {
      category: "Space Tasks 2",
      name: "Astronomy Or Astrology",
      icons: false,
      authors: [Image5]
    },
    {
      category: "Space Tasks 2",
      name: "Astronomy Binoculars A Great",
      icons: false,
      authors: [Image5]
    },
  ]
}
const Done = {
  title: "DONE",
  items: [
    {
      category: "Space Tasks 2",
      name: "Copper Canyon",
      icons: false,
      authors: [Image5]
    },
  ]
}

function Content() {
  return (
    <div className='m-[30px] ml-0 border-2 border-[#EDEFF2] rounded-3xl w-[100%]'>
      <div className='flex justify-between font-bold text-[12px] gap-[30px] text-[#7D8FB3]  border-b-2 border-b-[#EDEFF2] py-[13px] pl-[51px] pr-[30px]'>
        <div className='flex gap-10 overflow-auto'>
          <div className='flex gap-2 items-center'><GoChecklist className='text-[20px]' />List Tasks</div>
          <div className='flex gap-2 items-center'><BiSolidDashboard className='text-[20px]' />Boards</div>
          <div className='flex gap-2 items-center'><IoMdCalendar className='text-[20px]' />Calendar</div>
          <div className='flex gap-2 items-center'><HiOutlineBars3BottomLeft className='text-[20px]' />Gantt</div>
          <div className='flex gap-2 items-center'><HiOutlineBars3 className='text-[20px]' />Timeline</div>
          <div className='flex gap-2 items-center'><PiTrendUpFill className='text-[20px]' />Activity</div>
        </div>
        <div className='max-md:hidden flex items-center bg-white shadow-sm shadow-slate-200 p-[10px] rounded-full w-[180px] text-[10px]'>
          <AiOutlineSearch className='text-[20px]'/>
          Search Tasks
        </div>
      </div>
      <div className='flex pl-[51px] pr-[30px] pt-[51px] gap-[30px] overflow-auto'>
        <CardList data={ToDo}/>
        <CardList data={InWOrk}/>
        <CardList data={Review}/>
        <CardList data={Done}/>
      </div>
    </div>
  )
}

export default Content
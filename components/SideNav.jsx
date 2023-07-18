import React from 'react'
import {IoMdCompass} from 'react-icons/io'
import {HiMiniPlusCircle} from 'react-icons/hi2'
import {BsFillBuildingFill} from 'react-icons/bs'
import {PiTrendUpFill, PiGlobeHemisphereWestFill} from 'react-icons/pi'
import {FaStar, FaFacebookMessenger} from 'react-icons/fa'
import Image1 from '@/public/Avatar Image 1.png';
import Image2 from '@/public/Avatar Image 2.png';
import Image3 from '@/public/Avatar Image 3.png';
import Image4 from '@/public/Avatar Image 4.png';
import Image from 'next/image'

function SideNav() {
  return (
    <div className='max-lg:hidden flex flex-col justify-between py-[42px] px-[22px] gap-32 border-r-2 border-r-[#EDEFF2] text-[#C3CAD9] text-[20px]'>
      <div className='flex flex-col gap-[15px] '>
        <div className='text-[#3361FF] p-[15px] bg-white rounded-full shadow-sm shadow-slate-200'><IoMdCompass/></div>
        <div className='p-[15px] bg-white rounded-full shadow-sm shadow-slate-200'><FaStar/></div>
        <div className='p-[15px] bg-white rounded-full shadow-sm shadow-slate-200'><FaFacebookMessenger/></div>
        <div className='p-[15px] bg-white rounded-full shadow-sm shadow-slate-200'><PiTrendUpFill/></div>
        <div className='p-[15px] bg-white rounded-full shadow-sm shadow-slate-200'><PiGlobeHemisphereWestFill/></div>
        <div className='p-[15px] bg-white rounded-full shadow-sm shadow-slate-200'><BsFillBuildingFill/></div>
      </div>
      <div className='flex flex-col-reverse gap-[15px]'>
        <div className='p-[15px] bg-white rounded-full shadow-sm shadow-slate-200'><HiMiniPlusCircle/></div>
        <div><Image src={Image1} /></div>
        <div><Image src={Image2} /></div>
        <div><Image src={Image3} /></div>
        <div><Image src={Image4} /></div>
      </div>
    </div>
  )
}

export default SideNav
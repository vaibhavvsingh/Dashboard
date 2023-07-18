import Image from "next/image";
import React from "react";
import { BsListUl } from "react-icons/bs";
import { MdAccessAlarm, MdOutlineAttachment } from "react-icons/md";

function Card({ item }) {
  return (
    <div className="text-[#C3CAD9] font-bold mb-[10px] bg-white shadow-sm shadow-slate-200 rounded-md">
      {item.image && <Image src={item.image} />}
      <div className="flex justify-between items-center m-[15px] mb-0">
        <div className="text-[#ADB8CC] text-[10px]">{item.category}</div>
        <div className="flex">
          {item.authors.map((author, index) => {
            return <Image key={index} className="w-[20px]" src={author} />;
          })}
        </div>
      </div>
      <div className="text-[#6B7A99] text-[12px] mx-[15px] my-[10px]">
        {item.name}
      </div>
      {item.icons && (
        <div className="flex gap-2 items-center text-[10px] mx-[15px] my-[10px] text-[#6B7A99]">
          <BsListUl className="text-[20px] text-[#C3CAD9]" />4
          <MdOutlineAttachment className="text-[20px] text-[#C3CAD9]" />2
          <MdAccessAlarm className="text-[20px] text-[#C3CAD9]" />6 Days Left
        </div>
      )}
    </div>
  );
}

export default Card;

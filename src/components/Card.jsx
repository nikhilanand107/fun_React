import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { motion, scale } from "motion/react"

function Card({data,reference}) {
  return (
   
      <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className='relative w-60 h-70 bg-zinc-900/90 rounded-[40px] text-white p-10 overflow-hidden flex-shrink-0'>
      <FaFileAlt />

        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0  w-full  left-0  '>
            <div className='flex items-center justify-between mb-3  px-8 py-3'>
                <h5>{data.size}</h5>
                <span className='w-7 h-7 bg-zinc-700 rounded-full flex items-center justify-center'>
                    {data.close? <IoMdClose size=".8em"color='#fff' />:<FaDownload size=".8em"color='#fff'/>}
                    </span>
                    
            </div>
            {data.tag.isOpen &&(
                      <div className={`tag w-full p-4 ${data.tag.tagColor==="blue"?"bg-blue-600":"bg-green-600"} flex items-center justify-center`}>
                <h3 className='text-sm font-semibold'>{data.tag.name}</h3>
             </div>
            )}
        </div>
      </motion.div>
 
  )
}

export default Card

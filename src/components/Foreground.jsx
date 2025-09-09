import React, { useRef } from "react";

import Card from './Card'


function Foreground() {
    const ref=useRef(null);
    const data=[
        {
            desc:"Lorem ipsum dolor sit ame lets seee is it working.",
            size:"0.5mb",
            close:true,
            tag:{isOpen:true, name:"downloading",tagColor:"green"},
        },
        {
            desc:"Lorem ipsum dolor sit ame lets seee is it working.",
            size:"0.6mb",
            close:true,
            tag:{isOpen:true, name:"downloading",tagColor:"red"},
        },
        {
            desc:"Lorem ipsum dolor sit ame lets seee is it working.",
            size:"0.6mb",
            close:false,
            tag:{isOpen:true, name:"downloading",tagColor:"blue"},
        },
    ];
  return (
    <div>
        <div ref={ref} className=' fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item, index)=>(<Card data={item} reference={ref}/>))}
                </div>
      
    </div>
  )
}

export default Foreground

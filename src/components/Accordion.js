import React, { useState } from 'react'

import { GoChevronDown } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";

function Accordion({items}) {
    const[expandedIndex,setExpendedIndex]=useState(0);
    const handleClick=(nextIndex)=>{

        //To deal with the stale version of expandedIndex 
        // This is the fix for the bug       

        setExpendedIndex((currentExpendedIndex)=>{
            if(currentExpendedIndex===nextIndex){
                return -1;
            }
            else{
                return nextIndex;
            }
        })

        // if(expandedIndex===nextIndex){
        //     setExpendedIndex(-1);
        // }else{
        // setExpendedIndex(nextIndex)
        // }
    }

    
    const renderedItems=items.map((item,index)=>{
        const isExpended=index===expandedIndex;
        const icon = <span className='text-2xl'>{isExpended ? <GoChevronDown/>:<GoChevronLeft/>}</span>
        return <div key={item.id} >
                <div className='flex justify-between p-3 b g-grey-50 border-b items-center cursor-pointer' onClick={()=>handleClick(index)}>
                   
                    {item.label} {icon}</div>
                { isExpended && <div className='border-b p-5'>{item.content}</div>}
             </div>
    })
  return (
    <div className='border-x border-t rounded'>{renderedItems}</div>
  )
}

export default Accordion
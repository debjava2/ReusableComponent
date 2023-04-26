import React, { useState ,useEffect,useRef} from 'react'
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';
function DropDown({options,value,onChange}) {
    const[isOpen,setIsOpen]=useState(false);
    const divEl=useRef();
    useEffect(()=>{
        const handler=(event)=>{
            if(!divEl.current){
                return;
            }
            if(!divEl.current.contains(event.target)){
                setIsOpen(false);
            }
            console.log(event.target);
        }
        document.addEventListener('click',handler,true);

        return ()=>{
            document.removeEventListener('click',handler);
        }
    },[])
    const handleClick=()=>{
        // This is For high Volume of Click event  setIsOpen((currentOpen)=>!currentOpen);
        //Other Wise use the simple one 
        setIsOpen(!isOpen)
      }
      const handleOptionClick=(option)=>{
        setIsOpen(false);
        onChange(option);
        console.log(option);
      }
    const renderItem=options.map((option)=>{
        return (
            <div  className='hover:bg-sky-100 rounded cursor-pointer p-1' key={option.value} onClick={()=>handleOptionClick(option)}>{option.label}</div>
        )
    })
   
    //let vairable = selection==null ? 'Selected...' : selection.label
  return (
   
    <div ref={divEl} className="w-48 relative">
    <Panel
      className="flex justify-between items-center cursor-pointer"
      onClick={handleClick}
    >
      {value?.label || 'Select...'}
      <GoChevronDown className="text-lg" />
    </Panel>
    {isOpen && (
      <Panel className="absolute top-full">
        {renderItem}
      </Panel>
    )}
  </div>
      
   
  )
}

export default DropDown
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
function ModalC({onClose,children,actionBar}) {
  useEffect(()=>{
    document.body.classList.add('overflow-hidden');
    return()=>{
      document.body.classList.remove('overflow-hidden');
    }
  },[])
  return ReactDOM.createPortal(
    <div>
    <div className='absolute inset-0 bg-gray-300 opacity-80' onClick={onClose}></div>
    <div className='absolute inset-40 p-10 bg-white'>
      <div className='flex flex-column justify-between h-full'>
      {children}
      <div children="flex justify-end"> 
    {actionBar}
    </div>
    </div>
    </div>
   
  </div>,
  document.querySelector('.modal-container')
  )
 
}

export default ModalC
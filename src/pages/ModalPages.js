import React, { useState } from 'react'
import ModalC from '../components/ModalC'
import Button from '../components/Button'

function ModalPages() {
    const[showModal,setShowModal] = useState(false);
    const handleClick=()=>{
        setShowModal(true)
    }   
    const handleClose=()=>{
        setShowModal(false)
    }

    const actionBar = (
        <div>
          <Button onClick={handleClose} primary>
            I Accept
          </Button>
        </div>
      );
      const modal = (
        <ModalC onClose={handleClose} actionBar={actionBar}>
          <p>Here is an important agreement for you to accept</p>
        </ModalC>
      );

    

  return (
    <div className='relative'>
        <Button primary onClick={handleClick} >Open Modal</Button>
        {showModal && modal}   
      
    </div>
  )
}

export default ModalPages
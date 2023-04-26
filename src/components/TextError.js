import React from 'react'
import '../form.css'
function TextError (props) {
  return <div className='errors'>{props.children}</div>
}

export default TextError
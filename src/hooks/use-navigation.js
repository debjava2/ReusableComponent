import React, { useContext } from 'react'
import NavigationContext from '../context/navigation'


function CustomNavigation() {
  return  useContext(NavigationContext);
}

export default CustomNavigation
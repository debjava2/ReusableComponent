//import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
//import Button from './components/Button.js'
//import Accordion from './components/Accordion.js';
import { useState } from "react";
import DropDown from "../components/DropDown";
function DropDownPage() {

  const[selection,setSelection]=useState(null);

  const handleSelection=(option)=>{
    setSelection(option)
  }

  const opts=[
    {label:'Not Spicy' ,value:'mild'},
    {label:'A little Spicy' ,value:'spicy'},
    {label:'Really Spicy' ,value:'extra_spicy'},
]
  

  return (
    <div>
      <DropDown options={opts} value={selection} onChange={handleSelection}/>
      
    </div>
  );
}

export default DropDownPage;

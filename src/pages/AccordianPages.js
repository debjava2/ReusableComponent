//import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
//import Button from './components/Button.js'
import Accordion from '../components/Accordion.js';

function AccordianPages() {

  const items=[
    {
      id:"aasds",
      label:"can i use React in my project",
      content:"can i use React in my project can i use React in my project can i use React in my project can i use React in my project"
    },
    {
      id:"aasssds",
      label:"can i use Javascript in my project",
      content:"can i use React in my project can i use React in my project can i use React in my project can i use React in my project"
    },
    {
      id:"aakksds",
      label:"can i use Css in my project",
      content:"can i use React in my project can i use React in my project can i use React in my project can i use React in my project"
    }
  ]

  return (
    <div>
     <Accordion items={items}/>
    </div>
  );
}

export default AccordianPages;

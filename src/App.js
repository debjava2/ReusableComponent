//import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
//import Button from './components/Button.js'
//import Accordion from './components/Accordion.js';
//import { useState } from "react";
import ButtonPages from './pages/ButtonPages'
//import Links from "./components/Links";
import Route from "./components/Route";
import AccordianPages from "./pages/AccordianPages";
import DropDownPage from "./pages/DropDownPage";
import SideBar from "./components/SideBar";
import ModalPages from './pages/ModalPages';
import FormPages from './pages/FormPages';
import TablePages from './pages/TablePages';
import CounterPages from './pages/CounterPages';


//import DropDown from "./components/DropDown";
function App() {

  return (
    <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
      
      {/* <Links to='/accordian'>Accordion</Links>
      <Links to='/dropdown'>Button</Links> */}
      <SideBar/> 
      <div className='col-span-5'>   
      <Route path="/accordian">
        <AccordianPages/>
      </Route>
      <Route path="/">
        <DropDownPage/>
      </Route>
      <Route path="/buttons">
        <ButtonPages/>
      </Route>      
      <Route path="/modal">
          <ModalPages/>
      </Route>
      <Route path="/form">
          <FormPages/>
      </Route>

      <Route path="/table">
           <TablePages/>
      </Route>
      <Route path="/counter">
         <CounterPages/>
      </Route>
      
     
      </div>     
    </div>
  );
}

export default App;

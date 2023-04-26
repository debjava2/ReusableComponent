import React from 'react'
import Links from './Links'

function SideBar() {
    const links=[
        {label:'dropdown',path:'/'},
        {label:'Accrodian',path:'/accordian'},
        {label:'Buttons',path:'/buttons'},
        {label:'Modal',path:'/modal'},
        {label:'form',path:'/form'},
        {label:'Table',path:'/table'},
        {label:'Counter',path:'/counter'}
    ]

    const renderItems=links.map((link)=>{
        return(
            <Links to={link.path} key={link.label} className='mb-3'
            activeClassName='font-bold border-l-4 border-blue-500 pl-2'
            >{link.label}</Links>
        )
    })

  return (
    <div className='sticky top-0 overflow-y-scroll flex flex-col align-start'>{renderItems}</div>
  )
}

export default SideBar
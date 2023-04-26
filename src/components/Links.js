import React from 'react'
import classNames from 'classnames';
import CustomNavigation from '../hooks/use-navigation';

function Links({to,children,className,activeClassName}) {
    const{navigate,currentPath} = CustomNavigation();
    const classes=classNames('text-blue-500',className,currentPath===to && activeClassName);      
    const handleClick=(event)=>{
        if(event.metaKey || event.ctrlKey){
            return
        }
        event.preventDefault();
        navigate(to);
    }
  return (
    <a href={to} onClick={handleClick} className={classes}>{children}</a>
  )
}

export default Links
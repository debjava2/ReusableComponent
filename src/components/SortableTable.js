import React, { useState } from 'react'
import Table from './Table'
import {GoArrowSmallDown,GoArrowSmallUp} from "react-icons/go";
import useSortData from '../hooks/useSortData';
function SortableTable(props) {
    const{config,data}=props;
    const{handleClick,sortBy,sortOrder,sortedData}=useSortData(props);

    const updatedConfig=config.map((column)=>{
        if(!column.sortValue){
            return column;
        }
        return {
            ...column,
            header:()=><th className="cursor-pointer hover:bg-grey-100" onClick={()=>handleClick(column.label)}>
                <div className='flex items-center'>
                {getIcons(column.label,sortBy,sortOrder)}
                {column.label}
                </div>
                </th>
        }

    })

  return (
    <div>
        <Table {...props} data={sortedData} config={updatedConfig}/>
    </div>
  )
}


function getIcons(label,sortBy,sortOrder){
    if(label!==sortBy){
        return (<div><GoArrowSmallDown/><GoArrowSmallUp/></div>)
    }
    else if(sortOrder===null){
        return (<div><GoArrowSmallDown/><GoArrowSmallUp/></div>)
    }
    else if(sortOrder==="asc"){
        return <GoArrowSmallUp/>
    }
    else if(sortOrder==="desc"){
        return <GoArrowSmallDown/>
    }
}

export default SortableTable
import React, { useState } from 'react'

function useSortData({config,data}) {
    const[sortBy,setSortBy]=useState(null);
    const[sortOrder,setSortOrder]=useState(null);
    //const{config,data}=props;

    const handleClick=(label)=>{
        if(sortBy && label!==sortBy){
            setSortOrder('asc');
            setSortBy(label);
            return;
        }
        if(sortOrder===null){
            setSortOrder('asc');
            setSortBy(label);
        }
        if(sortOrder==='asc'){
            setSortOrder('desc');
            setSortBy(label);
        }
        if(sortOrder==='desc'){
            setSortOrder(null);
            setSortBy(null);
        }
        console.log(label);
    }
    let sortedData=data;
    const sortOrderBy='asc';
    if(sortBy && sortOrder){
        const {sortValue} = config.find(column=>column.label===sortBy);
        sortedData=[...data].sort((a,b)=>{
            const valueA=sortValue(a);
            const valueB=sortValue(b);
            const reverseOrder=sortOrderBy==='asc' ? 1:-1
            if(typeof valueA=='string')
        {
            return valueA.localeCompare(valueB)*reverseOrder
            }
            else{
                 return (valueA-valueB)*reverseOrder;
            }
        })
    }
  return {
    handleClick,
    sortBy,
    sortOrder,
    sortedData
  }
}

export default useSortData
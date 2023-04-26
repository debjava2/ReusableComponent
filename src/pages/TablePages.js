import React from 'react'
//import Table from '../components/Table'
import SortableTable from '../components/SortableTable'

function TablePages() {
    const fruits=[
        {name:'Orange',Color:'bg-orange-500',Score:5 },
        {name:'Apple',Color:'bg-red-500',Score:3 },
        {name:'Banana',Color:'bg-yellow-500',Score:1 },
        {name:'Lime',Color:'bg-green-500',Score:4 }
    ]

    const config=[{label:'Name',render:(fruit)=>fruit.name,sortValue:(fruit)=>fruit.name},
                 {label:'Color',render:(fruit)=><div className={`p-3 m-2 ${fruit.Color}`} />},
                 {label:'Score',render:(fruit)=>fruit.Score,sortValue:(fruit)=>fruit.Score}
                ]
   const keyFn=(fruit)=>{
    return fruit.name;
   }              

  return (
    <div><SortableTable data={fruits} config={config} keyFn={keyFn}/></div>
  )
}

export default TablePages
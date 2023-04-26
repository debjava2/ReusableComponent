import React, { Fragment } from 'react'

function Table({data,config,keyFn,children}) {
    const renderHeaders=config.map((column)=>{
        if(column.header)
        {
            return<Fragment key={column.label}>{column.header()}</Fragment>
        }
        else{
        return <th key={column.label}>{column.label}</th>
        }
    })

    const renderRows=data.map((rowData)=>{
        const renderCells =config.map((column)=>{
            return <td className='p-3' key={column.label}>{column.render(rowData)}</td>
        })
        return (
            <tr className='border-b' key={keyFn(rowData)}>
                {/* <td className='p-3'>{config[0].render(fruit)}</td>
                <td className='p-3'>
                    <div className={`p-3 m-2 ${config[1].render(fruit)}`}></div>
                    </td>   
                <td className='p-3'>{config[2].render(fruit)}</td> */}
                {renderCells}
            </tr>
        )
    })

  return (
    <div>
        <table className='table-auto border-spacing-2'>
            <thead>
                <tr className='border-b-2'>
                    {renderHeaders}
                </tr>
            </thead>
            <tbody>
                {renderRows}
            </tbody>
        </table>
    </div>
  )
}

export default Table
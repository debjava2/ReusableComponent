import classNames from 'classnames'
import React from 'react'

function Panel({children,className,...rest}) {
    const finalclassName = classNames('border rounded p-3 shadow bg-white w-full',className);
  return (
    <div {...rest} className={finalclassName}>{children}</div>
  )
}

export default Panel
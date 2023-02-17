import React from 'react'

function btn({btnClass, btnVal}) {
  return (
    <button className={btnClass}>{btnVal}</button>
  )
}

export default btn
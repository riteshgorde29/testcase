import React, { useState } from 'react'

export const Count = () => {
    const [cnt,setCnt]=useState(0)
    const fnInc=()=>{
        setCnt(cnt+1)
    }
  return (
    <div>
        <h1>{cnt}</h1>
        <button onClick={fnInc}>Increment Cnt</button>
    </div>
  )
}

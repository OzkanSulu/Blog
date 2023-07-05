import React from 'react'

function layout({children}) {
  return (
    <div>
        <h1 className='portfolioMainTitle'>My works</h1>
        
        {children}</div>
  )
}

export default layout
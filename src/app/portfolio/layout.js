import Link from 'next/link'
import React from 'react'
import styles from "./page.modules.css"

function layout({children}) {
  return (
    <div>
        <h1 className='portfolioMainTitle'>My works</h1>
        
        {children}
        <button className='portfolioButton'>
        <Link href="/contact" >Contact</Link>
        </button>
        
        </div>
  )
}

export default layout
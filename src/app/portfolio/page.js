import React from 'react'
import styles from "./page.modules.css"
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className='borderItems'>
      <Link href="/portfolio/forex" className='portfolioItem'>
        <span className='portfolioTitle'>Forex</span>
      </Link>
      <Link href="/portfolio/stocks" className='portfolioItem'>
        <span className='portfolioTitle'>Stocks</span>
      </Link>
      <Link href="/portfolio/crypto" className='portfolioItem'>
        <span className='portfolioTitle'>Crypto</span>
      </Link>
      </div>
    </div>
  )
}

export default Portfolio
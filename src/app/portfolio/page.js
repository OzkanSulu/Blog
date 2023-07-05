import React from 'react'
import styles from "./page.modules.css"
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <Link href="/portfolio/forex">
        <span className='portfolioTitle'>Forex</span>
      </Link>
      <Link href="/portfolio/stocks">
        <span className='portfolioTitle'>Stocks</span>
      </Link>
      <Link href="/portfolio/crypto">
        <span className='portfolioTitle'>Crypto</span>
      </Link>
    </div>
  )
}

export default Portfolio
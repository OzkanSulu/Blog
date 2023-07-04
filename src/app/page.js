import Image from 'next/image'
import styles from './page.module.css'
import hero from "../../public/office.png"
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageText}>
        <h1>Be a Pioneer in the Crypto World, Explore the Market with Me</h1>
        <p className={styles.p}>Join me on an exciting journey into the world of cryptocurrencies, where you can become a trailblazer in the ever-evolving Crypto Wave. Together, let's navigate the market, seize opportunities, and uncover the potential for growth and innovation.</p>
      <Link href="/blog"><button className={styles.button}>See Latest News</button></Link>
      </div>
      <div className={styles.pageImg}>
        <Image src={hero} alt='Hero' className={styles.imgPage}/>
      </div>
    </div>
  )
}

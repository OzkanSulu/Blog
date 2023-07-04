import React from 'react'
import styles from "./page.modules.css"
import Image from 'next/image'
import investmen from '../../../public/investmen.jpg'
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={investmen} className="resim"/>
        <div className={styles.imgText}>
          <h1 className="imgTitle">The Future's Technology is Crypto</h1>
          <h2 className='imgDesc'>I follow and analyze every news and innovation related to crypto for you.</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className='aboutTitle'>Who am i</h1>
          <p>passionate about the crypto industry. With a background in economics and expertise in development, we have been actively engaged in the crypto world since 2011. Our deep understanding of both the technological and investment aspects of cryptocurrencies enables us to provide comprehensive insights and analysis to our audience.</p>
        </div>
        <div className={styles.item}>
          <h1 className='aboutTitle'>What i do</h1>
          <p>At our crypto blog, i aim to bridge the gap between technology and finance, offering a unique blend of knowledge and expertise. As avid followers of the crypto market, i provide up-to-date news, in-depth articles, and educational resources to keep you informed about the latest trends and developments. My goal is to deliver both general knowledge and technical insights while making complex concepts accessible to all readers.

By combining our extensive experience and research, i strive to provide a comprehensive understanding of cryptocurrencies, empowering my readers to make informed decisions and navigate the crypto world with confidence. Through our blog posts, we aim to present the subject matter in a detailed and understandable manner, catering to both beginners and experienced individuals seeking to expand their crypto knowledge.</p>
        </div>
      </div>
    </div>
  )
}

export default About
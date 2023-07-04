import React from 'react'
import Image from 'next/image'
import style from "./footer.modules.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div>&copy; Ozkan SULU&Daytail</div>
        <div className='socias'>
        <Image src="/1.png" width={25} height={25} alt="coin" />
        <Image src="/2.png" width={25} height={25} alt="coin" />
        <Image src="/3.png" width={25} height={25} alt="coin" />
        <Image src="/4.png" width={25} height={25} alt="coin" />
        </div>
    </div>
  )
}

export default Footer
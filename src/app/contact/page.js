import React from 'react'
import styles from "./page.modules.css"
import Image from 'next/image'
import contact from "../../../public/contact1.png"

const Contact = () => {
  return (
    <div className={styles.container}>
      
      <div className="content">
        <div className="imgContainer">
          <Image src={contact} alt='contact' className='contactImg'/>
        </div>
        <form className="form">
            <h1>Contact</h1>
            <input type='text' placeholder='name'/>
            <input type="email" placeholder='mail adress'/>
            <textarea placeholder='message' cols="30" rows="10"/>
            <button url="#" className='contactBtn'>Send</button> 
        </form>
      </div>
    </div>
  )
}

export default Contact
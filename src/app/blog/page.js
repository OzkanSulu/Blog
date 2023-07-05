import React from 'react'
import styles from "./page.modules.css"
import Link from 'next/link'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className='container'>
      <div className='blogContainer'>
        <Link href={"#"} className='blogLink'>
         <div className='blogImg'>
         <Image src="/investmen.jpg" width="400" height="200"/>
         </div>
          <div className='blogText'>
            <h2>Lastes blog writing</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </Link>

      </div>
      <div className='blogContainer'>
        <Link href={"#"} className='blogLink'>
         <div className='blogImg'>
         <Image src="/investmen.jpg" width="400" height="200"/>
         </div>
          <div className='blogText'>
            <h2>Lastes blog writing</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </Link>

      </div>
      <div className='blogContainer'>
        <Link href={"#"} className='blogLink'>
         <div className='blogImg'>
         <Image src="/investmen.jpg" width="400" height="200"/>
         </div>
          <div className='blogText'>
            <h2>Lastes blog writing</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </Link>

      </div>
      <div className='blogContainer'>
        <Link href={"#"} className='blogLink'>
         <div className='blogImg'>
         <Image src="/investmen.jpg" width="400" height="200"/>
         </div>
          <div className='blogText'>
            <h2>Lastes blog writing</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </Link>

      </div>
      <div className='blogContainer'>
        <Link href={"#"} className='blogLink'>
         <div className='blogImg'>
         <Image src="/investmen.jpg" width="400" height="200"/>
         </div>
          <div className='blogText'>
            <h2>Lastes blog writing</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </Link>

      </div>
      
    </div>
  )
}

export default Blog
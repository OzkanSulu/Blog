"use client"
import React, { useContext } from 'react'
import styles from "./page.modules.css"
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '@/context/ThemeContext';

function DarkMode() {

  const {toggle,mode} =useContext(ThemeContext)

  return (
    <div className="darkContainer" onClick={toggle}>
      <div className="icons"><FaMoon/></div>
      <div className="icons"><FaSun/></div>
      <div
        className="ball"
        style={mode === 'dark' ? { right:"2px"  } : { left:"2px" }}
      ></div>
    </div>
  )
}

export default DarkMode

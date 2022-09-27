import React from 'react'

import Link from 'next/link'
import styles from '../styles/Home.module.css'
const Navbar = () => {
  return (
    <nav className={styles.mainnav}>
        <ul>
         <Link href="/">
           <a><li >Home</li></a>
         </Link>
         <Link href="/about"> 
         <a ><li>about</li></a>
         </Link>
         <Link href="/blog"> 
         <a><li>blog</li></a>
                  </Link>
         <Link href="/contact"> 
         <a><li>contact</li></a>
         </Link>

        </ul>
      </nav>
  )
}

export default Navbar
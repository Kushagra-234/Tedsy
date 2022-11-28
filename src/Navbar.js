import React from 'react'
import './navbar.css'
import { useState } from "react"
import {AiOutlineHome,AiFillCodeSandboxSquare,AiOutlineShop,AiOutlineInfoCircle} from 'react-icons/ai';
import {FcCopyright} from 'react-icons/fc'



export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
      <FcCopyright size="35px"/>Museumverse
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        {/* hamburger svg code... */}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/home"><AiOutlineHome/> HOME</a>
          </li>
          <li>
            <a href="/artifact"><AiFillCodeSandboxSquare/> ARTIFACTS</a>
          </li>
          <li>
            <a href="/shop"><AiOutlineShop/> SHOP</a>
          </li>
          <li>
            <a href="/about"><AiOutlineInfoCircle/> ABOUT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

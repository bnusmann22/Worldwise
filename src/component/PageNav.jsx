import React from 'react'
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import { NavLink } from 'react-router-dom'

function PageNav() {
  return (
    <nav className={styles.nav}>
        <Logo />
        <ul>
            <li>
                <NavLink to="/Pricing">Pricing</NavLink>
            </li>
            <li>
                <NavLink to="/Product">Product</NavLink>
            </li>
            <li>
                <NavLink to="/Login" className="cta">Login</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default PageNav
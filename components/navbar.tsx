import React from 'react';
import Link from 'next/link';
import Styles from '../styles/NavBar.module.scss'

const NavBar = () => {
    return (

    <nav className={Styles.navBar}>
        <ul className={Styles.pageLinks}>
        <Link href="/">
            <a className="pageLinks" aria-label="home">Home</a>
        </Link>

        <Link href="/about">
            <a className="pageLinks" aria-label="about">About</a>
        </Link>

        <Link href="/services">
            <a className="pageLinks" aria-label="services">Services</a>
        </Link>


        <Link href="/contact">
            <a className="pageLinks" aria-label="contact">Contact</a>
        </Link>
        </ul>


    </nav>
    )

}

export default NavBar
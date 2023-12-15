'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from './navbar.module.css'
import logo from '@/assets/KI.png'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar () {
    const [menu, setMenu] = useState(false)
    return(
        <nav className={styles.navbar}>
            <Link className={styles.navbar__logo} href='/'><Image src={logo} alt='' /></Link>
            <div onClick={() => setMenu(!menu)} className={styles.navbar__menu} >
                {menu ? 
                <FontAwesomeIcon icon={faXmark} /> :
                <FontAwesomeIcon icon={faBars} />
                }
            </div>
            <ul className={menu ? `${styles.navbar__container} ${styles.active}` : `${styles.navbar__container}`}>
                <Link onClick={() => setMenu(!menu)} className={styles.navbar__list} href='/'><li>Inicio</li></Link>
                <Link onClick={() => setMenu(!menu)} className={styles.navbar__list} href='/peleadores'><li>Peleadores</li></Link>
                <Link onClick={() => setMenu(!menu)} className={styles.navbar__list} href='/articulos'><li>Artículos</li></Link>
                <Link onClick={() => setMenu(!menu)} className={styles.navbar__list} href='/estilos'><li>Estílos</li></Link>
            </ul>
        </nav>
    )
}
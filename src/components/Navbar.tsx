import Image from 'next/image'
import styles from './navbar.module.css'
import logo from '@/assets/KI.png'
import Link from 'next/link'

export default function Navbar () {
    return(
        <nav className={styles.navbar}>
            <Link className={styles.navbar__logo} href='/'><Image src={logo} alt='' /></Link>
            <ul className={`${styles.navbar__container}`}>
                <Link className={styles.navbar__list} href='/'><li>Inicio</li></Link>
                <Link className={styles.navbar__list} href='/peleadores'><li>Peleadores</li></Link>
                <Link className={styles.navbar__list} href='/articulos'><li>Artículos</li></Link>
            </ul>
        </nav>
    )
}
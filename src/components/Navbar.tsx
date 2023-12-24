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
                <li className={styles.navbar__item}><Link className={styles.navbar__link} href='/'>Inicio</Link></li>
                <li className={styles.navbar__item}><Link className={styles.navbar__link} href='/peleadores'>Peleadores</Link>
                    <ul className={styles.navbar__item__dropdown}>
                        <li><Link onClick={() => setMenu(!menu)} className={styles.navbar__item_dropdown__link} href='/peleadores/lidia-rodriguez'>Lidia Rodríguez</Link></li>
                        <li><Link onClick={() => setMenu(!menu)} className={styles.navbar__item_dropdown__link} href='/peleadores/rafael-aghayev'>Rafael Aghayev</Link></li>
                        <li><Link onClick={() => setMenu(!menu)} className={styles.navbar__item_dropdown__link} href='/peleadores/oscar-higa'>Oscar Higa</Link></li>
                        <li><Link onClick={() => setMenu(!menu)} className={styles.navbar__item_dropdown__link} href='/peleadores/yorgelis-salazar'>Yorgelis Salazar</Link></li>
                        <li><Link onClick={() => setMenu(!menu)} className={styles.navbar__item_dropdown__link} href='/peleadores/masutatsu-oyama'>Masutatsu Oyama</Link></li>
                    </ul>
                </li>
                <li className={styles.navbar__item}><Link className={styles.navbar__link} href='/articulos'>Artículos</Link>
                    <ul className={styles.navbar__item__dropdown}>
                        <li><Link onClick={() => setMenu(!menu)} className={styles.navbar__item_dropdown__link} href='/articulos/defensa-personal-karate'>Defensa Personal</Link></li>
                        <li><Link onClick={() => setMenu(!menu)} className={styles.navbar__item_dropdown__link} href='/articulos/karate-adultos'>Karate Adultos</Link></li>
                        <li><Link onClick={() => setMenu(!menu)} className={styles.navbar__item_dropdown__link} href='/articulos/dojo-karate'>Dojo</Link></li>
                        <li><Link onClick={() => setMenu(!menu)} className={styles.navbar__item_dropdown__link} href='/articulos/okinawa-karate'>Okinawa</Link></li>
                        <li><Link onClick={() => setMenu(!menu)} className={styles.navbar__item_dropdown__link} href='/articulos/karate-taekwondo'>Karate y Taekwondo</Link></li>
                        <li><Link onClick={() => setMenu(!menu)} className={styles.navbar__item_dropdown__link} href='/articulos/dojo-kun'>Dojo Kun</Link></li>
                        <li><Link onClick={() => setMenu(!menu)} className={styles.navbar__item_dropdown__link} href='/articulos/dans-karate'>Dans Karate</Link></li>
                    </ul>
                </li>
                <li className={styles.navbar__item}><Link className={styles.navbar__link} href='/famosos'>Famosos</Link>
                    <ul className={styles.navbar__item__dropdown}>
                        <li><Link onClick={() => setMenu(!menu)} className={styles.navbar__item_dropdown__link} href='/famosos/chuck-norris'>Chuck Norris</Link></li>
                        <li><Link onClick={() => setMenu(!menu)} className={styles.navbar__item_dropdown__link} href='/famosos/bruce-lee'>Bruce Lee</Link></li>
                        <li><Link onClick={() => setMenu(!menu)} className={styles.navbar__item_dropdown__link} href='/famosos/dolph-lundgren'>Dolph Lundgren</Link></li>
                        <li><Link onClick={() => setMenu(!menu)} className={styles.navbar__item_dropdown__link} href='/famosos/jean-claude-van-damme'>Jean-Claude Van Damme</Link></li>
                        <li><Link onClick={() => setMenu(!menu)} className={styles.navbar__item_dropdown__link} href='/famosos/michael-jai-white'>Michael Jai White</Link></li>
                    </ul>
                </li>
                <li className={styles.navbar__item}><Link className={styles.navbar__link} href='/estilos'>Estílos</Link>
                    <ul className={styles.navbar__item__dropdown}>
                        <li><Link onClick={() => setMenu(!menu)} className={styles.navbar__item_dropdown__link} href='/estilos/kyokushin-kai'>Kyokushin Kai</Link></li>
                        <li><Link onClick={() => setMenu(!menu)} className={styles.navbar__item_dropdown__link} href='/estilos/gojuryu'>Goju Ryu</Link></li>
                        <li><Link onClick={() => setMenu(!menu)} className={styles.navbar__item_dropdown__link} href='/articulos/karate-do'>Karate-do</Link></li>
                        <li><Link onClick={() => setMenu(!menu)} className={styles.navbar__item_dropdown__link} href='/estilos/karate-shotokan'>Shotokan</Link></li>
                        <li><Link onClick={() => setMenu(!menu)} className={styles.navbar__item_dropdown__link} href='/estilos/karate-kobudo'>Kobudo</Link></li>
                        <li><Link onClick={() => setMenu(!menu)} className={styles.navbar__item_dropdown__link} href='/estilos/karate-kata'>Karate Kata</Link></li>
                        <li><Link onClick={() => setMenu(!menu)} className={styles.navbar__item_dropdown__link} href='/estilos/shorinji-ryu'>Shonriji Ryu</Link></li>
                        <li><Link onClick={() => setMenu(!menu)} className={styles.navbar__item_dropdown__link} href='/estilos/karate-byakuren'>Karate Byakuren</Link></li>
                        <li><Link onClick={() => setMenu(!menu)} className={styles.navbar__item_dropdown__link} href='/estilos/budo'>Budo</Link></li>
                    </ul>
                </li>
                <li className={styles.navbar__item}><Link className={styles.navbar__link} href='/contacto'>Contacto</Link></li>
            </ul>
        </nav>
    )
}
import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer () {
    return(
        <footer className={styles.footer}>
            <ul className={styles.footer__container}>
                <li><Link href='/contacto'>Contáctanos</Link></li>
                <li><Link href='/sobre-nosotros'>Sobre Nosotros</Link></li>
                <li><Link href='/cookies'>Política de Cookies</Link></li>
                <li><Link href='/privacidad'>Política de Privacidad</Link></li>
            </ul>
            <div className={styles.footer__line} />
            <p className={styles.footer__p}>Página diseñada y desarrollada por Ulises Montenegro</p>
        </footer>
    )
}
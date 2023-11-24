import styles from './footer.module.css'

export default function Footer () {
    return(
        <footer className={styles.footer}>
            <ul className={styles.footer__container}>
                <li>Contáctanos</li>
                <li>Sobre Nosotros</li>
            </ul>
            <div className={styles.footer__line} />
            <p className={styles.footer__p}>Página diseñada y desarrollada por Ulises Montenegro</p>
        </footer>
    )
}
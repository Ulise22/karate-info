import Link from 'next/link'
import styles from './peleadorArticle.module.css'
import Image from 'next/image'

export default function PeleadorArticle ({peleadorImage, nombre, link}) {
    return(
        <Link className={styles.peleador__link} href={link}>
            <article className={styles.peleador}>
                <Image className={styles.peleador__image} src={peleadorImage} alt='' />
                <h2 className={styles.peleador__nombre}> {nombre} </h2>
            </article>
        </Link>
    )
}
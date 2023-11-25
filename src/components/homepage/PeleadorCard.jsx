import Image from 'next/image'
import styles from './peleadorcard.module.css'

export default function PeleadorCard ({peleadorImage, nombre, texto}) {
    return(
        <article className={styles.article__peleador}>
              <Image className={styles.article__peleador__image} src={peleadorImage} alt='' />
              <h3 className={styles.article__peleador__title}>Oscar Higa</h3>
              <p className={styles.article__peleador__text}>Oscar Higa es un peleador de karate nacido el 28 de marzo de 1945 en Buenos Aires</p>
        </article>
    )
}
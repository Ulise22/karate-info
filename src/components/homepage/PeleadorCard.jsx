import Image from 'next/image'
import styles from './peleadorcard.module.css'

export default function PeleadorCard ({peleadorImage, nombre, texto}) {
    return(
        <article className={styles.article__peleador}>
              <Image className={styles.article__peleador__image} src={peleadorImage} alt='' />
              <h3 className={styles.article__peleador__title}> {nombre} </h3>
              <p className={styles.article__peleador__text}> {texto} </p>
        </article>
    )
}
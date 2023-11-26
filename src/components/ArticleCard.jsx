import Image from 'next/image'
import styles from './articleCard.module.css'

export default function ArticleCard ({artImage, title, text}) {
    return(
        <div className={styles.article__card}>
              <Image className={styles.article__card__image} src={artImage} alt='' />
              <h3 className={styles.article__card__title}> {title} </h3>
              <p className={styles.article__card__text}> {text} </p>
        </div>
    )
}
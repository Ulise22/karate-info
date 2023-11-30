import Image from 'next/image'
import styles from './articleCard.module.css'
import Link from 'next/link'

export default function ArticleCard ({artImage, title, text, artiURL}) {
    return(
        <Link className={styles.article__card} href={artiURL}>
            <Image className={styles.article__card__image} src={artImage} alt='' />
            <h3 className={styles.article__card__title}> {title} </h3>
            <p className={styles.article__card__text}> {text} </p>
        </Link>
    )
}
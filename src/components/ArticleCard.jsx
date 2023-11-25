import Image from 'next/image'
import styles from './articleCard.module.css'

export default function ArticleCard ({artImage, title, text}) {
    return(
        <div className={styles.article__card}>
              <Image className={styles.article__card__image} src={artImage} alt='' />
              <h3 className={styles.article__card__title}>Karate Kobudo</h3>
              <p className={styles.article__card__text}>El karate Kobudo es un arte marcial japonés que estudia el uso de las armas tradicionales de madera o metal.</p>
        </div>
    )
}
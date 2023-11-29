import Image from 'next/image'
import styles from './articlesHero.module.css'

export default function ArticlesHero ({title, img}) {
    return(
        <header>
            <h1 className={styles.hero__title}> {title} </h1>
            <Image className={styles.hero__image} src={img} alt='' />
        </header>
    )
}
import Image from "next/image";
import Link from "next/link";
import styles from './article.module.css'

export default function Article ({image, title, url}) {
    return(
        <Link className={styles.article} href={url}>
            <article className={styles.article__container}>
                <Image className={styles.article__image} src={image} alt={title} />
                <h4 className={styles.article__title}> {title} </h4>
            </article>
        </Link>
    )
}
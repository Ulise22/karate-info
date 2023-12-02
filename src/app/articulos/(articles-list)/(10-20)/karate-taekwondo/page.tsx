import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import taekwondo from '@/assets/articles-big/taekwondo.jpg'

export default function Taekwondo () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Karate y Taekwondo' img={taekwondo} />
            <section className={styles.article__container}>
                <h1>Article</h1>
            </section>
        </main>
    )
}
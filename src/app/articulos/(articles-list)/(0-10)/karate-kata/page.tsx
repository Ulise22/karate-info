import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import kata from '@/assets/articles-big/karate_kata.jpg'

export default function KarateKata () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Karate Kata' img={kata} />
            <section className={styles.article__container}>
                <h1>Article</h1>
            </section>
        </main>
    )
}
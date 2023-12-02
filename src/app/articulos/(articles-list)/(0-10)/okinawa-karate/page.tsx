import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import okinawa from '@/assets/articles-preview/okinawa.jpg'

export default function Okinawa () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Okinawa Karate' img={okinawa} />
            <section className={styles.article__container}>
                <h1>Article</h1>
            </section>
        </main>
    )
}
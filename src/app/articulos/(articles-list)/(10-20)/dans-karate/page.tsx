import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import dans from '@/assets/articles-big/dans (2).jpg'

export default function Dans () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Dans Karate' img={dans} />
            <section className={styles.article__container}>
                <h1>Article</h1>
            </section>
        </main>
    )
}
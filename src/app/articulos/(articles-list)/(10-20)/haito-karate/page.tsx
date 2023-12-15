import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import haito from '@/assets/articles-preview/haito.png'

export default function Haito () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Haito Karate' img={haito} />
            <section className={styles.article__container}>
                <h1>Article</h1>
            </section>
        </main>
    )
}
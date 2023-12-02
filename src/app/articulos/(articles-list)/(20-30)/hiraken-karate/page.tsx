import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import hiraken from '@/assets/articles-preview/hiraken.png'

export default function Hiraken () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Hiraken Karate' img={hiraken} />
            <section className={styles.article__container}>
                <h1>Article</h1>
            </section>
        </main>
    )
}
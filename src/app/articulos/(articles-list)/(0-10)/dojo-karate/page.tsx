import ArticlesHero from '@/components/ArticlesHero'
import dojo from '@/assets/articles-preview/dojo.jpg'
import styles from '../../../article.module.css'

export default function Dojo () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Dojo Karate' img={dojo} />
            <section className={styles.article__container}>
                <h1>Article</h1>
            </section>
        </main>
    )
}
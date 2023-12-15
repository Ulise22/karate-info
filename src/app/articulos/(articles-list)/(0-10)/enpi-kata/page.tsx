import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import enpikata from '@/assets/articles-big/enpi_kata (2).jpg'

export default function EnpiKata () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Enpi Kata' img={enpikata} />
            <section className={styles.article__container}>
                <h1>Article</h1>
            </section>
        </main>
    )
}
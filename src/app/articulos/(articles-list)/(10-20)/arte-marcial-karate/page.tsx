import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import artemarcial from '@/assets/articles-big/am_karate (2).jpg'

export default function ArteMarcial () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Karate Arte Marcial' img={artemarcial} />
            <section className={styles.article__container}>
                <h1>Article</h1>
            </section>
        </main>
    )
}
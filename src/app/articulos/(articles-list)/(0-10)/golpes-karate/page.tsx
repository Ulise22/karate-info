import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import golpe from '@/assets/articles-big/golpe (2).jpg'

export default function Golpes () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Golpes de Karate' img={golpe} />
            <section className={styles.article__container}>
                <h1>Article</h1>
            </section>
        </main>
    )
}
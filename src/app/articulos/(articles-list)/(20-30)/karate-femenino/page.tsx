import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import femenino from '@/assets/articles-big/femenino (2).jpg'

export default function KarateFemenino () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Karate Femenino' img={femenino} />
            <section className={styles.article__container}>
                <h1>Article</h1>
            </section>
        </main>
    )
}
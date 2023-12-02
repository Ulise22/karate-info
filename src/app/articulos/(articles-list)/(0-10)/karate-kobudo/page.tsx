import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import kobudo from '@/assets/articles-big/kobudo.jpg'

export default function Kobudo () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Karate Kobudo' img={kobudo} />
            <section className={styles.article__container}>
                <h1>Article</h1>
            </section>
        </main>
    )
}
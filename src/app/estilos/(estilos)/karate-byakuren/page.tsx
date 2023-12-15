import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import byakuren from '@/assets/articles-big/byakuren (2).jpg'

export default function Byakuren () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Karate Byakuren' img={byakuren} />
            <section className={styles.article__container}>
                <h1>Article</h1>
            </section>
        </main>
    )
}
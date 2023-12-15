import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import aak from '@/assets/articles-preview/aka_ao.jpg'

export default function AkaAo () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Aka Ao Karate' img={aak} />
            <section className={styles.article__container}>
                <h1>Article</h1>
            </section>
        </main>
    )
}
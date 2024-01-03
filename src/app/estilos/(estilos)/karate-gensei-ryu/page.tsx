import ArticlesHero from '@/components/ArticlesHero'
import genseiryu from '@/assets/articles-big/genseiryu (2).jpg'
import styles from '@/app/articulos/article.module.css'

export default function Genseiryu () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Genseiryū' img={genseiryu} />
            <section className={styles.article__container}>
                <h2 className={styles.article__subtitle}>Karate Gensei Ryu</h2>
                <p></p>
                <h2 className={styles.article__subtitle}>Gensei Ryu Katas</h2>
                <p></p>
            </section>
        </main>
    )
}
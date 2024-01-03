import ArticlesHero from '@/components/ArticlesHero'
import shitoRyu from '@/assets/articles-big/shito_ryu (2).jpg'
import styles from '@/app/articulos/article.module.css'

export default function ShitoRyu () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Shitō-ryū' img={shitoRyu} />
            <section className={styles.article__container}>
                <h2 className={styles.article__subtitle}>Karate Shito Ryu</h2>
                <p></p>
                <h2 className={styles.article__subtitle}>Katas de shito Ryu</h2>
                <p></p>
                <h2 className={styles.article__subtitle}>world shito ryu karate do federation</h2>
                <p></p>
            </section>
        </main>
    )
}
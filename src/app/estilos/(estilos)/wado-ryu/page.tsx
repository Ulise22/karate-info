import ArticlesHero from '@/components/ArticlesHero'
import wadoRyu from '@/assets/articles-preview/wado_ryu.jpg'
import styles from '@/app/articulos/article.module.css'

export default function WadoRyu () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Wadō-ryū' img={wadoRyu} />
            <section className={styles.article__container}>
                <h2 className={styles.article__subtitle}>Karate Wado Ryu</h2>
                <p></p>
                <h2 className={styles.article__subtitle}>Katas Wado Ryu</h2>
            </section>
        </main>
    )
}
import ArticlesHero from '@/components/ArticlesHero'
import styles from '@/app/articulos/article.module.css'
import shokotan from '@/assets/homepage/articles/shotokan.jpg'

export default function Shokotan () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Karate Shokotan' img={shokotan} />
            <section className={styles.article__container}>
                <h1>Article</h1>
            </section>
        </main>
    )
}
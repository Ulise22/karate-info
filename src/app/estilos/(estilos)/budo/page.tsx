import ArticlesHero from '@/components/ArticlesHero'
import styles from '@/app/articulos/article.module.css'
import budo from '@/assets/articles-preview/budo.jpg'

export default function Budo () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Budo' img={budo} />
            <section className={styles.article__container}>
                <h1>Article</h1>
            </section>
        </main>
    )
}
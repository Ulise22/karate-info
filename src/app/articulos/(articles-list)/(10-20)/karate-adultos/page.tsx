import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import adultos from '@/assets/articles-big/adultos.jpg'

export default function Adultos () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Karate para Adultos' img={adultos} />
            <section className={styles.article__container}>
                <h1>Article</h1>
            </section>
        </main>
    )
}
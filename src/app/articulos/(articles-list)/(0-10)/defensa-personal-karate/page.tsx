import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import defensa from '@/assets/articles-big/defensa_personal.jpg'

export default function Defensa () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Defensa Personal Karate' img={defensa} />
            <section className={styles.article__container}>
                <h1>Article</h1>
            </section>
        </main>
    )
}
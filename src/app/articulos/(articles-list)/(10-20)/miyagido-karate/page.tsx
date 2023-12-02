import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import miyagido from '@/assets/articles-preview/miyagi-do-karate.jpg'

export default function Miyagido () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Miyagido Karate' img={miyagido} />
            <section className={styles.article__container}>
                <h1>Article</h1>
            </section>
        </main>
    )
}
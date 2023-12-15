import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import dojo from '@/assets/homepage/articles/dojo_kun.svg'

export default function DojoKun () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Dojo Kun' img={dojo} />
            <section className={styles.article__container}>
                <h1>Article</h1>
            </section>
        </main>
    )
}
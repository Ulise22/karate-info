import ArticlesHero from '@/components/ArticlesHero'
import kyokushin  from '@/assets/articles-preview/kyokushin.jpg'
import styles from '../../../article.module.css'

export default function Kyokushin () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Kyokushin Kai' img={kyokushin} />
            <section className={styles.article__container}>
            </section>
        </main>
    )
}
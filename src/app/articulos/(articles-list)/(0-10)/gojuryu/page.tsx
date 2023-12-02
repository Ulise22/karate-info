import ArticlesHero from '@/components/ArticlesHero'
import gojuryu from '@/assets/articles-preview/gojuryu.jpg'
import styles from '../../../article.module.css'

export default function Gojuryu () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Gojuryu' img={gojuryu} />
            <section className={styles.article__container}>
                <h1>Article</h1>
            </section>
        </main>
    )
}
import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import chatan from '@/assets/articles-big/chatanyara (2).jpg'

export default function ChatanYara () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Chatan Yara' img={chatan} />
            <section className={styles.article__container}>
                <h1>Article</h1>
            </section>
        </main>
    )
}
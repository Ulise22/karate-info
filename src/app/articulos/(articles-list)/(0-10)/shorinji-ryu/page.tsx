import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import shorinji from '@/assets/articles-big/shorinji.jpg'

export default function Shorinji () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Shorinji Ryu' img={shorinji} />
            <section className={styles.article__container}>
                <h1>Article</h1>
            </section>
        </main>
    )
}
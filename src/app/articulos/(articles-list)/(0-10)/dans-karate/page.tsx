import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import dans from '@/assets/articles-big/dans (2).jpg'

export default function Dans () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Dans Karate' img={dans} />
            <section className={styles.article__container}>
                <p>Dan es el nombre que reciben los diferentes niveles del sistema de graduación <b>Dankyuisei</b>, que en el contexto del karate habla de la jerarquía que reciben los practicantes de las artes marciales japonesas.</p>
            </section>
        </main>
    )
}
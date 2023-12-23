import styles from '@/app/famosos/famoso.module.css'
import chuck from '@/assets/famosos/chuck__hero.jpg'
import ArticlesHero from '@/components/ArticlesHero'

export default function ChuckNorris () {
    return(
        <main className={styles.famoso}>
            <ArticlesHero title='Chuck Norris' img={chuck} />
            <section className={styles.famoso__article}>
                
            </section>
        </main>
    )
}
import styles from '@/app/famosos/famoso.module.css'
import dolph from '@/assets/famosos/dolph_hero.jpg'
import ArticlesHero from '@/components/ArticlesHero'

export default function Dolph () {
    return(
        <main className={styles.famoso}>
            <ArticlesHero title='Dolph Lundgren' img={dolph} />
            <section className={styles.famoso__article}>
                
            </section>
        </main>
    )
}
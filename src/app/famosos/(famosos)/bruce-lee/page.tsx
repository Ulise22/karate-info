import styles from '@/app/famosos/famoso.module.css'
import lee from '@/assets/famosos/bruce_lee_hero.jpg'
import ArticlesHero from '@/components/ArticlesHero'

export default function BruceLee () {
    return(
        <main className={styles.famoso}>
            <ArticlesHero title='Bruce Lee' img={lee} />
            <section className={styles.famoso__article}>
                
            </section>
        </main>
    )
}
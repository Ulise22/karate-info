import styles from '@/app/famosos/famoso.module.css'
import vanDamme from '@/assets/famosos/van_damme-hero.jpg'
import ArticlesHero from '@/components/ArticlesHero'

export default function VanDamme () {
    return(
        <main className={styles.famoso}>
            <ArticlesHero title='Jean-Claude Van Damme' img={vanDamme} />
            <section className={styles.famoso__article}>
                
            </section>
        </main>
    )
}
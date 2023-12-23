import styles from '@/app/famosos/famoso.module.css'
import michael from '@/assets/famosos/michael-jai_white_hero.jpg'
import ArticlesHero from '@/components/ArticlesHero'

export default function BruceLee () {
    return(
        <main className={styles.famoso}>
            <ArticlesHero title='Michael Jai White' img={michael} />
            <section className={styles.famoso__article}>
                
            </section>
        </main>
    )
}
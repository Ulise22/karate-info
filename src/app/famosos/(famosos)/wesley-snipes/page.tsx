import styles from '@/app/famosos/famoso.module.css'
import wesley from '@/assets/famosos/hero/wesley_snipes_hero.jpg'
import ArticlesHero from '@/components/ArticlesHero'
import Link from 'next/link'

export default function WesleySnipes () {
    return(
        <main className={styles.famoso}>
            <ArticlesHero title='Wesley Snipes' img={wesley} />
            <section className={styles.famoso__article}>
                <p></p>
            </section>
        </main>
    )
}
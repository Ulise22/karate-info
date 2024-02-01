import styles from '@/app/famosos/famoso.module.css'
import taylor from '@/assets/famosos/hero/taylor_lautner_hero.jpg'
import ArticlesHero from '@/components/ArticlesHero'
import Link from 'next/link'

export default function TaylorLauter () {
    return(
        <main className={styles.famoso}>
            <ArticlesHero title='Taylor Lautner' img={taylor} />
            <section className={styles.famoso__article}>
                <p></p>
            </section>
        </main>
    )
}
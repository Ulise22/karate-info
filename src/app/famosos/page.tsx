import PeleadorArticle from '@/components/PeleadorArticle'
import styles from './famosos.module.css'
/* Images */
import chuck from '@/assets/famosos/chuck_norris.jpg'
import dolph from '@/assets/famosos/dolph_lundgren.jpg'
import vanDamme from '@/assets/famosos/van_damme.jpg'
import lee from '@/assets/famosos/bruce_lee.jpg'
import michael from '@/assets/famosos/michael-jai_white.jpg'

export default function Famosos () {
    return(
        <main className={styles.famosos}>
            <header className={styles.famosos__header}>
                <h1>Famosos de Karate</h1>
            </header>
            <section className={styles.famosos__container}>
                <PeleadorArticle peleadorImage={chuck} nombre='Chuck Norris' link='/famosos/chuck-norris' />
                <PeleadorArticle peleadorImage={lee} nombre='Bruce Lee' link='/famosos/bruce-lee' />
                <PeleadorArticle peleadorImage={dolph} nombre='Dolph Lundgren' link='/famosos/dolph-lundgren' />
                <PeleadorArticle peleadorImage={vanDamme} nombre='Jean-Claude Van Damme' link='/famosos/jean-claude-van-damme' />
                <PeleadorArticle peleadorImage={michael} nombre='Michael Jai White' link='/famosos/michael-jai-white' />
            </section>
        </main>
    )
}
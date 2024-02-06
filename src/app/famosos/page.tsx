import PeleadorArticle from '@/components/PeleadorArticle'
import styles from './famosos.module.css'
/* Images */
import chuck from '@/assets/famosos/cards/chuck_norris.jpg'
import dolph from '@/assets/famosos/cards/dolph_lundgren.jpg'
import vanDamme from '@/assets/famosos/cards/van_damme.jpg'
import lee from '@/assets/famosos/cards/bruce_lee.jpg'
import michael from '@/assets/famosos/cards/michael-jai_white.jpg'
import taylor from '@/assets/famosos/cards/taylor_lautner_card.jpg'
import wesley from '@/assets/famosos/cards/wesley_snipes_card.jpg'
import seagal from '@/assets/famosos/cards/steven_seagal_card.jpg'

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
                <PeleadorArticle peleadorImage={taylor} nombre='Taylor Lautner' link='/famosos/taylor-lautner' />
                <PeleadorArticle peleadorImage={wesley} nombre='Wesley Snipes' link='/famosos/wesley-snipes' />
                <PeleadorArticle peleadorImage={seagal} nombre='Steven Seagal' link='/famosos/steven-seagal' />
            </section>
        </main>
    )
}
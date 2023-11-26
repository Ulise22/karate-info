import styles from './peleadores.module.css'
import lidia from '@/assets/homepage/peleadores/lidia_rodriguez.jpg'
import rafael from '@/assets/homepage/peleadores/aghayev_rafael.jpg'
import oscar from '@/assets/homepage/peleadores/oscar_higa.jpg'
import yorgelis from '@/assets/homepage/peleadores/yorgelis_salazar.jpg'
import PeleadorArticle from '@/components/PeleadorArticle'

export default function Peleadores () {
    return(
        <main className={styles.peleadores}>
            <header className={styles.peleadores__header}>
                <h1>Peleadores de Karate</h1>
            </header>
            <section className={styles.peleadores__container}>
                <PeleadorArticle peleadorImage={lidia} nombre='Lidia Rodríguez' link='/peleadores/lidia-rodriguez' />
                <PeleadorArticle peleadorImage={rafael} nombre='Rafael Aghayev' link='/peleadores/rafael-aghayev' />
                <PeleadorArticle peleadorImage={oscar} nombre='Oscar Higa' link='/peleadores/oscar-higa' />
                <PeleadorArticle peleadorImage={yorgelis} nombre='Yorgelis Salazar' link='/peleadores/yorgelis-salazar' />
            </section>
        </main>
    )
}
import PeleadorArticle from '@/components/PeleadorArticle'
import styles from './peleadores.module.css'
/* Images */
import funakoshi from '@/assets/homepage/peleadores/gichin-funakoshi.webp'
import lidia from '@/assets/homepage/peleadores/lidia_rodriguez.jpg'
import rafael from '@/assets/homepage/peleadores/aghayev_rafael.jpg'
import oscar from '@/assets/homepage/peleadores/oscar_higa.jpg'
import yorgelis from '@/assets/homepage/peleadores/yorgelis_salazar.jpg'
import masoyama from '@/assets/homepage/peleadores/masoyama.jpg'
import petit from '@/assets/peleadores/petit.jpg'
import enoeda from '@/assets/peleadores/enoeda.webp'

export default function Peleadores () {
    return(
        <main className={styles.peleadores}>
            <header className={styles.peleadores__header}>
                <h1>Peleadores de Karate</h1>
            </header>
            <section className={styles.peleadores__container}>
                <PeleadorArticle peleadorImage={funakoshi} nombre='Gichin Funakoshi' link='/peleadores/gichin-funakoshi' />
                <PeleadorArticle peleadorImage={lidia} nombre='Lidia Rodríguez' link='/peleadores/lidia-rodriguez' />
                <PeleadorArticle peleadorImage={rafael} nombre='Rafael Aghayev' link='/peleadores/rafael-aghayev' />
                <PeleadorArticle peleadorImage={oscar} nombre='Oscar Higa' link='/peleadores/oscar-higa' />
                <PeleadorArticle peleadorImage={yorgelis} nombre='Yorgelis Salazar' link='/peleadores/yorgelis-salazar' />
                <PeleadorArticle peleadorImage={masoyama} nombre='Masutatsu Ōyama' link='/peleadores/masutatsu-oyama' />
                <PeleadorArticle peleadorImage={petit} nombre='Arturo Petit' link='/peleadores/arturo-petit' />
                <PeleadorArticle peleadorImage={enoeda} nombre='Keinosuke Enoeda' link='/peleadores/keinosuke-enoeda' />
            </section>
        </main>
    )
}
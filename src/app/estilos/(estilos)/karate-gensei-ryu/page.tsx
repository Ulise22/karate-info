import ArticlesHero from '@/components/ArticlesHero'
import genseiryu from '@/assets/articles-big/genseiryu (2).jpg'
import styles from '@/app/articulos/article.module.css'

export default function Genseiryu () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Genseiryū' img={genseiryu} />
            <section className={styles.article__container}>
                <h2 className={styles.article__subtitle}>Karate Gensei Ryu</h2>
                <p></p>
                <h2 className={styles.article__subtitle}>Gensei Ryu Katas</h2>
                <p>La lista de katas de Genseiryu consta de las siguientes: </p>
                <ul>
                    <li>Kihon Gyogi Shiho tsuki</li>
                    <li>Kihon Gyogi Shiho tsuki Keri</li>
                    <li>Kihon Gyogi Shiho tsuki (Kokutso dachi)</li>
                    <li>Kihon Gyogi Shiho tsuki Keri (Kokutso dachi)</li>
                    <li>Kihon Gyogi Shiho Nuki</li>
                    <li>Kihon Gyogi Happo Nuki</li>
                    <li>Taikyoko</li>
                    <li>Heian Shodan</li>
                    <li>Heian Nidan</li>
                    <li>Heian Sandan</li>
                    <li>Heian Yondan</li>
                    <li>Heian Godan</li>
                    <li>Jion</li>
                    <li>Seienchin</li>
                    <li>Bassai Dai</li>
                    <li>Kanku Dai</li>
                    <li>Naihanchi</li>
                    <li>Wankan</li>
                    <li>Shukumine No Bassai Dai</li>
                    <li>Shukumine No Bassai Sho</li>
                    <li>Sansai</li>
                    <li>Rohai</li>
                    <li>Koshokun Dai</li>
                    <li>Koshokun Sho</li>
                    <li>Chinto</li>
                    <li>Bojutso Kihon Kata</li>
                    <li>Nunchaku Kihon Kata</li>
                    <li>Bojutso Kumite Kata</li>
                    <li>Nunchaku Kumite Kata</li>
                </ul>
            </section>
        </main>
    )
}
import styles from '../../components/peleador.module.css'
import lidia from '@/assets/peleadores/lidia-rodriguez.jpg'
import ArticlesHero from '@/components/ArticlesHero'

export default function Lidia () {
    return(
        <main className={styles.peleador}>
            <ArticlesHero title='Lidia Rodriguez Encabo' img={lidia} />
            <section className={styles.peleador__article}>
                <p className={styles.peleador__article__text}>Lidia Rodríguez Encabo es una karateca española que compite en la modalidad de <b>Kata</b>. Nacida el 23 de abril de 1997 en la ciudad española de Madrid, Alcalá de Henares, compite en la selección española absoluta desde enero de 2018, donde se proclamó subcampeona del mundo y de Europa por equipos, y campeona de la Copa Iberoamericana a título individual. </p>
                <p className={styles.peleador__article__text}>En dicha ocasión, la que la hizo merecedora de la medalla de plata, compitió en el Campeonato del Mundo celebrado en Dubai, donde compartió equipo con sus compatriotas <b>María López</b> y <b>Raquel Roy</b>. Luego de ganar la medalla de plata fue felicitada por el alcalde de Alcalá de Henares, quien dijo &quot;Quiero felicitar a una de nuestras grandes deportistas de Alcalá de Henares, es un orgullo para la ciudad contar con una karateca como Lidia Rodríguez Encabo, que ya tuvo el honor y reconocimiento de toda una ciudad al ser pregonera de las Ferias 2019 y que sin duda es una de las grandes embajadoras de Alcalá de Henares allá donde compite&quot;.</p>
                <p className={styles.peleador__article__text}>Por su parte, el concejal de Deportes de la ciudad, también quiso expresarse y destacó que &quot;Lidia Rodríguez Encabo es ya un referente del karate internacional, con un palmarés envidiable y dos oros en Campeonatos del Mundo senior y un oro en Campeonato del Mundo sub&apos;21 que auguran sin duda un gran presente pero también un gran futuro &quot;</p>
                <p className={styles.peleador__article__text}>Este logro conseguido con su selección precede a lo conseguido por Lidia en 2017 y 2018, al haberse proclamado campeona del mundo sub-21 en el Campeonato Mundial de Karate que se celebró en Santa Cruz de Tenerife. Además fue campeona de Europa en el torneo celebrado en Bulgaria y había sido campeona de España y de Madrid.</p>
                <p className={styles.peleador__article__text}>Su campeonato mundial sub-21 además, fue histórico, dado que en aquella edición, celebrada en Rusia en el año 2018, Lidia Rodríguez Encabo se convirtió en la primer karateca no asiática en conseguir subir al primer cajón del pódium en un mundial sub-21.</p>
                <p className={styles.peleador__article__text}>Su última participación en un campeonato de categorías inferiores, fue en el Campeonato de Europa de 2018, que se celebró el mes de febero de ese año en Sochi, Rusia. En aquella edición, tal como lo había hecho en 2017, Lidia Rodríguez logró el oro en kata, luego de enfrentar y derrotar a la italiana <b>Carola Casale</b> y tras imponerse a la luchadora finlandesa <b>Bess Manty</b> y a la peleadora rusa <b>Anastasia Rumiantceva</b>. De esta forma, concluyó su etapa en estas categorías, siendo incluso considerada como la mejor karateca sub21 de todos los tiempos a nivel mundial, según el &quot;All Time Ranking&quot; de la Federación Mundial Karate.</p>
                <p className={styles.peleador__article__text}>Anteriormente, Lidia Rodríguez Encabo ya había ganado otras competencias mundiales en categorías inferiores, se había hecho de la medalla de oro en el mundial de 2013 y en el campeonato europeo en 2015.</p>
                <p className={styles.peleador__article__text}>Lidia, cuenta que comenzó a interesarse en las artes marciales, y en especial en el karate desde muy pequeña, tan sólo a la edad de 5 años ya había comenzado a entrenar, y aunque probó con otros deportes, se terminó decantando por el karate. Desde entonces ya tenía claro que quería ser karateca. En una entrevista para la Universidad de Cardenal Cisneros, donde estudiaba, contó cuál era su relación con el karate que tanto la apasiona &quot;Me completa, es mi vía de escape, gracias al karate, a día de hoy, soy la persona que soy. La disciplina que aporta, el saber estar, la superación de uno mismo, la lucha por los objetivos… Son muchas cosas positivas que hacen que después de 14 años siga por este gran camino y entrenar muy duro para conseguir sus objetivos&quot;</p>
            </section>
        </main>
    )
}
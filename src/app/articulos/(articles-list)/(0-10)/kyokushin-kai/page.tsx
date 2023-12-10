import ArticlesHero from '@/components/ArticlesHero'
import kyokushin  from '@/assets/articles-preview/kyokushin.jpg'
import styles from '../../../article.module.css'
import Link from 'next/link'

export default function Kyokushin () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Kyokushin Kai' img={kyokushin} />
            <section className={styles.article__container}>
                <p>El Kyokushinkai es un estilo de karate fundado por el maestro de artes marciales coreano <Link href='/peleadores/masutatsu-oyama'>Masutatsu Oyama</Link> en 1953. Creado con el objetivo de ser eficaz en un combate real, con una filosofía basada en la mejora personal mediante el control de la mente y el cuerpo, destacando por sus intensos regímenes de entrenamiento, dureza y disciplina. Es un estilo de un alto grado de contacto, especializado en los golpeos, las patadas, los rodillazos y codazos, donde se busca el KO y en donde se compite con protecciones en la zona inguinal, siendo la protección bucal opcional. Actualmente, es uno de los estilos de <Link href='/articulos/karate-do'>Karate-do</Link> más practicados a nivel internacional, contando con más de 40 millones de practicantes.</p>
                <p>Este estilo de karate ha ganado popularidad de la mano de muchos karatekas, incluído entre ellos su propio fundador, el maestro Masutatsu Oyama. Entre los que destacan:</p>
                <ul>
                    <li>Jon Bluming</li>
                    <li>Andy Hug</li>
                    <li>Bas Rutten</li>
                    <li>Dolph Lundgren</li>
                    <li>Michael Jai White</li>
                    <li>Hiroyuki Sanada</li>
                    <li>Glaube Feitosa</li>
                    <li>Francisco Filho</li>
                    <li>Sean Connery</li>
                    <li>Mariusz Pudzianowski</li>
                    <li>Roberto López</li>
                </ul>
                <p>Su creación tuvo lugar en junio 1964 por el maestro coreano de artes marciales <b>Masutatsu Oyama</b>, quien creó su Sede Mundial adoptando el nombre Kyokushinkai, que traducido significa algo así como &quot;Escuela de la más alta verdad&quot; (Kyoku: lo más alto; Shin: Verdad o Realidad). Desde entonces, continuó esparciendose por más de 120 países, convirtiéndose en una de las organizaciones de Artes Marciales más grandes de Japón y alrededor del mundo.</p>
                <p>Oyama se inspiró en varias de las artes marciales y deportes de combate que él mismo practicó, como lo son los estilos de karate <Link href='/articulos/karate-shokotan'>Shokotan</Link>, <Link href='/articulos/gojoryu'>Gojo Ryu</Link>, el boxeo occidental, la lucha japonesa o judo, y el Muay Thai. El karate Kyokushinkai se lucha a corta distancia, sin protecciones, dando los golpes con mucha fuerza, buscando el KO del oponente.</p>
                <p>En este estilo, los golpes se dan con mucha potencia. Siguiendo la filosofía del karate clásico de Okinawa: &quot;Un golpe, una victoria&quot;, que sigue vigente para los alumnos del maestro Oyama, que en vida dijo: &quot;1000 días de entrenamiento para ser un principiante, y 10000 días de entrenamiento para ser un maestro&quot;.</p>
                <p>Hoy en día, quien continúa con el legado del maestro Oyama, es quien supo ser su discípulo, el maestro Akiyoshi. Quién además es quien está a cargo de la organización IKO (Iternational Karate Organisation). También tiene en sus manos el control a nivel mundial de esta disciplina.</p>
                <h2 className={styles.article__subtitle}>Katas de Kyokushin</h2>
                <p>Como en todos los estilos de karate, el Kyokushin basa su metódología en la enseñanza de: la técnica (kihon), el combate (kumite), y la forma (kata). Adoptando algunos katas de otras disciplinas y estilos, y desarrollando katas propias.</p>
                <h3 className={styles.article__subtitle}>Katas norteños</h3>
                <p>Los katas norteños que utiliza este estilo constan de:</p>
                <ul>
                    <li>Taikyoku sono ichi ura</li>
                    <li>Taikyoku sono ni ura</li>
                    <li>Taikyoku sono san ura</li>
                    <li>Pinan sono ichi</li>
                    <li>Pinan sono ni</li>
                    <li>Pinan sono san</li>
                    <li>Pinan sono yon</li>
                    <li>Pinan Sono Go</li>
                    <li>Pinan sono ichi ura</li>
                    <li>Pinan sono ni ura</li>
                    <li>Pinan sono san ura</li>
                    <li>Pinan sono yon ura</li>
                    <li>Pinan sono go ura</li>
                    <li>Naihanchi, o (teki sono ichi, teki sano ni, y teki sono san) practicados solo en algunas organizaciones.</li>
                    <li>Passai, o (Bassai Dai) practicado solo en algunas organizaciones.</li>
                    <li>Kanku, o (Kanku Dai).</li>
                    <li>Sushiho, o (Gojūshiho) practicado solo en algunas organizaciones</li>
                </ul>
                <h3 className={styles.article__subtitle}>Katas Sureños</h3>
                <p>Los katas sureños que utiliza este estilo constan de:</p>
                <ul>
                    <li>Gekisai Dai</li>
                    <li>Gekisai Sho</li>
                    <li>Sanchin</li>
                    <li>Tsuki no kata (creada por el maestro de kárate Goju Ryu variante seigokan, Seigo Tada)</li>
                    <li>Tensho</li>
                    <li>Saifa</li>
                    <li>Seienchin</li>
                    <li>Seipai</li>
                    <li>Yantsu</li>
                </ul>
                <h3 className={styles.article__subtitle}>Katas Propios</h3>
                <p>Tras la muerte del maestro Oyama, se fueron originando otros katas, únicos en el estilo: </p>
                <ul>
                    <li>Sokugi taikyoku sono ichi</li>
                    <li>Sokugi taikyoku sono ni</li>
                    <li>Sokugi taikyoku sono san</li>
                    <li>Garyu</li>
                </ul>
            </section>
        </main>
    )
}
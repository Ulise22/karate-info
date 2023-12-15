import ArticlesHero from '@/components/ArticlesHero'
import gojuryu from '@/assets/articles-preview/gojuryu.jpg'
import styles from '@/app/articulos/article.module.css'

export default function Gojuryu () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Goju Ryu' img={gojuryu} />
            <section className={styles.article__container}>
                <p>El Goju-Ryu es un estilo de karate fundado por el maestro <b>Chojun Miyagi</b> y es uno de los 3 estilos principales de Karate de Okinawa. Su nombre se registró oficialmente en el año 1933 en la Dai Nippon Butokukai (la Asociación Nacional de Artes Marciales Japonesas). Y su nombre se comprende de las palabras <b>go</b>(duro), <b>ju</b>(suave) y <b>ryu</b> (estilo/escuela/fuente), haciendo que su significado sea algo como &quot;Estilo de lo duro y lo suave&quot;.</p>
                <p>Respecto a la elección del nombre, Miyagi explica que quería enfatizar que su estilos integraba tanto lo &quot;duro&quot; como lo &quot;suave&quot;, dado que no solo se aplica al karate, sino que también a la vida en general: &quot;sólo la dureza o sólo la suavidad no le permitirán a una persona afrontar eficazmente las fluctuaciones de la vida. Al bloquear, el cuerpo está blando e inhalando; al golpear, el cuerpo está «duro y exhalando»&quot;. Una vez que se comienza a entender este armónico balance, es entonces cuando se comienza a entender y aprender la esencia del Goju-Ryu.</p>
                <p>El Goju-Ryu es un sistema de defensa basado en un conjunto de técnicas duras de tipo lineal con movimientos circulares más suaves, siendo esta ultima una de las principales características de este estilo, los movimientos circulares que sirven especialmente para bloquear, dado que no solo desvían y absorben la energía de un oponente, sino que sirven para contraer el cuerpo como un resorte para luego desatar un contrataque explosivo. </p>
                <h2 className={styles.article__subtitle}>Goju-Ryu Historia</h2>
                <p>El maestro <b>Kanryo Higanonna</b> a mediados del siglo XIX viajó a China donde fue entrenado por el maestro Ryuryu Ko, de quien fue su mejor alumno. Estuvo 15 años allí hasta que volvió a Okinawa doned enseñó Kung Fu.</p>
                <p>El alumno más avanzado del maestro Higanonna fue Chojun Miyagi, quien se dedicó a profundizar en el Naha-Te, concentrándose en la combinación de los sistemas duros - suaves y externos - internos. Los estilos suaves (internos) se basan en los movimientos circulares y el desarrollo del Ki, mientras que los externos son principios duros concentrados en la fuerza física. El maestro Muyagui trabajó en la consolidación del estilo, al tiempo que ddesarrolló una metodología de entrenamiento y aprendizaje formal de su karate que le serviría para en 1930 fundar oficialmente su escuela, que no recibiría un nombre oficial hasta 1933.</p>
                <h2 className={styles.article__subtitle}>Goju-Ryu Katas</h2>
                <p>En la escuela de karate Goju-Ryu posee tradicionalmente de 12 katas, entre las que se incluye una variante de Shanchi dai-in, las cuales son las siguientes:</p>
                <ul>
                    <li>Sanchin</li>
                    <li>(Sanchin dai ni)</li>
                    <li>Gekisai dai ichi</li>
                    <li>Gekisai dai ni</li>
                    <li>Saifa</li>
                    <li>Seiyunchin/Seienchin/Seionchin</li>
                    <li>Shisoochin</li>
                    <li>Sanseru</li>
                    <li>Seipai</li>
                    <li>Kururunfa</li>
                    <li>Seisan</li>
                    <li>Suparimpei</li>
                    <li>Tensho</li>
                </ul>
                <p>Además de estos katas tradicionales, existen otros katas practicadas en algunas escuelas dde Goju-Ryu que inicialmente no estaban incluidos. Estos fueron creados o adaptados de otros estilos de karate por alumnos y maestros como complementos a la enseñanza. Algunos de estos katas son los siguientes:</p>
                <ul>
                    <li>Fukyu Kata ichi (traída del karate de Okinawa estilo matsubayashi Shorin Ryu, creada por el maestro Soshin Nagamine)</li>
                    <li>Taikyoku 1-3 (traídas del karate-Do japonés estilo Shotokan, creadas por el maestro Gichin Funakoshi)</li>
                    <li>Gekisai Dai San (creado por Seikichi Toguchi Hanshi para la variante Shoreikan)</li>
                    <li>Geki Ha (creado por Seikichi Toguchi Hanshi para la variante Shoreikan)</li>
                    <li>Tsuki-no-kata (creado por el Gran Maestro Seigo Tada, más tarde adoptado por el maestro Masutatsu / Masutatsu Ōyama para su estilo el karate Kyokushinkai)</li>
                    <li>Uke-no-kata (&quot;Kata del hombre&quot;, creado por el Gran Maestro Seigo Tada para la variante Seigokan)</li>
                    <li>Gekisai Shodan de Yuishinkan</li>
                    <li>Gekisai Nidan de Yuishinkan</li>
                    <li>Kobo Shodan de Yuishinkan</li>
                    <li>Kobo Nidan de Yuishinkan</li>
                    <li>Kobo Sandan de Yuishinkan</li>
                    <li>Umpo Yodan de Yuishinkan</li>
                    <li>Umpo Shudan de Yuishinkan</li>
                    <li>Umpo Gedan de Yuishinkan</li>
                    <li>Unsu de Yuishinkan</li>
                    <li>Ken Shin Ryu de Ken-Shin-Kan</li>
                </ul>
            </section>
        </main>
    )
}
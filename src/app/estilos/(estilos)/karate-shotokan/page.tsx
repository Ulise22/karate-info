import ArticlesHero from '@/components/ArticlesHero'
import styles from '@/app/articulos/article.module.css'
import shokotan from '@/assets/homepage/articles/shotokan.jpg'
import Link from 'next/link'

export default function Shotokan () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Karate Shotokan' img={shokotan} />
            <section className={styles.article__container}>
                <p>El karate Shotokan es el primer estilo de <Link href='/articulos/karate-do'>Karate-do</Link> japonés, que fue desarrollado en su filosofía por el maestro <b>Gichin Funakoshi</b>, quien hoy en día es considerado el padre del karate moderno, a partir del confucionismo y del código <b>Bushido</b>, que son las normas por las que se regían los guerreros samurái, y desarrollado en cuanto a técnica y táctica por el hijo del maestro Funakoshi, Yoshitaka Funakoshi. Su nombre proviene de la nomenclatura que le pusieron sus alumnos al Dojo Sala que fue fundado en 1936, pero que sin embargo no fue reconocido oficialmente por el gobierno japonés hasta 1939.</p>
                <p>Este estilo nace a partir de la fusión entre las 2 maneras de practicar artes marciales que había en la isla de <Link href='/articulos/okinawa-karate'>Okinawa</Link>, el <Link href='/estilos/shonji-ryu'>Shorin Ryu</Link> y el <b>Shorei Ryu</b> (hoy en día siendo <Link href='/estilos/gojuryu'>Goju Ryu</Link>), que el maestro Funakoshi aprendió de sus maestros <b>Itosu</b> quien era especialista en Shorei, y <b>Azato</b>, que era el especialista en Shorin. Tambiém fue influenciado a mediados del siglo XX en cuanto a su metodología, uniforme, grados, rituales y en varias ténicas por el <b>Kendo</b> (esgrima con sable) y por el <b>Judo</b> (lucha cuerpo a cuerpo), que eran practicadas por varios de sus primeros promotores a nivel mundial.</p>
                <p>El tigre que aparece en el emblema oficial de este estilo, primero hace referencia al monte Tarao, lugar ubicado en el pueblo natal del maestro Funakoshi, y segundo, esta basado en el diseño chino clásico que significa &quot;El tigre nunca duerme&quot;, simbolizando el estado de alerta de tigre listo para la acción y la serenidad pacífica de la mente.</p>
                <p>En cuanto a su ténica, es caracterizado sobre todo por hacer uso de las posiciones bajas durante gran parte de su ejecución, buscando más estabilidad y ganar potencia. Por tanto sirve para ejercitar la zona de las caderas y practicar las contracciones musculares. El Shotokan hace uso de las patadas altas y de los movimientos de larga distancia. Es por esto que solo considera un estilo de karate &quot;más japonés&quot;.</p>
                <h2 className={styles.article__subtitle}>26 Kata Shokotan</h2>
                <p>Los katas con el nombre y su traducción al español utilizados en el estilos de karate Shokotan son: </p>
                <ul>
                    <li><b>Taikyoku Shodan</b>: Gran universo, primer nivel</li>
                    <li><b>Taikyoku Nidan</b>: Gran universo, segundo nive</li>
                    <li><b>Taikyoku Sandan</b>: Gran universo, tercer nivel</li>
                    <li><b>Taikyoku Yondan</b>: Gran universo, cuarto nivel</li>
                    <li><b>Ten No Kata Omote</b>: Kata del cielo, de lo evidente</li>
                    <li><b>Ten No Kata Ura</b>: Kata del cielo, de lo oculto</li>
                    <li><b>Tekki Shodan</b>: Caballo de hierro</li>
                    <li><b>Bassai Dai</b>: Asalto a la fortaleza</li>
                    <li><b>Kankū Dai</b>: Mirada al cielo</li>
                    <li><b>Enpi</b>: Vuelo de Golondrina</li>
                    <li><b>Jion</b>: Kata del Templo 1</li>
                    <li><b>Jitte</b>: Diez manos</li>
                    <li><b>Hangetsu</b>: Media luna</li>
                    <li><b>Tekki Nidan</b>: Caballo de hierro 2</li>
                    <li><b>Bassai Shō</b>: Asalto a la fortaleza menor</li>
                    <li><b>Kankū Shō</b>: Mirada al cielo menor</li>
                    <li><b>Gankaku</b>: Grulla sobre la Roca</li>
                    <li><b>Sōchin</b>: Fuerza Tranquila</li>
                    <li><b>Tekki Sandan</b>: Caballo de hierro 3</li>
                    <li><b>Chinte</b>: Mano preciosa, extraña</li>
                    <li><b>Jiin</b>: Kata del templo 3</li>
                    <li><b>Nijūshiho</b>: 24 pasos</li>
                    <li><b>Meikyō</b>: Rohai</li>
                    <li><b>Unsu</b>: Manos sobre las nubes</li>
                    <li><b>Wankan</b>: Corona del Rey</li>
                    <li><b>Gojūshiho Dai</b>: 54 pasos mayor</li>
                    <li><b>Gojushiho Sho</b>: 54 pasos menor</li>
                </ul>
                <p>Además de estos katas que van de básicos a avanzados, el karate shotokan también contiene el kata <b>Morobanotsurugi</b>, que es un kata no oficial pero que se practica en varias escuelas de este estilo, y cuyo nombre significa &quot;Espada de doble filo&quot;, haciendo referencia a las muchas formas que adopta la mano a lo largo del kata.</p>
                <p>También se cuenta y se enseñan los llamados &quot;katas Heian&quot;, o formas de &quot;paz y tranquilidad&quot;, que son de los primeros en enseñarse, dado que son de los más sencillos de aprender. Se crearon con la intención de contribuir en la educación militar de los niños en Okinawa, durante la expansión del imperio japonés en los inicios del siglo XX. Estos katas son 5 y son los siguientes: </p>
                <ul>
                    <li><b>1. Heian Shodan</b></li>
                    <li><b>2. Heian Nidan</b></li>
                    <li><b>3. Heian Sandan</b></li>
                    <li><b>4. Heian Yondan</b></li>
                    <li><b>5. Heian Godan</b></li>
                </ul>
            </section>
        </main>
    )
}
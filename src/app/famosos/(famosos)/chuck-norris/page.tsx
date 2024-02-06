import styles from '@/app/famosos/famoso.module.css'
import chuck from '@/assets/famosos/hero/chuck__hero.jpg'
import ArticlesHero from '@/components/ArticlesHero'
import Link from 'next/link'

export default function ChuckNorris () {
    return(
        <main className={styles.famoso}>
            <ArticlesHero title='Chuck Norris' img={chuck} />
            <section className={styles.famoso__article}>
                <p>Chuck Norris es uno de los actores más emblemáticos del cine de acción en Estados Unidos, paricipando en más de 30 películas y en más de una decena de programas de televisión, fue un militar que sirvió para las fuerzas aeras en San Antonio, Texas, <b>llegó a ser campeón mundial de <Link href='/articulos/karate-do'>Karate-do</Link></b> en 1968, y es el fundador de una asociación de su propio arte marcial. Además de saber karate, Chuck Norris tiene conocimientos en Judo, Taekwondo, Tangsudo, Jiu-jitsu brasileño y boxeo, artes marciales que ha practicado a lo largo de su vida.</p>
                <p>Carlos Ray Norris nació el 10 de marzo de 1940 en Ryan, Oklahoma. Es hijo de Ray Norris y de Wilma Scarberry, tiene dos hermanos más jovenes, Wielan, que falleció en Vietnam, y Aaron que actualmente es productor de Hollywood. Se unió a la Fuerza Aérea de los Estados Unidos cuando cumplió los 18 años, y fue enviado a Base Aérea Osan ubicada en Corea del Sur, lugar donde comenzaría a entrenar artes marciales como el Taekwondo o el Judo y donde le terminarían apodando &quot;Chuck&quot;, apodo que le quedaría durante toda su vida. </p>
                <p>Al volver a los Estados Unidos comenzaría a entrenar Boxeo y Karate, ganando varias competiciones. Toda su práctica en las artes marciales, le servirían en el futuro para hacer uso de ellas y demostrar sus habilidades en los filmes que protagonizaría, casi siempre siendo el héroe de estas historias. </p>
                <h2 className={styles.famoso__article__subtitle}>Chuck Norris Películas</h2>
                <p>Entre la basta filmografía que compone la carrera de Chuck Norris, aquí esta el listado de películas en las que apareció con el año de lanzamiento y nombre orignal: </p>
                <ul>
                    <li>(1968)  The Wrecking Crew</li>
                    <li>(1972)	The Way of the Dragon</li>
                    <li>(1973)	The Student Teachers</li>
                    <li>(1974)	Yellow Faced Tiger</li>
                    <li>(1977)	Breaker! Breaker!</li>
                    <li>(1978)	Good Guys Wear Black</li>
                    <li>(1979)	A Force of One</li>
                    <li>(1980)	The Octagon</li>
                    <li>(1981)	An Eye for an Eye</li>
                    <li>(1982)	Silent Rage</li>
                    <li>(1982)	Forced Vengeance</li>
                    <li>(1983)	Lone Wolf McQuade</li>
                    <li>(1984)	Missing in Action</li>
                    <li>(1985)	Missing in Action 2: The Beginning</li>
                    <li>(1985)	Code of Silence</li>
                    <li>(1985)	Invasion U.S.A.</li>
                    <li>(1986)	The Delta Force</li>
                    <li>(1986)	Firewalker</li>
                    <li>(1988)	Braddock: Missing in Action III</li>
                    <li>(1988)	Hero and the Terror</li>
                    <li>(1990)	Delta Force 2: The Colombian Connection</li>
                    <li>(1991)	The Hitman</li>
                    <li>(1992)	Sidekicks</li>
                    <li>(1994)	Hellbound</li>
                    <li>(1995)	Top Dog</li>
                    <li>(1996)	Forest Warrior</li>
                    <li>(2003)	Bells of Innocence</li>
                    <li>(2004)	Dodgeball: A True Underdog Story</li>
                    <li>(2004)	Birdie & Bogey</li>
                    <li>(2005)	The Cutter</li>
                    <li>(2012)	The Expendables 2</li>
                </ul>
                <h2 className={styles.famoso__article__subtitle}>Chuck Norris Karate</h2>
                <p>Chuck fue un militar que formó parte de las Fuerzas Aéreas de los Estados Unidos, allí lo mandaron a una base de Corea del Sur, donde aprendió Taekwondo, Judo y Tang Soo do. En su vuelta a los Estados Unidos, aprendió Boxeo y Karate, arte marcial que perfeccionó al punto de comvertirse en campeón mundial en 1968, defendiendo exitosamente su título durante 6 años consecutivos.</p>
                <p>Su gran debut en el mundo del karate fue en Salt Lake City, en el año 1964. En esa competición ganó sus dos primeros combates. En el mismo año compitió en los Internacionales de Long Beach y se impuso en el All Stars Tournament donde venció a Ron Marchini. En esos momentos, es donde popularizó su &quot;golpe estrella&quot;: el giro con patada.</p>
                <p>La experiencia que adquirió no sólo mediante el karate, sino también con el resto de artes marciales que aprendió, se pusieron en práctica cuando decidió crear su propio arte marcial llamado <b>Chun Kuk Do</b>, que como la mayoría de las artes marciales tradicionales, tiene su propio código de honor, el cual consta de las siguientes reglas: </p>
                <ul>
                    <li>1. Desarrollaré mi potencial al máximo posible en todas las perspectivas de mi vida.</li>
                    <li>2. Olvidaré los errores del pasado y me concentraré en los grandes triunfos del presente.</li>
                    <li>3. Me mantendré siempre en un pensamiento positivo y trataré de transmitir este a todas las personas que conozca.</li>
                    <li>4. Trataré continuamente de desarrollar el amor, la alegría y la lealtad en mi familia y comprenderé que ningún otro logro puede compensar los fallos en el hogar.</li>
                    <li>5. Buscaré lo mejor de todas las personas y les haré sentir que valen la pena.</li>
                    <li>6. Si no tengo nada bueno que decir sobre una persona, no diré nada.</li>
                    <li>7. Emplearé tanto tiempo en mejorar mi persona que no tendré tiempo de criticar a los demás.</li>
                    <li>8. Seré siempre tan entusiasta con los logros de otras personas como con los míos propios.</li>
                    <li>9. Mantendré una actitud de tolerancia hacia las personas que tienen un punto de vista diferente del mío, mientras me mantengo firme respecto a lo que personalmente creo verdadero y honesto.</li>
                    <li>10. Mantendré respeto hacia las autoridades y lo demostraré todo el tiempo.</li>
                    <li>11. Me mantendré siempre leal a Dios, mi país, mi familia y a mis amigos.</li>
                    <li>12. Me mantendré siempre altamente orientado durante toda mi vida con una actitud positiva a ayudar a mi familia, mi país y mi persona.</li>
                </ul>
                <h2 className={styles.famoso__article__subtitle}>Chuck Norris vs Bruce Lee</h2>
                <p>Luego de que Chuk Norris se proclamara campeón mundial karate, se ganó el respeto de uno de los más grandes artistas marciales <b><Link href='/famosos/bruce-lee'>Bruce Lee</Link></b>. Por esto, en 1972, Bruce Lee le propuso conformar una secuencia de lucha juntos, que se vió reflejada en la película <b>The Way of the Dragon</b> y el resultado fue un exito tremendo, tanto que aún hoy en día es recordada esa película, especialmente, por la extensa escena de pelea de estas 2 leyendas del cine y de las artes marciales.</p>
                <p>En una entrevista Chuck contó como uno de los requísitos para filmar esta escena era que efectivamente, fuera Bruce Lee el que ganara el combate, la forma en que Norris lo relató fue la siguiente: Lee dijo: &quot;Quiero hacer una película con una escena de lucha que todo el mundo recuerde. Así que, ¿podrías venir y hacer la escena de lucha conmigo?&quot;. Norris contestó: &quot;¿Tengo que perder?&quot; y Lee respondió: &quot;¡Sí! tienes que perder&quot;.</p>
                <iframe className={styles.famoso__article__video} width="560" height="315" src="https://www.youtube.com/embed/f-q5FLtlUOI?si=Yh7DzFGV1YLYOT4H" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <h2 className={styles.famoso__article__subtitle}>Chuck Norris Frases</h2>
                <p>Respecto a Chuck Norris, existe un meme en internet que hace referencia lo exageradamente duro que demuestra ser Chuck Norris en sus películas, llegando a puntos absurdos. Dichos memes tuvieron su origen gracias a la parodia que hacía el comediante <b>Conan O&apos;Brien</b> sobre la serie protagonizada por Norris, <b>Walker Texas Ranger</b>, haciendo chistes sobre la inmortalidad y los supuestos poderes de Chuck Norris. Aquí una lista de algunas frases o como se las conocen en Estados Unidos, &quot;Chuck Norris Facts&quot;: </p>
                <ul>
                    <li>En una ocasión la muerte tuvo una experiencia cercana a Chuck Norris</li>
                    <li>Chuck Norris no duerme. Espera</li>
                    <li>Chuck Norris murió hace 10 años. Solo que la muerte no ha tenido el valor de decírselo</li>
                    <li>Si Chuck Norris llega tarde, más le vale al tiempo ir despacio</li>
                    <li>Chuck Norris dona sangre frecuentemente a la Cruz Roja. Solo que nunca es la suya</li>
                    <li>Chuck Norris puede dividir entre cero</li>
                    <li>Un eclipse de sol es sencillamente que Chuck Norris no encuentra sus gafas de sol</li>
                    <li>Chuck Norris es capaz de ganar al ajedrez jugando con las negras y solo con el rey</li>
                    <li>Cuando Chuck Norris pela una cebolla es la cebolla la que llora</li>
                    <li>Antes de que naciera Chuck Norris, el Mar Muerto vivía</li>
                    <li>Chuck Norris no lee libros. Los mira fijamente hasta que le dan la información que necesita.</li>
                    <li>Chuck Norris contó hasta el infinito. Dos veces.</li>
                    <li>Cuando Chuck Norris levanta pesas, las pesas se vuelven más fuertes.</li>
                </ul>
            </section>
        </main>
    )
}
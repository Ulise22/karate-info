import ArticlesHero from '@/components/ArticlesHero'
import styles from '@/app/articulos/article.module.css'
import shorinji from '@/assets/articles-big/shorinji.jpg'
import Link from 'next/link'

export default function Shorinji () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Shorinji Ryu' img={shorinji} />
            <section className={styles.article__container}>
                <p>El Shorinji Ryu es uno de los estilos más antiguos del karate de okinawa, y se lo considera como uno de los predecesores del karate actual. Su nombre tiene varios significados, pero todos hacen referencia al famoso templo chino de Shaolin, que se destaca por el sistema de lucha de los monjes que lo habitan practicaban.</p>
                <p>Quien fue el creador de este estilo es el Maestro <b>Sokon Matsumara</b>, sin embargo quien se encargó de sistematizarlo fue su discípulo, el Maestro <b>Yasutsune Itosu</b>, que dividió el estilos en 4 variantes: </p>
                <ul>
                    <li>Matsumura Seito Shorin Ryu, o estilo ortodoxo fundado por el maestro Hohan Sōken, nieto de Sokon Matsumura.</li>
                    <li>Shobayashi, Shorin Ryu del maestro Eizo Shimabukuro.</li>
                    <li>Matsubayashi, Shorin Ryu del maestro Shōshin Nagamine, (siendo esta la rama más influenciada a la vez por el maestro Chotoku Kyan, y el Tomari-te).</li>
                    <li>kobayashi, Shorin Ryu del maestro Chibana Choshin.</li>
                </ul>
                <p>En la actualidad hay numerosas escuelas fundadas en <Link href='/articulos/okinawa-karate'>Okinawa</Link> por varios de los alumnos de estos maestros y sus discípulos, cuyas bases son estas variantes Shorinji Ryu.</p>
                <p>Se cree que el Shorinji Ryu es uno de los artes marciales predecesores del karate, en parte, porque cuando uno de sus creadores, el mencionado Yasutsune Itosu, fue contemporáneo del momento en que las escuelas de la prefectura de Okinawa, adoptaban el arte nativo &quot;to-de/uide/Te&quot; como parte del programa de eduación física militar, en 1903., el Maestro Itosu cambió la pronunciación de ese término, dandolé el nombre de Karate, que recíen en 1922 se lo reconocería como un arte marcial por la organicación estatal japonesa <b>Dai Nihon Butokukai</b>.</p>
                <p>Lo que caracteriza al Shorinji Ryu como estilo de karate es el hincapié que se hace en la velocidad (Hayaku), la respiración (Kokyu) y la movilidad natural (Kirei), la continua protección del cuerpo (Mi o marmoru), la creación ded poder generada por el correcto movimiento de la cadera (Koshi), la contracción temporal fija de los músculos del torso y la rotación ded la cadera (Gamaku), los desplazamientos y las posiciones naturales (Tenshin), los bloqueos en ángulos y la penetración en el espacio del adversario (Irikumi).</p>
                <p>En cuanto lo que suele ser una clase de Shorinji Ryu normalmente, suele variar en función de los objetivos que uno tenga y del enfoque que tenga el dojo en el que se entrene, ya sea priorizando la defensa personal o el combate deportivo. Pero en sintesis consta de: El ritual de saludo al maestro, al instructor y a los compañeros. Seguido de media hora calentamiento, donde se hace hincapié en la rotación articular y en la elevación de la temperatura corporal. Durante la clase se entrenan movimiento básicos, katas, y practica de combate. Finalmente se termina realizando entrenamientos de condición física, con ejercicios de autocarga, buscando la resistencia y fuerza tanto del tronco, como de los brazos y manos, además de sumar ejercicios para la flexibilidad. También durante los entrenamientos se busca enfatizar en los ejercicios <b>Kakie</b>, en el testeo del cuerpo, y en el endurecimiento dde <b>Shimegata</b> y <b>Kitaegata</b>.</p>
                <p>A diferencia de otros estilos, en el Shorinji Ryu se hace un mayor enfásis en los movimientos naturales del cuerpo, con entrenamientos de defensa personal basados en el combate a media y corta distancia, y en el uso de golpes a puntos vitales. Otra cosa que lo diferencia de otros estilos, es que complemente con el entrenamiento en pararelo con armas tradicionales, o el arte marcial <Link href='/estilos/karate-kobudo'>Kobudo</Link>, practicando con el bastón largo, con la daga tridente, con hoces, o con los conocidos nunchakus.</p>
                <h2 className={styles.article__subtitle}>Posiciones de Karate Shorin Ryu</h2>
                <p>Además se cuenta con ciertas posiciones que son naturales para facilitar los desplazamientos, la movilidad y la protección del cuerpo, las posiciones más caraterísticas son: </p>
                <ul>
                    <li>HEIKO-DACHI</li>
                    <li>ZENKUTSU-DACHI</li>
                    <li>SHIKO-DACHI</li>
                    <li>UKE-ASHI-DACHI</li>
                    <li>NEKO-ASHI-DACHI</li>
                    <li>NAIFUANCHI-DACHI</li>
                    <li>SHIZEN-DACHI</li>
                </ul>
                <h2 className={styles.article__subtitle}>Shorin Ryu Katas</h2>
                <p>Las katas utilizadas en el estilos Shorin Ryu de karate son: </p>
                <ul>
                    <li><b>Fukyugata Dai Ichi</b></li>
                    <li><b>Ananko</b></li>
                    <li><b>Fukyugata Dai Ni</b></li>
                    <li><b>Wankan</b></li>
                    <li><b>Pinan (5)</b></li>
                    <li><b>Wanshu</b></li>
                    <li><b>Naifuanchi (3)</b></li>
                    <li><b>Unsu</b></li>
                    <li><b>Passai Sho</b></li>
                    <li><b>Chint</b></li>
                    <li><b>Kushanku Sho</b></li>
                    <li><b>Shochin</b></li>
                    <li><b>Chintou</b></li>
                    <li><b>Seisan</b></li>
                    <li><b>Jion</b></li>
                    <li><b>Useishin</b></li>
                    <li><b>Jiin</b></li>
                    <li><b>Kushanku Dai</b></li>
                    <li><b>Jitte</b></li>
                    <li><b>Rohai</b></li>
                    <li><b>Passai Dai</b></li>
                </ul>
            </section>
        </main>
    )
}
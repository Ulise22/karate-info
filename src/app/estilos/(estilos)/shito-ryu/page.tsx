import ArticlesHero from '@/components/ArticlesHero'
import shitoRyu from '@/assets/articles-big/shito_ryu (2).jpg'
import styles from '@/app/articulos/article.module.css'
import Link from 'next/link'

export default function ShitoRyu () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Shitō-ryū' img={shitoRyu} />
            <section className={styles.article__container}>
                <h2 className={styles.article__subtitle}>Karate Shito Ryu</h2>
                <p>El Shitō-ryū es un estilo de karate fundado en 1931 por el maestro <b>Kenwa Mabuni</b>. Este estilos es uno de los 4  más importantes del <Link href='/articulos/karate-do'>Karate-Do</Link> en la actualidad, junto con el <Link href='/estilos/karate-shotokan'>Shotokan</Link>, el <Link href='/estilos/gojuryu'>Goju Ryu</Link> y el <b>Wado Ryu</b>.</p>
                <p>Su creador, Kenwa Mabuni nació en Okinawa el 14 de noviembre de 1889, y quien había comenzado a entrenar el arte del <b>Shuri-Te</b> a la edad de 13 años, de la mano del legendario <b>Yasutsune Itosu</b>.</p>
                <p>Luego, comenzaría a aprender el <b>Naha-Te</b>, de la mano de Kanryo Higanoa, quien le había sido presentado por su amigo <b>Chojun Miyagi</b> (fundador del karate <Link href='/estilos/gojuryu'>Goju-ryu</Link>). Gracias a este aprendizaje es que Mabuni supo fusionar las 2 grandes corrientes marciales del karate de Okinawa, tanto el Shuri-Te como el Naha-Te, dando nacimiento al Shito-ryu actual.</p>
                <p>En 1929, Mabuni se mudaría a la ciudad de Osaka donde, con la ayuda de su discípulo Ryusho Sakagami, fundaría varios dojos a lo largo de la ciudad y se dedicaría de lleno a enseñar su estilo, que originalmente se llamaría <b>Hanko-ryu</b> hasta mutar al hoy llamado Shito-ryu. Aún a día de hoy, gran parte de la enseñanza de este estilo de karate se encuentra concentrado en la ciudad de Osaka.</p>
                <p>El emblema de Shito-Ryu es el escudo de la familia MABUNI. El círculo se puede interpretar como el símbolo de la paz y la armonía (Wa). Las líneas horizontales y verticales representan la caligrafía de la palabra &quot;ser humano&quot;. El emblema simboliza entonces: &quot;seres humanos en paz y armonía&quot;.</p>
                <p>Este estilo es una combinación de lo que Mabuni aprendió de sus 2 maestros, Yasutsune Itosu y Kanryo Higaonna. Dado esto, por una parte tiene la fuerza física y posturas largamente poderosas derivadas del Shuri-te, y por otro lado cuenta con movimientos circulares y movimientos en ocho direcciones, poder de aliento, características fuertes y suaves del Naha-te y del Tomari-te. Esto da lugar a que en el Shito-ryu existan katas del Shuri-te, del Naha-te y del Tomari-te.</p>
                <h2 className={styles.article__subtitle}>Katas de shito Ryu</h2>
                <p>Los katas del Shitō-ryū son alrededor de 64, y se organizan en función del maestro o del origen del mismo. El nivel en que se practica cada uno de ellos depende del Dojo y la federación de cada país y región. Dichos katas son: </p>
                <h3>Shuri Te</h3>
                <ul>
                    <li>Yuni No Kata</li>
                    <li>Taikyoku Shodan</li>
                    <li>Heian Nidan, Pinan Nidan</li>
                    <li>Heian Sandan, Pinan Sandan</li>
                    <li>Heian Shodan, Pinan Shodan</li>
                    <li>Heian Godan, Pinan Godan</li>
                    <li>Heian Yondan, Pinan Yondan</li>
                    <li>Chintei</li>
                    <li>Bassai Dai, (asalto a la fortaleza)</li>
                    <li>Bassai Sho</li>
                    <li>Chinshu</li>
                    <li>Chinto / Gankaku, (combatiente al este)</li>
                    <li>Gojushiho / Useishi, (el fénix)</li>
                    <li>Ituosu no rohai shodan, (Cisne blanco)</li>
                    <li>Ituosu no rohai nidan</li>
                    <li>Ituosu no rohai sandan</li>
                    <li>Kosokun dai, (mirando al cielo)</li>
                    <li>Kosokun sho</li>
                    <li>Naifanchin shodan, (combatiendo el propio terreno)</li>
                    <li>Naifanchin nidan</li>
                    <li>Naifanchin sandan</li>
                    <li>Wandau</li>
                    <li>Wanshu, (golondrina en vuelo)</li>
                </ul>
                <h3>Naha Te</h3>
                <ul>
                    <li>Gekisai dai ichi, (ataque demoledor)</li>
                    <li>Gekisai dai ni</li>
                    <li>Kururunfa</li>
                    <li>Saifa, (punto de ruptura final)</li>
                    <li>Sanchin, (tres batallas)</li>
                    <li>Sanseryu</li>
                    <li>Seienchin, (tempestad en la calma)</li>
                    <li>Seisan, (media luna)</li>
                    <li>Sepai</li>
                    <li>Shisonchin</li>
                    <li>Suparinpei</li>
                    <li>Tensho, (manos flotantes)</li>
                </ul>
                <h3>Tomari Te</h3>
                <ul>
                    <li>Jiin, (patio del templo)</li>
                    <li>Jion, (sonido del templo)</li>
                    <li>Jitte, (mano del templo)</li>
                    <li>Tomari no Bassai</li>
                    <li>Tomari no Chintzo</li>
                    <li>Tomari no Wanshu</li>
                </ul>
                <h3>Mabuni</h3>
                <ul>
                    <li>Aoyagi, (sauce verde)</li>
                    <li>Jyuroku</li>
                    <li>Matsukaze, (viento entre los pinos)</li>
                    <li>Myojo, (luz de la mañana)</li>
                    <li>Shino Kosokun, (mirando al cielo)</li>
                    <li>Shinsei Ichi, (nueva vida)</li>
                    <li>Shinsei Ni</li>
                    <li>Shinpa, (nueva ruptura)</li>
                </ul>
                <h3>Aragaki</h3>
                <ul>
                    <li>Niseishi</li>
                    <li>Sochin, (robusto y tranquilo)</li>
                    <li>Unsu, (separando nubes)</li>
                </ul>
                <h3>Otros Maestros</h3>
                <ul>
                    <li>Ananko, (luz del sur)</li>
                    <li>Chatanyara no Kusanku</li>
                    <li>Chibana no Kusanku</li>
                    <li>Matsumara no Anan</li>
                    <li>Matsumara no Bassai</li>
                    <li>Matsumara no Sesan</li>
                    <li>Matsumara no Wankan</li>
                    <li>Rohai, (garza blanca)</li>
                    <li>Roppohijate</li>
                    <li>Haffa, (cien pájaros)</li>
                    <li>Kakkaku</li>
                    <li>Nipaipo</li>
                    <li>Papporen</li>
                    <li>Anan</li>
                    <li>Heiku, (tigre negro)</li>
                    <li>Pachu, (mover una bola)</li>
                    <li>Paiku, (tigre blanco)</li>
                </ul>
            </section>
        </main>
    )
}
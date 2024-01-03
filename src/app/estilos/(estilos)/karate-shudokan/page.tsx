import ArticlesHero from '@/components/ArticlesHero'
import shudokan from '@/assets/articles-big/shudokan (2).jpg'
import styles from '@/app/articulos/article.module.css'
import Link from 'next/link'

export default function Kyokushin () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Karate Shudokan' img={shudokan} />
            <section className={styles.article__container}>
                <h2>Shudokan Karate do</h2>
                <p>El Shudokan es una escuela de karate fundada por el maestro <b>Kanken Toyama</b> en 1932. Toyama venía entrenando desde los 9 años con el maestro <b>Itashiki</b> en Okinawa hasta que cumplió los 18 años, cuando comenzó a entrenarse con el reconocido maestro <b>Yasutsune Itosu</b>, quien fue su maestro hasta el día de su fallecimiento en 1915.</p>
                <p>En 1907 fue nombrado <b>Shihan dai</b>, siendo el único junto a su contemporáneo <b>Gichin Funakoshi</b> en recibir este título.</p>
                <p>En 1924 Toyama se mudó a Taiwán, donde se convirtió en maestro de una escuela primaria. Allí aprendió el He-quan, de la mano de los maestros Cheng Tong-tai y Lim Tung-tong. Estuvo en aquel país hasta 1930 cuando regresó a Japón a dar clases en universidades, y a abrir su primer <Link href='/articulos/dojo-kun'>Dojo</Link> al que nombró <b>Shu-do-kan</b> (lugar para aprender el camino). Aunque ya en ese entonces Toyama quería crear su propio estilo, se dedicó a enseñar una combinación de Shuri-te, Naha-te, Tomari-te y la He-quan. Sobre este intento de desarrollar su propio estilo, el maestro Toyama terminó diciendo: &quot;Un nombre no es más que un nombre, los estilos de kárate son básicamente los mismos, independientemente de los nombres por los que se les conoce&quot;.</p>
                <p>Es por esto él no veía al Shudokan como un estilo diferente de karate, sino como un lugar para entrenar e investigar, debido a esto no nombró a ningún sucesor tras su muerte en 1966. Esto dió lugar a que posteriormente la organización que fundó se terminara fragmentando, aunque uno de sus estudiantes mantuvo el nombre Shu Do Kan.</p>
                <p>En 1946, el maestro Kanken Toyama fundó la <b>Federación de Karatede todo el Japón</b>, en inglés <b>All Japan Karate-Do Federation</b> (AJKF), con el objetivo de unificar todos los estilos del karate de Okinawa y Japón. Con esto buscaba crear un espacio para compartir ideas y ténicas de todos los estilos posibles. </p>
                <p>El modelo de aprendizaje de este estilo se basa en los fundamentos de los Katas, de las secuencias de combate preestablecidas y del combate en grupos. Siendo los katas una secuencia de movimientos entrelazados. Las secuencias de combate preestablecidas, desarrollandosé desde posiciones fijas, donde ya se sabe como va a atacar el oponente, así también como la defensa que va realizar. Y los combates en grupos, se dan fomentando la participación en campeonatos tipo semicontacto a puntos, donde se pueden aplicar algunas de las ténicas aprendidas, según el reglamento deportivo.</p>
                <p>Hoy en día a nivel mundial el Shodokan es practicado en diferentes países como Japón, España, Venezuela, Estados Unidos, Holanda, México, Argentina, Alemania, Chile, Australia y Brasil.</p>
                <p>El legado tanto del maestro Toyama como de su estilo Shodokan llegaron hasta el Taekwondo moderno. Cuando tras el regreso del maestro de China a Japón en 1930, conoció a los estudiantes coreanos <b>Yoon Byung-in, Kim ki Whang y Yon Kwai Byeong</b>, a quienes entrenó en el Karate Shodokan. Estos estudiantes regresaron a Corea con grados Dan y fundaron las escuelas de Tang Soo Do / Tangsudo, o Kong Soo Do. Trás la llegada de las tropas de Estados Unidos y la declaración de la independencia de Corea el 15 de agosto de 1945, Yoo Byung-in se reunió con los fundadores de las 4 grandes escuelas de Corea en busca de una asociación que las unificara. Siendo de esta manera como el Teakwondo moderno (WTF) se desarrolló. </p>
                <h2>Shudokan Katas</h2>
                <p>Los diversos katas que enseña el Karate Shudokan son: </p>
                <ul>
                    <li>empi taki</li>
                    <li>Empi Iwa</li>
                    <li>penpei</li>
                    <li>Penpo</li>
                    <li>Shimpa bronceado</li>
                    <li>Rohai Shodan</li>
                    <li>Rohai Nidan</li>
                    <li>Rohai Sandan</li>
                    <li>Seiru</li>
                    <li>Ananku</li>
                    <li>Pinan Shodan</li>
                    <li>Piñan Nidan</li>
                    <li>Piñan Sandan</li>
                    <li>Piñan Yondan</li>
                    <li>Pinan Godan</li>
                    <li>kyoku shodan</li>
                    <li>kyoku nidan</li>
                    <li>kyoku sandan</li>
                    <li>Kyoku Yondan</li>
                    <li>Kyoku Godan</li>
                    <li>Kyoku Rokudan</li>
                </ul>
            </section>
        </main>
    )
}
import ArticlesHero from '@/components/ArticlesHero'
import wadoRyu from '@/assets/articles-preview/wado_ryu.jpg'
import styles from '@/app/articulos/article.module.css'
import Link from 'next/link'

export default function WadoRyu () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Wadō-ryū' img={wadoRyu} />
            <section className={styles.article__container}>
                <h2 className={styles.article__subtitle}>Karate Wado Ryu</h2>
                <p>El Wadō-ryū es un estilo de karate fundado por el maestro <b>Hironori Otsuka</b> y es uno de los 4 estilos principales de <Link href='/articulos/karate-do'>Karate-do</Link> tradicionales de Japón. Este es en particular un estilo con una marcada influencia japonesa. Su nombre se compone de 3 partes: Wa, dō y ryū. Siendo que <b>Wa</b> significa &quot;Armonía&quot;, <b>dō</b> &quot;camino&quot; y <b>ryū</b> significa &quot;escuela&quot; o &quot;estilo&quot;. Siendo su filosofía al incluir la palabra &quot;Armonía&quot;, el reconocer que a veces ceder es más efectivo que dominar por la fuerza.</p>
                <p>Su creador, el maestro Hironori Otsuka nació el 1 de enero de 1892 y comenzó a practicar jiu-jitsu clásico a la edad de 6 años. Mantuvo su entrenamiento en esta arte marcial hasta 1922, cuando conoció al maestro de karate <b>Gichin Funakoshi</b>, con quien comenzó a entrenar, antes de que este fundara el estilo hoy conocido como <Link href='/estilos/karate-shotokan'>Karate Shotokan</Link>. Otsuka fue uno de los primeros alumnos de Funakoshi en ser promovido al cinturón negro 1 Dan. Otsuka terminaría entrenando con los maestro <b>Kenwa Mabuni</b>, creador del estilo <Link href='/estilos/shito-ryu'>Shito-ryu</Link>, y con el maestro <b>Chōki Motobu</b>. Con todo este conocimiento aprendido por grandes maestros de la historia del karate, es que Otsuka daría origen al <b>Wadō-ryū</b>, que registaría inicialmente en 1938 con el nombre de <b>Dai Nippon Butoku Kai</b> que en el futuro se acortaría al nombre por el que lo conocemos hoy en día.</p>
                <p>En opinión del maestro Hironori Otsuka, la defensa basada en el intercambio de golpes que proponía el karate de Okinawa era algo limitada, él creía que el jiujitsu japonés, que había practicado durante la mayor parte de su juventud, podría enriquecer este arte marcial. Por esto no asombra que en su estilo además de encontrarse golpes, haya un mayor repertorio de luxaciones articulares y lanzamientos que en otros estilos.</p>
                <p>El maestro Otsuka además defendía los fundamentos tácticos del budo japonés, pensando en el suo del ritmo del combate, donde el uso de la distancia se interpreta según los 3 momentos: El Sen, o anticipación, el Sen no Sen o encuentro, y el Go no Sen o contraataque.</p>
                <p>Asimismo desarrolló un método original de karate y jiujitsu, donde se usa la ecasión en lugar del bloqueo duro que caracteriza ciertos estilos de karate. Enunciando 3 principios que sirven de guía y de base ténica para el wado-ryu: diez i (&quot;desplazamientos&quot;), diez tai (&quot;rotación del cuerpo&quot;), diez gi (&quot;la aplicación de la táctica de forma simultánea con la técnica de bloqueo y el contraataque&quot;). Sobre esta base, el practicante desarrollará las sensaciones de: Nagasu (movimiento corporal, absorción del ataque), inasu (desviación del ataque por medio del movimiento corporal) y noru (acompañamiento del ataque con un movimiento conjunto de defensa y ataque).</p>
                <h2 className={styles.article__subtitle}>Katas Wado Ryu</h2>
                <p>Este es un estilo que posee 9 katas oficiales según lo planteo el maestro Otsuka en su libro &quot;karate Wadō-ryū&quot; del año 1977. Siendo estas: </p>
                <ul>
                    <li>Pinan Nidan</li>
                    <li>Pinan Shodan</li>
                    <li>Pinan Sandan</li>
                    <li>Pinan Yodan</li>
                    <li>Pinan Godan</li>
                    <li>Kūshankū</li>
                    <li>Naihanchi</li>
                    <li>Seishan</li>
                    <li>Chintō</li>
                </ul>
                <p>Además de estas katas, que son individuales, también hay katas practicadas en pareja, tal como ocurre en el <b>Aikido</b> o en el <b>Judo</b>. Estas katas son: </p>
                <ul>
                    <li>-Yakusoku Kihon Kumite: consta de 10 técnicas fundamentales de ataque contra los ataques en combinación (combinaciones de patadas y golpes), influenciados por los movimientos del cuerpo típicos del jujutsu.</li>
                    <li>-Kumite Gata: consiste en 10 - 24 técnicas (dependiendo de la organización) de ataque que enfatizan Katamae (fijar) y Kuzushi (rotura del equilibrio) y múltiples golpes.</li>
                    <li>-Ohyo kumite: consiste en diversas técnicas de ataque, incorporando los bloqueos, patadas y golpes del karate con lanzamientos del jujutsu y los movimientos del cuerpo.</li>
                    <li>-Idori no Kata: consiste en 5-10 técnicas de autodefensa sentado, influenciados por lanzamientos y luxaciones articulares del jujutsu.</li>
                    <li>-Tanto dori no Kata: consiste en 7-10 técnicas de las defensas contra ataques de cuchillo, influenciados por los movimientos del cuerpo tipo jujutsu, lanzamientos, y técnicas de bloqueo de las articulaciones.</li>
                    <li>-Shinken Shirahadori (真 剣 白刃 取 り): consta de 5-10 técnicas de defensas contra ataques desde la espalda, influenciados por los movimientos del cuerpo derivados del jujutsu.</li>
                </ul>
            </section>
        </main>
    )
}
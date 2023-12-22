import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import taekwondo from '@/assets/articles-big/taekwondo.jpg'
import Link from 'next/link'

export default function Taekwondo () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Karate y Taekwondo' img={taekwondo} />
            <section className={styles.article__container}>
                <h2 className={styles.article__subtitle}>Karate y Taekwondo Diferencias</h2>
                <p>El karate y el Taekwondo son 2 artes marciales que aunque comparten algunas similitudes, tienen también algunos componentes importantes que los diferencias. Para empezar su origen, mientras que el karate es un arte marcial japonés que se fundó e introdujo de manera oficial en 1922 y que tiene sus raíces en las islas de Okinawa, tomando gran inpiración e influencia del Kung Fu chino, el Taekwondo es un arte marcial coreano que nace de la fusión del <b>Taekkyan Coreano</b> y del <Link href='/articulos/karate-do'>Karate-do</Link> japonés que se hizo en una conferencia realiazada en el año 1955, y se cree que existe desde hace más de 2300 años, a pesar de que entre las diferentes versiones que hay respecto a su origen existe cierta controversia. </p>
                <p>Respecto a sus diferencias en cuanto a estilo y movimientos, el kárate es principalmente un arte de ataque, con puñetazos, patadas, rodillazos, codazos y técnicas a mano abierta. Los movimientos son nítidos y lineales. También se enseñan varias técnicas de bloqueo, como las paradas, y los derribos. Sobre el estilo de karate, observamos cómo se practica con los brazos rectos contra el torso, las manos y brazos justo debajo de la cintura, y el arco ejecutado doblando el torso hacia abajo mientras se mantiene la mira en el oponente. <br />
                Mientras que el taekwondo utiliza principalmente técnicas de patada que son a la vez fuertes y elegantes. En un entrenamiento completo se enseñan puñetazos y bloqueos con paradas y derribos, aunque queden en segundo plano comparado con las patadas. El taekwondo es de las artes marciales más rápidas, superando incluso al mismo karate que es un arte marcial más lento y pone el foco en lograr movimientos perfectos, dejando un poco de lado la velocidad para conseguirlo. </p>
                <p>En cuanto a la competición, ambas tienen organizaciones que las rigen y organizan los torneos, siendo las más destacadas del karate: <b> WKF World Karate Federation, European Kyokushin Karate Org., World Seido Karate Org., USA National Karate DO, Japan Karate Federation, International Karate Assoc., Kenkojuku Karate Assoc.</b> <br />
                Mientras que las más destacadas del Taekwondo son: <b>Federación Mundial de Taekwondo (WTF) y la Federación Internacional de Taekwondo (ITF), la Federación Americana de Taekwondo (ATF) o la Asociación Americana de Taekwondo (ATA).</b></p>
                <p>El riesgo de lesiones es ligeramente mayor en el <b>Taekwondo</b> debido a que imponen un mayor nivel de competencia. Además, las lesiones del karate suelen concentrarse en su mayoría en la cabeza, con cosas como las conmociones cerebrales y las hemorragias nasales, mientras que por razones bastante predecibles, las lesiones del taekwondo suelen concentrarse en la parte inferior del cuerpo, como en los pies, piernas, tobillos y rodillas. Las personas que practican taekwondo están sujetas a esguinces y distensiones.</p>
                <h2 className={styles.article__subtitle}>Similitudes entre el Karate y el Taekwondo</h2>
                <p>También existen aspectos en los que estas 2 artes marciales se asemejan, aquí algunas de las similitudes más relevantes: </p>
                <ul>
                    <li>Ambas son enseñadas en un <Link href='/articulos/dojo-karate'>Dojo</Link></li>
                    <li>En ambas disciplinas se usan y tienen uniformes similares, generalmente blanco y de algodón ligero para facilitar la movilidad y la flexibilidad de las piernas y de los brazos.</li>
                    <li>Ambas disciplinas dan mucha importancia a fomentar el respeto por los compañeros y hacia los profesores de cada una.</li>
                    <li>Las técnicas utilizadas, tanto en taekwondo como en karate, son parte de un conjunto de formas coreografiadas que se conocen como <Link href='/estilos/karate-kata'>kata</Link> en el segundo y poomsae en el primero.</li>
                    <li>Es el caso de ambas disciplinas el ir más allá del entrenamiento físico, dando igual importancia al equilibrio entre mente y cuerpo, al desarrollo de la paciencia, la autodisciplina, y la confianza en uno mismo.</li>
                    <li>Aunque en el caso del Taekwondo, no se rigen por el sistema de <Link href='/articulos/dans-karate'>Dans</Link>, en ambos casos se otorga un cinturón en funsión ddel nivel que maneje el practicante que van desde el color blanco para los principiantes, hasta el negro para los más avanzados.</li>
                </ul>
            </section>
        </main>
    )
}
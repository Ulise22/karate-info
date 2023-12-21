import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import dans from '@/assets/articles-big/dans (2).jpg'
import Link from 'next/link'

export default function Dans () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Dans Karate' img={dans} />
            <section className={styles.article__container}>
                <p>Dan es el nombre que reciben los diferentes niveles del sistema de graduación <b>Dankyuisei</b>, que originalmente se inventó para ser el estándar de graduación en el juego de mesa Go, y que con el tiempo se adaptó y fue adoptado por las artes marciales como el Judo o el Karate, para establecer un sistema de jerarquía en las artes marciales japonesas.</p>
                <p>Como dije anteriormente el sistema de clasificación se utilizó para estandarizar la graduación de los jugadores del Go. Fue creado por el jugador profesional <b>Honinbo Dosaku</b>, con la idea de que al tener un sistema de clasificación, todos los competidores terminarían enfrentándose a un oponente de un nivel similar, y es con este objetivo que el artista marcial <b>Jigoro Kano</b> tomó prestado el sistema para aplicarlo al antiguo arte marcial Jujitsu (hoy en día Judo), tomando incluso los cinturones de colores.</p>
                <p>Finalmente fue el maestro <b>Gichin Funakoshi</b>, el padre del karate moderno, quien tomó esta idea y la implementó al karate para el estilo <Link href='/estilos/karate-shotokan'>Shotokan</Link> en 1924.</p>
                <p>Es importante saber que este sistema se divide en 2 categorías: los <b>Kyu</b> que es donde entran los alumnos de los primeros niveles de progresión, y los <b>Dan</b> que es lo que aplica para los practicantes más expertos y para los maestros del karate. El Kyu el que indica la progresión desde el cinturón blanco (que suele iniciar en el 6° kyu) hasta el cinturón marrón (1er kyu), siendo estos graddos concedidos por el profesor a los alumnos después de un examen hecho dentro del propio dojo. Mientras que los Dan indican la progresión después de conseguido el cinturón marrón, simbolizandose con el cinturón negro que se otorga tras la realización de un examen oficial por un jurado de 3 miembros.</p>
                <p>En las artes marciales coreanas como el <b>Taekwonodo</b>, el color del primer dan suele ser el negro y se van agregando barras doradas o blancas por cada nuevo Dan, a medida que el practicante va progresando.</p>
                <h2 className={styles.article__subtitle}>10 Dans Karate</h2>
                <p>En el caso de las artes marciales japonesas desde el primer a quinto Dan se utiliza un cinturón negro, de sexto a octavo este es de color blanco/rojo y noveno y décimo dan es de color rojo; aun así es práctica habitual en judo que los danes a partir de sexto utilicen el cinturón negro como el que corresponde a su dan, tanto en Japón como en el resto del mundo.</p>
                <ul>
                    <li><b>1. shodan (esudiante):</b> Primer grado.</li>
                    <li><b>2. nidan (discípulo):</b> Segundo grado.</li>
                    <li><b>3. sandan (confirmado):</b> Tercer grado.</li>
                    <li><b>4. yondan (experto):</b> Cuarto grado.</li>
                    <li><b>5. godan (Renshi):</b> Quinto grado.</li>
                    <li><b>6. rokudan (Renshi):</b> Sexto grado.</li>
                    <li><b>7. nanadan (Kyoshi):</b> Séptimo grado.</li>
                    <li><b>8. hachidan (Kyoshi):</b> Octavo grado.</li>
                    <li><b>9. kudan (Hanshi):</b> Noveno grado.</li>
                    <li><b>10. judan (Hanshi):</b> Décimo grado.</li>
                </ul>
                <h2 className={styles.article__subtitle}>Colores de cinturones de Karate</h2>
                <p>En el karate, cada grado que se consigue se le suele asignar un cinturón con color determinado, sin embargo, estos cinturones no están dados al azar, y cada uno tiene un significado que simboliza algo distinto: </p>
                <ul>
                    <li><b>Cinturón blanco, </b>es el de menor nivel y representa la pureza.</li>
                    <li><b>Cinturón amarillo, </b>representa la unión.</li>
                    <li><b>Cinturón naranja, </b>evoca la emoción por aprender y la energía.</li>
                    <li><b>Cinturón verde, </b>es el color de la esperanza, el equilibrio y la reflexión.</li>
                    <li><b>Cinturón azul, </b>muestra la confianza por alcanzar el progreso.</li>
                    <li><b>Cinturón marrón, </b>cuando obtengas este cinturón pasarás del sistema de los KYU al sistema de los Dan.</li>
                    <li><b>Cinturón negro, </b>supone que has alcanzado los conocimientos necesarios.</li>
                </ul>
                <p>Pese a que el cinturón negro es el máximo al que se puede aspirar, este no supone el final de la práctica del karate, sino que por el contrario, una vez obtenido se puede continuar avanzando hasta alcanzar los Danes más altos.</p>
            </section>
        </main>
    )
}
import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import haito from '@/assets/articles-preview/haito.png'

export default function Haito () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Haito Karate' img={haito} />
            <section className={styles.article__container}>
                <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/jXifXEzkZdY?si=19AQqHpdylm_HR-K" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <p>El Haito, o Haito Uchi, en español &quot;Revés de sable&quot;, es un golpe sencillo de karate.</p>
                <p>Es un golpe que se da con el canto o bordde interno de la mano. Al realizarlo, la mano debe estar extendida con los dedos juntos y el pulgar doblado pegado a la palma. La distancia de oscilación se puede elegir, puede ser desde atrás o puedde perfectamente salir y oscilar en corto desde el brazo. La superficie de impacto el espacio entre el pulgar y el nudillo del dedo índice, estando el primer en plena flexión. </p>
                <p>Se utiliza como golpe circular para golpear en zonas muy sensibles debido a la irrigación sanguínea como es el caso de la sien y la carótida. Suele ejecutarse con la palma mirando hacia abajo.</p>
                <p>Esta es una de las ténicas más importante en la practica del karate, dado que es muy efectiva para atacar zonas blandas del cuerpo del oponente, como el cuello, la mandibula o las costillas. En este contexto, se suele utilizar mucho para las competiciones y para defensa personal, ya que es una ténica que permite defenderse y atacar de manera efectiva en situaciones de peligro.</p>
                <h3 className={styles.article__subtitle}>¿Qué es estar Haito en Karate?</h3>
                <p>Estar Haito significa estar en una posición de espera y alerta en la que el practicante se encuentra completamente concentrado y preparado para actuar bajo cualquier circunstancia o situación. Esta actitud mental se caracteriza por mantener una gran atención y un espacio de vigilancia constante para permitir al practicante anticiparse y reaccionar ante cualquier posible ataque.</p>
                <p>Mantener esta actitud es fundamente cuando se practica este arte marcial, dado que facilita ejecutar la distintas técnicas de defensa y ataque porque mantuvimos un equilibrio físico y emocional. Lo quea además suele convertir el arte marcial en algo más seguro, dado que de esta forma evitamos lesiones y accidentes durante los entrenamientos.</p>
                <h3 className={styles.article__subtitle}>¿Qué significa Uchi en el Karte?</h3>
                <p>Uchi es una palabra japonesa que se usa para referirse a los golpes internos o ataques de puño con la mano inversa. Estos golpes se utilzan con la mano más cercana al cuerpo, es decir que si estás en una posición defensiva con la mano izquierda por delante, la mano que debe realizar el golpe es la mano derecha. El uchi se utiliza principalmente en situaciones de bloqueo y contraataque en el karate, y para ser capaz de ejecutar estas técnicas de manera correcta es necesario un alto nivel de control, precisión y fuerza.</p>
                <h2 className={styles.article__subtitle}>Variaciones de Haito Uchi</h2>
                <p>Además de lo básico que se necesita saber para ejecutar esta ténica, existen diferentes variaciones con nombres diferentes dependiendo la técnica utilizada y la zona que se golpee. Estas son: </p>
                <ul>
                    <li><b>Aito Ura Uchi: </b> Es un golpe de adentro hacia afuera, que se hace con dirección a nivel Jodan (a la cabeza del adversario).</li>
                    <li><b>Haito Omote Uchi: </b>Es un golpe de afuera hacia adentro, desplazándose dependiendo de diferentes criterios, o en un plano horizontal, o en un plano semicircular ascendente. Es recomendable ejecutar esta técnica con el brazo correspondiente a la pierna atrasa para no perder efectividad y potencia.</li>
                    <li><b>Haito Hyori Uchi: </b>En esta técnica se combina un ataque con la palma de la mano hacia arriba con otro de regreso con la palma hacia abajo o viceversa.</li>
                    <li><b>Haito Age Uchi: </b>Es un golpe en plano vertical pero elevándose solo hasta el área genital del adversario, donde el brazo que ejecuta se estira primero hasta más abajo de las caderas y retrocede para tomar impulso para posteriormente en un movimiento frontal golpear a su objetivo. Las piernas del practicante de karate deben flexionarse un poco par al momento de impactar el ángulo de entrada se mas efectivo.</li>
                    <li><b>Haito Haito Uchi: </b>Básicamente es una técnica doble de Haito Omote uchi lanzando el golpe con las 2 manos simultáneamente.</li>
                </ul>
            </section>
        </main>
    )
}
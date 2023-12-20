import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import hiraken from '@/assets/articles-preview/hiraken.png'

export default function Hiraken () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Hiraken Karate' img={hiraken} />
            <section className={styles.article__container}>
            <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/01W7_AQHlps?si=xdKr1HkPSfpMdEtw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <p>El Hiraken, que en español se traduce como &quot;Puño de leopardo&quot;, aunque dependiendo de la escuela también recibe el nombre de &quot;Hiraken tsuki&quot;, &quot;Jud-hiraken&quot; o también llamado por algunos maestros como &quot;Hiraken Uchi&quot;, es un ataque de karate simple.</p>
            <p>Es un ataque donde solamente se doblan los dedos parcialmente, es decir, por las segundas falanges, con las yemas de los dedos tocando la tercera falange, o el inicio de los dedos, de ahí que parezca una zarpa de felino y deba a eso su nombre. Es un golpe bastante habitual en Karate.</p>
            <p>La fuerza del impacto dado con este golpe debe ser absorvida por las articulaciones de los dedos índice y corazón. ELl dedo pulgar puede variar de posición según el estilo puede situarse indistintamente estirado, replegado sobre la yema del dedo índice o situado encima de las uñas de los dedos corazón y anular.</p>
            <p>Además este es un golpe que sirve como punto de partida a otros golpes más complejos, como una forma del <b>Ippon Nukite</b>, que se realiza en el fondo desde el Hiraken y sacando el dedo índice.</p>
            <p>Básicamente hace referencia a las diferentes ténicas de golpeo que impliquen contactar usando los 4 nudillos de la segunda articulación, habiendo 2 maneras de hacerlo: </p>
            <ul>
                <li>Con la mano más abierta, en este caso los 4 dedos doblados en la segunda articulación permanecen con la palma de la mano extendida. De esta manera se puede golpear sobre el tabique nasal, la tráquea y el punto vital situado sobre el labio superior.</li>
                <li>Y la otra forma consiste en que los 4 dedos también se doblan en la segunda articulación pero en este caso permanecen con la palma de la mano mas encogida. Que es una variante con la que también se puede golpear sobre el tabique nasal, la tráquea y el punto vital sobre el labio.</li>
            </ul>
            <p>En las 2 variantes es indistinto si se hace con la palma de la mano viendo para arriba o para abajo. Aunque se tiene en cuenta algunas cosas a la hora de ejecutar esta ténica, como que al lanzar un tsuki o golpe, es un poco más complicado lanzar otro, primero por la menor distancia y segundo por los diferentes ángulos que son necesarios para alcanzar al oponente. Así también, es necesario saber que un Hiraken, aunque puede ser utilizado de forma recta, no debe jamás partir desde el costado, sino que debe partir de una posición intermedia, dado que es más efectivo en movimientos circulares de precisión.</p>
            <p>Hoy en día, no suele ser un golpe muy usado, ya que en el combate moderno este tipo de ténicas resulta poco prácticas, o simplemente son reemplazadas por golpes más básicos como lo son los puños directos: En parte por esto los practicantes de deportes de contacto tienen ventaja técnica respecto al karate actual en el cuerpo a cuerpo, por los movimientos circulares, y movimientos corporales, pero aunque esto se equilibra a favor del karateka al usar hiraken y ryutoken, y queda aun en mayor ventaja técnica al usar las técnicas de kyusho con los dedos, también es verdad que es mas difícil de dominar, el kyusho karate que los movimientos típicos de brazos de cualquier deporte de contacto. Sin embargo, este golpe puede ser muy letal en ciertos puntos del cuerpo y pueden penetrar en la guardia del oponente. Incluso es mucho más factible que con un Hiraken se pueda cortar la guardia si impacta en el cuello, y ni hablar de golpear en la nuez que podría significar un daño letal para quien lo recibe. Es por esto que con esta ténica se busca golpear los puntos débiles, en especial los que puedan causar alguna fractura en los puntos vitales.</p>
            </section>
        </main>
    )
}
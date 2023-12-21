import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import dojo from '@/assets/homepage/articles/dojo_kun.svg'
import Link from 'next/link'

export default function DojoKun () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Dojo Kun' img={dojo} />
            <section className={styles.article__container}>
                <p>El Dojo Kun es una serie de preceptos que suelen estar colgados y escritos en la pared de los Dojos de las artes marciales japonesas modernas del <Link href='/articulos/karate-do'>karate</Link> o del <b>judo</b>, además de en el arte marcial <b>Aikido</b>. Estos preceptos están escritos en Kanji, que son los sinogramas utilizados en la escritura del idioma japonés.</p>
                <p>En muchos casos se suele perpetuar la tradición de los preceptos del Bushido, que era el código ético por el que se regían los samuráis. Aunque en el caso de del <b>Karate-do</b> se leo relaciona con la esencia del <b>Niju kun</b>, que son los 20 principios que fueron escritos por quien es considerado el padre del karate moderno, Gichin Funakoshi, un ferviente seguidor de la filosofía confucionista, filosofía china que le da especial importancia a los ritos, dado que para los confucianos estos ritos eran vistos como un símbolo de jerarquía y poder, además de que por exigir del individuo que se realice de forma precisa, servían como un metódo de auto disciplina y dominio de uno mismo.</p>
                <p>Dado que algunas personas se inician en la práctica del karate con el fin de ganar competiciones y de poder desenvolverse en situaciones violentas, es importante que el instructor les haga comprender a los más principiantes estas 5 máximas, para que el objetivo de la práctica este orientado a cumplir con estas normas que constituyen la base y el verdadero sentido del <b>Karate-do</b>.</p>
                <ul>
                    <li><b>JINKAKU KANSEI NI TSUTOMURU KOTO (INTENTAR PERFECCIONAR EL CARÁCTER): </b>Al tener como objetivo mejorar el carácter y la personalidad, nos enseña que el karate es más que una mera actividad física, dado que el entrenamiento riguroso nos ayuda a desarrollar el espíritu de lucha y superación. Porque quien practique el karate aprendera a controlar la mente y a vencer las dificultades que el ejercicio físico le presente</li>
                    <li><b>MAKOTO NO MICHI-O MAMURU KOTO (SER CORRECTO LEAL Y PUNTUAL): </b>Tener siempre en mente el camino de la honestidad. Defender siempre la verdad, ser honesto con uno mismo y con los demás.</li>
                    <li><b>DORYOKU NO SEICHIN-O YASHINAU KOTO (TRATAR DE SUPERARSE): </b>Nunca abandonar el espíritu de persevarancia y esfuerzo, dado que estas son armas necesarias para alcanzar la maestría en el Arte Marcial. Sin esto es imposible de conseguir.</li>
                    <li><b>REIGUI-O OMONZURU KOTO (RESPETAR A LOS DEMÁS): </b>Mantener el respeto hacia aquellos que nos acompañan en el Karate-do, al maestro, a los compañeros de entrenamiento, y a todo aquel que nos rodea. La fidelidad demostrada hacia el instructor será compensada con la transmisión de sus conocimientos, y este lazo entre instructor y alumno el que constituye la base del aprendizaje y la relación entre las personas.</li>
                    <li><b>KEKI NO YU-O IMASHIMURU KOTO (ABSTENERSE DE PROCEDERES VIOLENTOS): </b>Es primordial ser capaz en todo momento de controlar las emociones y la agresividad, siendo responsabilidad de todos los practicantes el abstenerse de comportamientos violentos. Por tanto se entiende que el objetivo del entrenamiento del karate es ser capaz de ganar control mental y físico en busqueda de que influya en nuestro comportamiento. Su utilización para defensa personal será aplicada sólo en caso ded extrema necesidad cuando no se encuentre alternativa.</li>
                </ul>
                <p>En el caso de los practicantes del estilo <Link href='/estilos/karate-shotokan'>Shotokan</Link> la forma en que se recita el Dojo Kun es la siguiente:<br /> <b>Primero, Esforzarse por la perfección del carácter. 
                    Primero, Defender los caminos de la verdad.<br />
                    Primero, Fomentar el espíritu del esfuerzo.<br />
                    Primero, Honrar los principios de etiqueta<br />
                    Primero, Guardarse contra el valor impetuoso.</b>
                </p>
                <p>Mientras que en países como Argentina y Uruguay se lo suele recitar de la siguiente manera: <br /> 
                    <b>Intentar perfeccionar el carácter.<br />
                    Ser correcto, leal, puntual.<br />
                    Tratar de superarse.<br />
                    Respetar a los demás.<br />
                    Abstenerse de procederes violentos.</b></p>
            </section>
        </main>
    )
}
import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import oss from '@/assets/articles-big/oss (2).png'
import Link from 'next/link'

export default function KarateOs () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Karate Oss' img={oss} />
            <section className={styles.article__container}>
                <p>Es lo primero que se enseña en karate, el saludo, porque en karate siempre hay que saludar y mostrar respeto. Se dice &quot;Oss&quot; a la vez que se inclina la parte superior del cuerpo. Este saludo se aplica tanto al inicio como final de la clase, al comenzar y al finalizar un <Link href='/estilos/karate-kata'>kata</Link>, cuando se comienza y termina un trabajo con otros compañero, ya sea un kihon o komite, al recibir un consejo del maestro o al recibir el &quot;Oss&quot; de otro compañero.</p>
                <p>&quot;OSS&quot; es la forma de pronunciar la palabra &quot;OSSU&quot;, que es una contracción de dos palabras japonesas: Oshi y Shinobu. <b>Oshi</b> significa literalmente &quot;empujar&quot;, simbolizando el espíritu del combate, la importancia del esfuerzo, el saber hacer frente a los obstaculos y empujarlos con una actitud decidad. Por su lado <b>Shinobu</b>, significa &quot;Soportar, resistir o sufrir&quot;, que vendría a simbolizar el espíritu de la perseverancia, el sufrir dolor y resistirlo con paciencia sin rendirse.</p>
                <p>El resultado es la palabra &quot;Ossu&quot;, que significaría &quot;empujar el sufrimiento&quot; o &quot;empujar y resistir&quot;.</p>
                <p>Su origen y popularidad comenzaron primero cuando el <b>Maestro Funakoshi</b> inculcó en sus alumnos la importancia del saludo, dejándolo reflejado en el <b>Niju Kun</b>, siendo uno de sus 20 principios &quot;El Karate comienza con rei (saludo) y termina con rei&quot;. Aunque Funakoshi no usaba la palabra &quot;Ossu&quot; como saludo, dado que esta palabra se popularizó más tarde en los <b>Clubs Universitarios de Karate</b>, que copiaron a los alumnos de la Escuela Naval de Japón, que usaban el término para expresar su espíritu de entrega y abengación.</p>
            </section>
        </main>
    )
}
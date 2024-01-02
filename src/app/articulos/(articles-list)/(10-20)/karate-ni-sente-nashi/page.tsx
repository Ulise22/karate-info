import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import senteNashi from '@/assets/articles-big/ni_sante_nashi (2).jpg'
import Link from 'next/link'

export default function NiSenteNashi () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Karate Ni Sente Nashi' img={senteNashi} />
            <section className={styles.article__container}>
                <p>La frase &quot;Karate ni sente nashi&quot;, traducida al español como &quot;En karate no existe el primer ataque&quot; es una que resulta muy familiar para aquellos que practican karate, llegando a tener especial relevancia gracias a las enseñanzas del maestro <b>Gichin Funakoshi</b>, padre del karate moderno y fundador del estilo <Link href='/estilos/karate-shotokan'>Shotokan</Link>, quien hizo de esta enseñanza una de las primeras en sus <b>Ninju Kun</b> (Veinte Preceptos). </p>
                <p>Con la importancia que se le ha dado a este principio, no sólo aquellos practicantes que deciden optarlo, sino también por diferentes maestros que ven en esta enseñanza un valor importante que debería ser adoptados por los karatecas, queda concluir que es, o al menos debería, un principio por el que todos los practicantes del <Link href='/articulos/karate-do'>Karate-do</Link> deberían regirse.</p>
                <p>Al respecto, además de sus Ninju Kun, el maestro Funakoshi había expresado en un articulo para una revista que él &quot;veía como [que expresaba] la esencia del Karate-do&quot;. A estas declaraciones se pueden sumar las del maestro <b>Shoshin Nagamine</b>, quien había comentado que &quot;Esta frase […] expresa la esencia del Karate okinawense&quot;. Por último se podrían agregar las palabras de <b>Masotoshi Nakayama</b>, que fueron que &quot;[…] no es exagerado decir que son estas palabras las que expresan sucinta pero completamente el espíritu del Karate-do&quot;.</p>
            </section>
        </main>
    )
}
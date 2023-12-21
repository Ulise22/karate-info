import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import aak from '@/assets/articles-preview/aka_ao.jpg'
import Link from 'next/link'

export default function AkaAo () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Aka Ao Karate' img={aak} />
            <section className={styles.article__container}>
                <h2 className={styles.article__subtitle}>¿Qué significa Aka y Ao en Karate?</h2>
                <p>En una competición de karate de modalidad de <Link href='/estilos/karate-kata'>Katas</Link> tipo WFK (World Karate Federation), se enfrentarán 2 contricantes donda cada uno llevara un cinturón de color Rojo (Aka) y Azul (Ao). El color que le toque usar a cada participante se sorteará antes de que comience la competición, siendo totalmente independiente del grado de los participantes. El participante Aka, es decir, el que lleva el cinturón rojo, será quien ejecute primero su kata, mientras que el participante Ao, o sea, el participante que porta el cinturón azul, será el segundo en ejecutar su kata.</p>
                <p>En dichos torneos el jurado valorará y comparará ambas ejecuciones y el ganador se decidirá mediante la puntuación establecida por estos, como dice la nueva normativa de la WKF.7​ Si son tres árbitros, el que reciba dos banderas a favor será el vencedor; si son cinco, deberá conseguir un mínimo de tres banderas a favor. Si uno de los dos participantes se equivoca durante su ejecución será directamente eliminado, ganando así el oponente.</p>
            </section>
        </main>
    )
}
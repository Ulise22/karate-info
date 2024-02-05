import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import seiken from '@/assets/articles-preview/karate_seiken.jpg'
import Link from 'next/link'

export default function KarateSeiken () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Karate Seiken' img={seiken} />
            <section className={styles.article__container}>
                <h2>¿Qué es Seiken?</h2>
                <p>Seiken, o &quot;cabeza de ternero&quot;, por su traducción al español, es un golpe simple de karate. Se realiza cerrando los dedos entre sí y replegando con fuerza el dedo pulgar sobre las falanges de los dedos índice y corazón. Aunque otras escuelas, en su lugar, repliegan el pulgar, apoyándolo firmemente sobre el dedo índice, consiguiendo con esto, una mayor relajación de la mano. Otra variante de esto es, dejar el pulgar extendido sobre el dedo índice, para lograr que la superficie golpeadora presente un efecto de espolón. </p>
                <p>Más allá de cuál se la manera en que elijamos posicionar el dedo pulgar, es importante que cuando se golpea se intente hacerlo con los <b>kentos</b>, es decir, las articulaciones de los dedos índice y corazón. Esto debido a que las demás articulaciones son más debiles y frágiles, por lo que no pueden soportar impactos demasiado fuertes, mucho menos si se hacen de forma repetida. Esto sin embargo, no debe ser excusa para descuidarlas tampoco, dado que en el transcurso de una pelea, se termina golpeando con los 4 nudillos de la mano.</p>
                <p>El puño, la muñeca y el antebrazo deben formar una sólida línea recta, esto con el fin de proporcionar solidez en la muñeca y de conseguir que el golpe no sea absorbido en su totalidad por el puño.</p>
                <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/h4T6dCwLJsE?si=Z9IYAQKq6IqMClyr" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </section>
        </main>
    )
}
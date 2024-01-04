import styles from './suggestArticles.module.css'
import Article from './Article'
/* Preview Images */
import defensa from '@/assets/homepage/articles/defensa_personal.jpg'
import adultos from '@/assets/homepage/articles/karate_adultos.jpg'
import arteMarcial from '@/assets/articles-preview/am_karate.jpg'
import okinawa from '@/assets/articles-preview/okinawa.jpg'

export default function SuggestArticles () {
    return(
        <section className={styles.suggestArticles}>
            <h2 className={styles.suggestArticles__title}>Artículos recomendados</h2>
            <div className={styles.suggestArticles__container}>
                <Article image={defensa} title='El Karate ¿Sirve para la defensa personal?' url='/articulos/defensa-personal-karate' />
                <Article image={adultos} title='Karate y adultos ¿Hasta qué edad se puede practicar karate?' url='/articulos/karate-adultos' />
                <Article image={arteMarcial} title='El Karate como arte marcial' url='/articulos/arte-marcial-karate' />
                <Article image={okinawa} title='El origen del karate en Okinawa' url='/articulos/okinawa-karate' />
            </div>
        </section>
    )
}
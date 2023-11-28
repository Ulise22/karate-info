import styles from './articulos.module.css'
import ArticleCard from '@/components/ArticleCard'
import Image from 'next/image'
/* Images */
import dojoKun from '@/assets/homepage/articles/dojo_kun.svg'
import taekwondo from '@/assets/homepage/articles/taekwondo-vs-karate.jpg'
import kobudo from '@/assets/homepage/articles/karate_kobudo.jpg'
import kata from '@/assets/homepage/articles/karate_kata.jpg'
import defensa from '@/assets/homepage/articles/defensa_personal.jpg'
import shokotan from '@/assets/homepage/articles/shotokan.jpg'
import shorinji from '@/assets/homepage/articles/shorinji_ryu.jpg'
import adultos from '@/assets/homepage/articles/karate_adultos.jpg'
/* Hero Images */
import kdokata from '@/assets/articles-preview/karatedokata.jpg'
import kyokushin from '@/assets/articles-preview/kyokushin.jpg'

export default function Articulos () {
    return(
        <main className={styles.articulos}>
            <header>
                <h1>Artículos de Karate</h1>
            </header>
            <section className={styles.articulos__hero}>
                <article className={`${styles.articulos__hero__container} ${styles.normal1}`}>
                    <Image className={styles.articulos__hero__image} src={kyokushin} alt='' />
                    <h2 className={styles.articulos__hero__title}>Kyokushin Kai</h2>
                    <p className={styles.articulos__hero__text}>Kyokushinkai (que en español significa algo así como &quot;Sociedad de la Última Verdad&quot; o &quot;Verdad Definitiva&quot;) es un estilo de karate fundado de 1953 por el maestro de artes marciales japonés Masutatsu Oyama. Tiene como objetivo la eficacia en el combate real...</p>
                </article>
                <article className={`${styles.articulos__hero__container} ${styles.normal2}`}>
                    <Image className={styles.articulos__hero__image} src={kyokushin} alt='' />
                    <h2 className={styles.articulos__hero__title}>Kyokushin Kai</h2>
                    <p className={styles.articulos__hero__text}>Kyokushinkai (que en español significa algo así como &quot;Sociedad de la Última Verdad&quot; o &quot;Verdad Definitiva&quot;) es un estilo de karate fundado de 1953 por el maestro de artes marciales japonés Masutatsu Oyama. Tiene como objetivo la eficacia en el combate real...</p>
                </article>
                <article className={styles.articulos__hero__principal}>
                    <Image className={styles.articulos__hero__principal__image} src={kdokata} alt='' />
                    <h2 className={styles.articulos__hero__principal__title}>Karate Do</h2>
                    <p className={styles.articulos__hero__principal__text}>Do, significa &quot;camino&quot;, que en el contexto del karate, es el camino que debe seguirse para lograr la perfección. Existen más de trescientos estilos diferentes de Karate-Do, y son el medio que tienen por objetivo la unión del cuerpo físico y el alma en un plano de alto nivel.</p>
                </article>
                <article className={`${styles.articulos__hero__container} ${styles.normal3}`}>
                    <Image className={styles.articulos__hero__image} src={kyokushin} alt='' />
                    <h2 className={styles.articulos__hero__title}>Kyokushin Kai</h2>
                    <p className={styles.articulos__hero__text}>Kyokushinkai (que en español significa algo así como &quot;Sociedad de la Última Verdad&quot; o &quot;Verdad Definitiva&quot;) es un estilo de karate fundado de 1953 por el maestro de artes marciales japonés Masutatsu Oyama. Tiene como objetivo la eficacia en el combate real...</p>
                </article>
                <article className={`${styles.articulos__hero__container} ${styles.normal4}`}>
                    <Image className={styles.articulos__hero__image} src={kyokushin} alt='' />
                    <h2 className={styles.articulos__hero__title}>Kyokushin Kai</h2>
                    <p className={styles.articulos__hero__text}>Kyokushinkai (que en español significa algo así como &quot;Sociedad de la Última Verdad&quot; o &quot;Verdad Definitiva&quot;) es un estilo de karate fundado de 1953 por el maestro de artes marciales japonés Masutatsu Oyama. Tiene como objetivo la eficacia en el combate real...</p>
                </article>
            </section>
            <section className={styles.articulos__container}>
                <ArticleCard artImage={kobudo} title='Karate Kobudo' text='El karate Kobudo es un arte marcial japonés que estudia el uso de las armas tradicionales de madera o metal...' />
                <ArticleCard artImage={kata} title='Karate Kata' text='Los kata de karate son un conjunto de movimientos practicados solo o en pareja en una clase de artes marciales...' />
                <ArticleCard artImage={defensa} title='Defensa Personal Karate' text='¿Es efectivo el karate para la defensa personal? Como muchas artes marciales, saber karate puede ser útil a la hora de encontrarte en situaciones que requieran que te defiendas...' />
                <ArticleCard artImage={shokotan} title='Karate Shokotan' text='El karate Shokotan es el primer estilo de karate-do japonés. Desarrollado por el maestro Gichin Funakoshi...' />
                <ArticleCard artImage={shorinji} title='Shorinji Ryu' text='El Shorinji Ryu es uno de los estilos más antiguos del karate okinawense. Sus katas combinan la distancia corta y la larga, los desplazamientos y técnicas combinan un rectilíneo con lo circular...' />
                <ArticleCard artImage={adultos} title='Karate para Adultos' text='¿Se puede aprender karate siendo adulto? La respuesta es que se puede aprender karate a cualquier edad, pero perfeccionar las técnicas enseñadas requiere de un tiempo y una practica exhaustivas...' />
                <ArticleCard artImage={taekwondo} title='Karate y Taekwondo' text='La princiapal diferencia entre estas 2 artes marciales consiste en que el karate abarca movimientos más amplios que el taekwondo, que hace principalmente uso de las patadas...' />
                <ArticleCard artImage={dojoKun} title='Dojo Kun' text='El Dojo Kun es una serie de preceptos que suelen estar colgados en la pared de un dojo de artes marciales japonesas como el Karate o el Judo...' />
            </section>
        </main>
    )
}
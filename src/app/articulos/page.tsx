import styles from './articulos.module.css'
import ArticleCard from '@/components/ArticleCard'
import Image from 'next/image'
import Link from 'next/link'
/* Hero Images */
import kdokata from '@/assets/articles-preview/karatedokata.jpg'
import dojo from '@/assets/articles-preview/dojo.jpg'
import okinawa from '@/assets/articles-preview/okinawa.jpg'
/* Images */
import dojoKun from '@/assets/homepage/articles/dojo_kun.svg'
import taekwondo from '@/assets/homepage/articles/taekwondo-vs-karate.jpg'
import defensa from '@/assets/homepage/articles/defensa_personal.jpg'
import adultos from '@/assets/homepage/articles/karate_adultos.jpg'
import aka from '@/assets/articles-preview/aka_ao.jpg'
import dans from '@/assets/articles-preview/dans.jpg'
import marcial from '@/assets/articles-preview/am_karate.jpg'
import enpi_kata from '@/assets/articles-preview/enpi_kata.jpg'
import golpe from '@/assets/articles-preview/golpe.jpg'
import haito from '@/assets/articles-preview/haito.png'
import hiraken from '@/assets/articles-preview/hiraken.png'
import femenino from '@/assets/articles-preview/femenino.jpg'
import senteNashi from '@/assets/articles-preview/ni_sante_nashi.jpg'
import os from '@/assets/articles-preview/oss.png'
import wkf from '@/assets/articles-preview/wkf.webp'
import diezEstilos from '@/assets/articles-preview/10-estilos.jpg'

export default function Articulos () {
    return(
        <main className={styles.articulos}>
            <header>
                <h1>Artículos de Karate</h1>
            </header>
            <section className={styles.articulos__hero}>
                <Link href='/articulos/defensa-personal-karate' className={`${styles.articulos__hero__container} ${styles.normal1}`}>
                    <Image className={styles.articulos__hero__image} src={defensa} alt='' />
                    <h2 className={styles.articulos__hero__title}>Defensa Personal Karate</h2>
                    <p className={styles.articulos__hero__text}>¿Es efectivo el karate para la defensa personal? Como muchas artes marciales, saber karate puede ser útil a la hora de encontrarte en situaciones que requieran que te defiendas...</p>
                </Link>
                <Link href='/articulos/dojo-karate' className={`${styles.articulos__hero__container} ${styles.normal2}`}>
                    <Image className={styles.articulos__hero__image} src={dojo} alt='' />
                    <h2 className={styles.articulos__hero__title}>Dojo Karate</h2>
                    <p className={styles.articulos__hero__text}>El Dojo en Karate, es español significa &quot;Lugar donde se practica la Vía&quot;, y es el término empleado en Japón para designar un espacio usado para meditar o practicar artes marciales,no solo Karate...</p>
                </Link>
                <Link href='/articulos/karate-do' className={styles.articulos__hero__principal}>
                    <Image className={styles.articulos__hero__principal__image} src={kdokata} alt='' />
                    <h2 className={styles.articulos__hero__principal__title}>Karate Do</h2>
                    <p className={styles.articulos__hero__principal__text}>Do, significa &quot;camino&quot;, que en el contexto del karate, es el camino que debe seguirse para lograr la perfección. Existen más de trescientos estilos diferentes de Karate-Do, y son el medio que tienen por objetivo la unión del cuerpo físico y el alma en un plano de alto nivel.</p>
                </Link>
                <Link href='/articulos/karate-adultos' className={`${styles.articulos__hero__container} ${styles.normal3}`}>
                    <Image className={styles.articulos__hero__image} src={adultos} alt='' />
                    <h2 className={styles.articulos__hero__title}>Karate para Adultos</h2>
                    <p className={styles.articulos__hero__text}>¿Se puede aprender karate siendo adulto? La respuesta es que se puede aprender karate a cualquier edad, pero perfeccionar las técnicas enseñadas requiere de un tiempo y una practica exhaustivas...</p>
                </Link>
                <Link href='/articulos/okinawa-karate' className={`${styles.articulos__hero__container} ${styles.normal4}`}>
                    <Image className={styles.articulos__hero__image} src={okinawa} alt='' />
                    <h2 className={styles.articulos__hero__title}>Okinawa Karate</h2>
                    <p className={styles.articulos__hero__text}>Entre los pueblos nativos de la isla de Okinawa, fue donde se originaron diferentes artes marciales, entre ellos el karate. Dicha isla fue influenciada por varias culturas como la japonesa, la china y en general la región del sudeste asiático, que influyeron en el desarrollo de las artes marciales...</p>
                </Link>
            </section>
            <section className={styles.articulos__container}>
                <ArticleCard artiURL='/articulos/karate-taekwondo' artImage={taekwondo} title='Karate y Taekwondo' text='La princiapal diferencia entre estas 2 artes marciales consiste en que el karate abarca movimientos más amplios que el taekwondo, que hace principalmente uso de las patadas...' />
                <ArticleCard artiURL='/articulos/dojo-kun' artImage={dojoKun} title='Dojo Kun' text='El Dojo Kun es una serie de preceptos que suelen estar colgados en la pared de un dojo de artes marciales japonesas como el Karate o el Judo...' />
                <ArticleCard artiURL='/articulos/aka-ao-karate' artImage={aka} title='Aka Ao Karate' text='¿Qué significa aka y AO en karate? Al comienzo de cada encuentro, uno de los contendientes con cinturón rojo (AKA) y otro con cinturón azul (AO), se alinearán en el perímetro del área de competición mirando al Juez Jefe...' />
                <ArticleCard artiURL='/articulos/dans-karate' artImage={dans} title='Dans Karate' text='Dan es la denominación que se le da a los diferentes rangos del sistema de graduación dankyuisei...' />
                <ArticleCard artiURL='/articulos/arte-marcial-karate' artImage={marcial} title='Arte Marcial Karate' text='El karate es un arte marcial ded origen asiático, con raíces en otras artes marciales chinas y que sobre todo se popularizó en japón...' />
                <ArticleCard artiURL='/articulos/enpi-kata' artImage={enpi_kata} title='Enpi Kata' text='El kata Enpi (el vuelo de la golondrina) es uno de los katas más avanzados del estilo Shokotan...' />
                <ArticleCard artiURL='/articulos/golpes-karate' artImage={golpe} title='Golpes de Karate' text='Los golpes de karate son diversos y dependen del estilo de karate que se esté aplicando, pero su lista consta de los siguientes...' />
                <ArticleCard artiURL='/articulos/haito-karate' artImage={haito} title='Haito Karate' text='El Haito (revés de sable) es uno de los golpes más sencillos de karate...' />
                <ArticleCard artiURL='/articulos/hiraken-karate' artImage={hiraken} title='Hiraken Karate' text='El Hiraken (puño de leopardo) es un golpe simple de karate...' />
                <ArticleCard artiURL='/articulos/karate-femenino' artImage={femenino} title='Karate Femenino' text='¿Como afecta a las mujeres practicar karate? ¿Cuales son las karatekas femeninas más conocidas y destacadas?' />
                <ArticleCard artiURL='/articulos/karate-ni-sente-nashi' artImage={senteNashi} title='Karate Ni Sente Nashi' text='La frase "Karate ni Sente Nashi" es una de las más importantes del karate...' />
                <ArticleCard artiURL='/articulos/karate-os' artImage={os} title='Karate Oss' text='Oss es una palabra que se usa constantemente en karate, pero ¿qué significa realmente?' />
                <ArticleCard artiURL='/articulos/reglas-karate-wkf' artImage={wkf} title='Reglas de Karate' text='Las reglas que deben aplicarse al karate segun Federación Mundial de Karate...' />
                <ArticleCard artiURL='/articulos/10-estilos-karate' artImage={diezEstilos} title='10 Estilos de Karate' text='10 de los estilos más populares y practicados en el mundo del karate...' />
            </section>
        </main>
    )
}
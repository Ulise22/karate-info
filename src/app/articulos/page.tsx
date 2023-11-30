import styles from './articulos.module.css'
import ArticleCard from '@/components/ArticleCard'
import Image from 'next/image'
/* Hero Images */
import kdokata from '@/assets/articles-preview/karatedokata.jpg'
import kyokushin from '@/assets/articles-preview/kyokushin.jpg'
import dojo from '@/assets/articles-preview/dojo.jpg'
import gojuryu from '@/assets/articles-preview/gojuryu.jpg'
import okinawa from '@/assets/articles-preview/okinawa.jpg'
/* Images */
import dojoKun from '@/assets/homepage/articles/dojo_kun.svg'
import taekwondo from '@/assets/homepage/articles/taekwondo-vs-karate.jpg'
import kobudo from '@/assets/homepage/articles/karate_kobudo.jpg'
import kata from '@/assets/homepage/articles/karate_kata.jpg'
import defensa from '@/assets/homepage/articles/defensa_personal.jpg'
import shokotan from '@/assets/homepage/articles/shotokan.jpg'
import shorinji from '@/assets/homepage/articles/shorinji_ryu.jpg'
import adultos from '@/assets/homepage/articles/karate_adultos.jpg'
import miyagi from '@/assets/articles-preview/miyagi-do-karate.jpg'
import aka from '@/assets/articles-preview/aka_ao.jpg'
import dans from '@/assets/articles-preview/dans.jpg'
import marcial from '@/assets/articles-preview/am_karate.jpg'
import budo from '@/assets/articles-preview/budo.jpg'
import chatanyara from '@/assets/articles-preview/chatanyara.jpg'
import enpi_kata from '@/assets/articles-preview/enpi_kata.jpg'
import golpe from '@/assets/articles-preview/golpe.jpg'
import haito from '@/assets/articles-preview/haito.png'
import hiraken from '@/assets/articles-preview/hiraken.png'
import byakuren from '@/assets/articles-preview/byakuren.jpg'
import femenino from '@/assets/articles-preview/femenino.jpg'

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
                    <Image className={styles.articulos__hero__image} src={dojo} alt='' />
                    <h2 className={styles.articulos__hero__title}>Dojo Karate</h2>
                    <p className={styles.articulos__hero__text}>El Dojo en Karate, es español significa &quot;Lugar donde se practica la Vía&quot;, y es el término empleado en Japón para designar un espacio usado para meditar o practicar artes marciales,no solo Karate...</p>
                </article>
                <article className={styles.articulos__hero__principal}>
                    <Image className={styles.articulos__hero__principal__image} src={kdokata} alt='' />
                    <h2 className={styles.articulos__hero__principal__title}>Karate Do</h2>
                    <p className={styles.articulos__hero__principal__text}>Do, significa &quot;camino&quot;, que en el contexto del karate, es el camino que debe seguirse para lograr la perfección. Existen más de trescientos estilos diferentes de Karate-Do, y son el medio que tienen por objetivo la unión del cuerpo físico y el alma en un plano de alto nivel.</p>
                </article>
                <article className={`${styles.articulos__hero__container} ${styles.normal3}`}>
                    <Image className={styles.articulos__hero__image} src={gojuryu} alt='' />
                    <h2 className={styles.articulos__hero__title}>Gojuryu</h2>
                    <p className={styles.articulos__hero__text}>El Goju Ryu es un estilo de karate-do fundado por el maestro Chojun Miyagui, en Okinawa en el año de 1933, cuando fue registrado formamelmente ante el <b>Butokukai</b> (la Asociación nacional de Artes Marciales Japonesas)...</p>
                </article>
                <article className={`${styles.articulos__hero__container} ${styles.normal4}`}>
                    <Image className={styles.articulos__hero__image} src={okinawa} alt='' />
                    <h2 className={styles.articulos__hero__title}>Okinawa Karate</h2>
                    <p className={styles.articulos__hero__text}>Entre los pueblos nativos de la isla de Okinawa, fue donde se originaron diferentes artes marciales, entre ellos el karate. Dicha isla fue influenciada por varias culturas como la japonesa, la china y en general la región del sudeste asiático, que influyeron en el desarrollo de las artes marciales...</p>
                </article>
            </section>
            <section className={styles.articulos__container}>
                <ArticleCard artiURL='/articulos/karate-kobudo' artImage={kobudo} title='Karate Kobudo' text='El karate Kobudo es un arte marcial japonés que estudia el uso de las armas tradicionales de madera o metal...' />
                <ArticleCard artiURL='/articulos/karate-kata' artImage={kata} title='Karate Kata' text='Los kata de karate son un conjunto de movimientos practicados solo o en pareja en una clase de artes marciales...' />
                <ArticleCard artiURL='/articulos/defensa-personal-karate' artImage={defensa} title='Defensa Personal Karate' text='¿Es efectivo el karate para la defensa personal? Como muchas artes marciales, saber karate puede ser útil a la hora de encontrarte en situaciones que requieran que te defiendas...' />
                <ArticleCard artiURL='/articulos/karate-shokotan' artImage={shokotan} title='Karate Shokotan' text='El karate Shokotan es el primer estilo de karate-do japonés. Desarrollado por el maestro Gichin Funakoshi...' />
                <ArticleCard artiURL='/articulos/shorinji-ryu' artImage={shorinji} title='Shorinji Ryu' text='El Shorinji Ryu es uno de los estilos más antiguos del karate okinawense. Sus katas combinan la distancia corta y la larga, los desplazamientos y técnicas combinan un rectilíneo con lo circular...' />
                <ArticleCard artiURL='/articulos/karate-adultos' artImage={adultos} title='Karate para Adultos' text='¿Se puede aprender karate siendo adulto? La respuesta es que se puede aprender karate a cualquier edad, pero perfeccionar las técnicas enseñadas requiere de un tiempo y una practica exhaustivas...' />
                <ArticleCard artiURL='/articulos/karate-taekwondo' artImage={taekwondo} title='Karate y Taekwondo' text='La princiapal diferencia entre estas 2 artes marciales consiste en que el karate abarca movimientos más amplios que el taekwondo, que hace principalmente uso de las patadas...' />
                <ArticleCard artiURL='/articulos/dojo-kun' artImage={dojoKun} title='Dojo Kun' text='El Dojo Kun es una serie de preceptos que suelen estar colgados en la pared de un dojo de artes marciales japonesas como el Karate o el Judo...' />
                <ArticleCard artiURL='/articulos/miyagido-karate' artImage={miyagi} title='Miyagido Karate' text='El señor Miyagi debe ser una de las figuras de la cultura pop que más popularizó el karate en el mainstream con su aparición en Karate Kid...' />
                <ArticleCard artiURL='/articulos/aka-ao-karate' artImage={aka} title='Aka Ao Karate' text='¿Qué significa aka y AO en karate? Al comienzo de cada encuentro, uno de los contendientes con cinturón rojo (AKA) y otro con cinturón azul (AO), se alinearán en el perímetro del área de competición mirando al Juez Jefe...' />
                <ArticleCard artiURL='/articulos/dans-karate' artImage={dans} title='Dans Karate' text='Dan es la denominación que se le da a los diferentes rangos del sistema de graduación dankyuisei...' />
                <ArticleCard artiURL='/articulos/arte-marcial-karate' artImage={marcial} title='Arte Marcial Karate' text='El karate es un arte marcial ded origen asiático, con raíces en otras artes marciales chinas y que sobre todo se popularizó en japón...' />
                <ArticleCard artiURL='/articulos/budo' artImage={budo} title='Budo' text='El budo hace referencia al conocimiento técnico de las artes marciales mixtas y al conjunto de normas éticas para sus practicantes' />
                <ArticleCard artiURL='/articulos/chatan-yara' artImage={chatanyara} title='Chatan Yara' text='Chatan Yara es conocida como la primera en diseminar las artes marciales a través de la Isla de Okinawa...' />
                <ArticleCard artiURL='/articulos/enpi-kata' artImage={enpi_kata} title='Enpi Kata' text='El kata Enpi (el vuelo de la golondrina) es uno de los katas más avanzados del estilo Shokotan...' />
                <ArticleCard artiURL='/articulos/golpes-karate' artImage={golpe} title='Golpes de Karate' text='Los golpes de karateson diversos y dependen del estilo de karate que se esté aplicando, pero su lista consta de los siguientes...' />
                <ArticleCard artiURL='/articulos/haito-karate' artImage={haito} title='Haito Karate' text='El Haito (revés de sable) es uno de los golpes más sencillos de karate...' />
                <ArticleCard artiURL='/articulos/hiraken-kobudo' artImage={hiraken} title='Hiraken Karate' text='El Hiraken (puño de leopardo) es un golpe simple de karate...' />
                <ArticleCard artiURL='/articulos/karate-byakuren' artImage={byakuren} title='Karate Byakuren' text='El karate Byakuren es un estilo de karate de full contacto fundado en 1984 por Sugihara Masayasu...' />
                <ArticleCard artiURL='/articulos/karate-femenino' artImage={femenino} title='Karate Femenino' text='El karate femenino actualmente cuenta con referentes como Sandra Sánchez que actualmente es la número 1 a nivel mundial. Y en este articulo buscaremos dar la mayor cantidad de información respecto al karate femenino...' />
            </section>
        </main>
    )
}
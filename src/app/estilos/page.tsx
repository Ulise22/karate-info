import Link from 'next/link'
import styles from '../articulos/articulos.module.css'
import Image from 'next/image'
/* IMAGES HERO */
import kobudo from '@/assets/homepage/articles/karate_kobudo.jpg'
import kyokushin from '@/assets/articles-preview/kyokushin.jpg'
import kdokata from '@/assets/articles-preview/karatedokata.jpg'
import gojuryu from '@/assets/articles-preview/gojuryu.jpg'
import ArticleCard from '@/components/ArticleCard'
import shokotan from '@/assets/homepage/articles/shotokan.jpg'
/* IMAGES */
import kata from '@/assets/homepage/articles/karate_kata.jpg'
import shorinji from '@/assets/homepage/articles/shorinji_ryu.jpg'
import budo from '@/assets/articles-preview/budo.jpg'
import byakuren from '@/assets/articles-preview/byakuren.jpg'
import shudokan from '@/assets/articles-preview/shudokan.jpg'
import wadoRyu from '@/assets/articles-preview/wado_ryu.jpg'
import shitoRyu from '@/assets/articles-preview/shito_ryu.jpg'
import genseiryu from '@/assets/articles-preview/genseiryu.jpg'
import isshin from '@/assets/articles-preview/isshin_ryu.jpg'
import uechi from '@/assets/articles-preview/uechi-ryu.jpg'

export default function Estilos () {
    return(
        <main className={styles.articulos}>
            <header>
                <h1>Estílos de Karate</h1>
            </header>
            <section className={styles.articulos__hero}>
                <Link href='/estilos/kyokushin-kai' className={`${styles.articulos__hero__container} ${styles.normal1}`}>
                    <Image className={styles.articulos__hero__image} src={kyokushin} alt='' />
                    <h2 className={styles.articulos__hero__title}>Kyokushin Kai</h2>
                    <p className={styles.articulos__hero__text}>Kyokushinkai (que en español significa algo así como &quot;Sociedad de la Última Verdad&quot; o &quot;Verdad Definitiva&quot;) es un estilo de karate fundado de 1953 por el maestro de artes marciales japonés Masutatsu Oyama. Tiene como objetivo la eficacia en el combate real...</p>
                </Link>
                <Link href='/estilos/karate-shotokan' className={`${styles.articulos__hero__container} ${styles.normal2}`}>
                    <Image className={styles.articulos__hero__image} src={shokotan} alt='' />
                    <h2 className={styles.articulos__hero__title}>Karate Shotokan</h2>
                    <p className={styles.articulos__hero__text}>El karate Shotokan es el primer estilo de karate-do japonés. Desarrollado por el maestro Gichin Funakoshi...</p>
                </Link>
                <Link href='/articulos/karate-do' className={styles.articulos__hero__principal}>
                    <Image className={styles.articulos__hero__principal__image} src={kdokata} alt='' />
                    <h2 className={styles.articulos__hero__principal__title}>Karate Do</h2>
                    <p className={styles.articulos__hero__principal__text}>Do, significa &quot;camino&quot;, que en el contexto del karate, es el camino que debe seguirse para lograr la perfección. Existen más de trescientos estilos diferentes de Karate-Do, y son el medio que tienen por objetivo la unión del cuerpo físico y el alma en un plano de alto nivel.</p>
                </Link>
                <Link href='/estilos/gojuryu' className={`${styles.articulos__hero__container} ${styles.normal3}`}>
                    <Image className={styles.articulos__hero__image} src={gojuryu} alt='' />
                    <h2 className={styles.articulos__hero__title}>Gojuryu</h2>
                    <p className={styles.articulos__hero__text}>El Goju Ryu es un estilo de karate-do fundado por el maestro Chojun Miyagui, en Okinawa en el año de 1933, cuando fue registrado formamelmente ante el <b>Butokukai</b> (la Asociación nacional de Artes Marciales Japonesas)...</p>
                </Link>
                <Link href='/estilos/karate-kobudo' className={`${styles.articulos__hero__container} ${styles.normal4}`}>
                    <Image className={styles.articulos__hero__image} src={kobudo} alt='' />
                    <h2 className={styles.articulos__hero__title}>Karate Kobudo</h2>
                    <p className={styles.articulos__hero__text}>El karate Kobudo es un arte marcial japonés que estudia el uso de las armas tradicionales de madera o metal...</p>
                </Link>
            </section>
            <section className={styles.articulos__container}>
                <ArticleCard artiURL='/estilos/karate-kata' artImage={kata} title='Karate Kata' text='Los kata de karate son un conjunto de movimientos practicados solo o en pareja en una clase de artes marciales...' />
                <ArticleCard artiURL='/estilos/shorinji-ryu' artImage={shorinji} title='Shorinji Ryu' text='El Shorinji Ryu es uno de los estilos más antiguos del karate okinawense. Sus katas combinan la distancia corta y la larga, los desplazamientos y técnicas combinan un rectilíneo con lo circular...' />
                <ArticleCard artiURL='/estilos/karate-byakuren' artImage={byakuren} title='Karate Byakuren' text='El karate Byakuren es un estilo de karate de full contacto fundado en 1984 por Sugihara Masayasu...' />
                <ArticleCard artiURL='/estilos/budo' artImage={budo} title='Budo' text='El budo hace referencia al conocimiento técnico de las artes marciales mixtas y al conjunto de normas éticas para sus practicantes' />
                <ArticleCard artiURL='/estilos/karate-shudokan' artImage={shudokan} title='Shudokan' text='El Shudokan es una escuela de kárate creada en 1932 por Kanken Toyama...' />
                <ArticleCard artiURL='/estilos/wado-ryu' artImage={wadoRyu} title='Wadō-ryū' text='El Wado Ryu es uno de los 4 estilos principales del Karate-Do tradicional fundado por el maestro Hironori Otsuka...' />
                <ArticleCard artiURL='/estilos/shito-ryu' artImage={shitoRyu} title='Shitō-ryū' text='El Shitō-ryū es un estilo de karate fundado por el maestro Kenwa Mabuni en 1931...' />
                <ArticleCard artiURL='/estilos/karate-gensei-ryu' artImage={genseiryu} title='Genseiryū' text='Genseiryū es un estilo de karate fundado oficialmente en 1953 por el maestro Seiken Shukumine...' />
                <ArticleCard artiURL='/estilos/isshin-ryu' artImage={isshin} title='Isshin Ryu' text='Isshin Ryu es un estilo de karate okinawense fundado en el año 1956 por el maestro Tatsuo Shimabaku...' />
                <ArticleCard artiURL='/estilos/uechi-ryu' artImage={uechi} title='Uechi Ryu' text='El Uechi-Ryu es uno de los 3 principales estilos clásicos tradicionales del karate de Okinawa...' />
            </section>
        </main>
    )
}
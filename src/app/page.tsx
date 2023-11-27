import Image from 'next/image'
import styles from './page.module.css'
import kobudo from '@/assets/homepage/articles/karate_kobudo.jpg'
import kata from '@/assets/homepage/articles/karate_kata.jpg'
import taekwondo from '@/assets/homepage/articles/taekwondo-vs-karate.jpg'
import defensa from '@/assets/homepage/articles/defensa_personal.jpg'
import shokotan from '@/assets/homepage/articles/shotokan.jpg'
import dojoKun from '@/assets/homepage/articles/dojo_kun.svg'
/*Peleadores Images */
import higa from '@/assets/homepage/peleadores/oscar_higa.jpg'
import lidia from '@/assets/homepage/peleadores/lidia_rodriguez.jpg'
import rafael from '@/assets/homepage/peleadores/aghayev_rafael.jpg'
import yorgelis from '@/assets/homepage/peleadores/yorgelis_salazar.jpg'
/* Componentes */
import ArticleCard from '@/components/ArticleCard'
import HeroHomepage from '@/components/homepage/Hero'
import PeleadorCard from '@/components/homepage/PeleadorCard'

export default function Home() {
  return (
    <main>
      <HeroHomepage />
      <section className={styles.articles__container}>
        <article className={styles.article}>
          <h2 className={styles.article__title}>Karate</h2>
          <p>El karate es un arte marcial tradicional con origen japonés, con base en algunos estilos de artes marciales chinas, y en otras disciplinas provenientes del mismo Japón, en Okinawa. Su origen data del siglo XVI, teniendo como objetivo el dominio de las técnicas de autodefensa, que si son practicadas a temprana edad, pueden tener beneficios en la función psicomotriz, dado que se practica el equilibrio, el conocimiento del tiempo y del espacio, la coordinación y la percepción del propio cuerpo.</p>
        </article>
        <article className={styles.article}>
          <h2 className={styles.article__title}>Artículos de Karate</h2>
          <div className={styles.article__card__container}>
            <ArticleCard artImage={kobudo} title='Karate Kobudo' text='El karate Kobudo es un arte marcial japonés que estudia el uso de las armas tradicionales de madera o metal...' />
            <ArticleCard artImage={kata} title='Karate Kata' text='Los kata de karate son un conjunto de movimientos practicados solo o en pareja en una clase de artes marciales...' />
            <ArticleCard artImage={taekwondo} title='Karate y Taekwondo' text='La princiapal diferencia entre estas 2 artes marciales consiste en que el karate abarca movimientos más amplios que el taekwondo, que hace principalmente uso de las patadas...' />
            <ArticleCard artImage={defensa} title='Defensa Personal Karate' text='¿Es efectivo el karate para la defensa personal? Como muchas artes marciales, saber karate puede ser útil a la hora de encontrarte en situaciones que requieran que te defiendas...' />
            <ArticleCard artImage={shokotan} title='Karate Shokotan' text='El karate Shokotan es el primer estilo de karate-do japonés. Desarrollado por el maestro Gichin Funakoshi...' />
            <ArticleCard artImage={dojoKun} title='Dojo Kun' text='El Dojo Kun es una serie de preceptos que suelen estar colgados en la pared de un dojo de artes marciales japonesas como el Karate o el Judo...' />
          </div>
        </article>
        <article className={styles.article}>
          <h2 className={styles.article__title}>Peleadores de Karate</h2>
          <div className={styles.article__peleador__container}>
            <PeleadorCard peleadorImage={higa} nombre='Oscar Higa' link='/peleadores/oscar-higa' texto='Oscar Higa es un peleador de karate nacido el 28 de marzo de 1945 en Buenos Aires...' />
            <PeleadorCard peleadorImage={lidia} nombre='Lidia Rodríguez' link='/peleadores/lidia-rodriguez' texto='Lidia Rodríguez Encabo en una peleadora de karate que compite en la modalidad de Kata, nacida el 23 de abril de 1997 en Alcalá, España...' />
            <PeleadorCard peleadorImage={rafael} nombre='Rafael Aghayev' link='/peleadores/rafael-aghayev' texto='Rafael Aghayev es un karateka azerbayano nacido el 4 de marzo de 1985 especializado en kumite...' />
            <PeleadorCard peleadorImage={yorgelis} nombre='Yorgelis Salazar' link='/peleadores/yorgelis-salazar' texto='Yorgelis Salazar es una karateka venezolana nacida el 10 de noviembre de 1997 que ganó una medalla de plata en los Juegos Mundiales de 2022...' />
          </div>
        </article>
      </section>
    </main>
  )
}

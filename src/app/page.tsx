import Image from 'next/image'
import styles from './page.module.css'
import kobudo from '@/assets/homepage/articles/karate_kobudo.jpg'
import kata from '@/assets/homepage/articles/karate_kata.jpg'
/*Peleadores Images */
import higa from '@/assets/homepage/peleadores/oscar_higa.jpg'
import lidia from '@/assets/homepage/peleadores/lidia_rodriguez.jpg'

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <article className={styles.hero__container}>
          <h1 className={styles.hero__title}>Karate Info</h1>
          <p className={styles.hero__text}>Desde este espacio buscamos dar la mejor información sobre el Karate. Aportaremos artículos con información sobre los peleadores más conocidos de este marcial, y sobre todo lo relacionado con este deporte.</p>
        </article>
        <article className={styles.hero__image}></article>
      </section>
      <section className={styles.articles__container}>
        <article className={styles.article}>
          <h2 className={styles.article__title}>Karate</h2>
          <p>El karate es un arte marcial tradicional con origen japonés, con base en algunos estilos de artes marciales chinas, y en otras disciplinas provenientes del mismo Japón, en Okinawa. Su origen data del siglo XVI, teniendo como objetivo el dominio de las técnicas de autodefensa, que si son practicadas a temprana edad, pueden tener beneficios en la función psicomotriz, dado que se practica el equilibrio, el conocimiento del tiempo y del espacio, la coordinación y la percepción del propio cuerpo.</p>
        </article>
        <article className={styles.article}>
          <h2 className={styles.article__title}>Artículos de Karate</h2>
          <div className={styles.article__card__container}>
            <div className={styles.article__card}>
              <Image className={styles.article__card__image} src={kobudo} alt='' />
              <h3 className={styles.article__card__title}>Karate Kobudo</h3>
              <p className={styles.article__card__text}>El karate Kobudo es un arte marcial japonés que estudia el uso de las armas tradicionales de madera o metal.</p>
            </div>
            <div className={styles.article__card}>
              <Image className={styles.article__card__image} src={kata} alt='' />
              <h3 className={styles.article__card__title}>Karate Kata</h3>
              <p className={styles.article__card__text}>Los kata de karate son un conjunto de movimientos practicados solo o en pareja en una clase de artes marciales.</p>
            </div>
            <div className={styles.article__card}>
              <Image className={styles.article__card__image} src={kobudo} alt='' />
              <h3 className={styles.article__card__title}>Karate Kobudo</h3>
              <p className={styles.article__card__text}>El karate Kobudo es un arte marcial japonés que estudia el uso de las armas tradicionales de madera o metal.</p>
            </div>
            <div className={styles.article__card}>
              <Image className={styles.article__card__image} src={kata} alt='' />
              <h3 className={styles.article__card__title}>Karate Kata</h3>
              <p className={styles.article__card__text}>Los kata de karate son un conjunto de movimientos practicados solo o en pareja en una clase de artes marciales.</p>
            </div>
            <div className={styles.article__card}>
              <Image className={styles.article__card__image} src={kobudo} alt='' />
              <h3 className={styles.article__card__title}>Karate Kobudo</h3>
              <p className={styles.article__card__text}>El karate Kobudo es un arte marcial japonés que estudia el uso de las armas tradicionales de madera o metal.</p>
            </div>
            <div className={styles.article__card}>
              <Image className={styles.article__card__image} src={kata} alt='' />
              <h3 className={styles.article__card__title}>Karate Kata</h3>
              <p className={styles.article__card__text}>Los kata de karate son un conjunto de movimientos practicados solo o en pareja en una clase de artes marciales.</p>
            </div>
          </div>
        </article>
        <article className={styles.article}>
          <h2 className={styles.article__title}>Peleadores de Karate</h2>
          <div className={styles.article__peleador__container}>
            <article className={styles.article__peleador}>
              <Image className={styles.article__peleador__image} src={higa} alt='' />
              <h3 className={styles.article__peleador__title}>Oscar Higa</h3>
              <p className={styles.article__peleador__text}>Oscar Higa es un peleador de karate nacido el 28 de marzo de 1945 en Buenos Aires</p>
            </article>
            <article className={styles.article__peleador}>
              <Image className={styles.article__peleador__image} src={lidia} alt='' />
              <h3 className={styles.article__peleador__title}>Lidia Rodríguez</h3>
              <p className={styles.article__peleador__text}>Lidia Rodríguez Encabo en una peleadora de karate que compite en la modalidad de Kata, nacida el 23 de abril de 1997 en Alcalá, España.</p>
            </article>
            <article className={styles.article__peleador}>
              <Image className={styles.article__peleador__image} src={higa} alt='' />
              <h3 className={styles.article__peleador__title}>Oscar Higa</h3>
              <p className={styles.article__peleador__text}>Oscar Higa es un peleador de karate nacido el 28 de marzo de 1945 en Buenos Aires</p>
            </article>
            <article className={styles.article__peleador}>
              <Image className={styles.article__peleador__image} src={lidia} alt='' />
              <h3 className={styles.article__peleador__title}>Lidia Rodríguez</h3>
              <p className={styles.article__peleador__text}>Lidia Rodríguez Encabo en una peleadora de karate que compite en la modalidad de Kata, nacida el 23 de abril de 1997 en Alcalá, España.</p>
            </article>
          </div>
        </article>
      </section>
    </main>
  )
}

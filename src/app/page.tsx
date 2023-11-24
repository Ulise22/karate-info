import Image from 'next/image'
import kobudo from '@/assets/homepage/articles/karate_kobudo.jpg'
import kata from '@/assets/homepage/articles/karate_kata.jpg'
import styles from './page.module.css'

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
          <p>El karate es un arte marcial con origen en</p>
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
          <p>El karate es un arte marcial con origen en</p>
        </article>
      </section>
    </main>
  )
}

import styles from './hero.module.css'

export default function HeroHomepage () {
    return(
    <section className={styles.hero}>
        <article className={styles.hero__container}>
          <h1 className={styles.hero__title}>Karate Info</h1>
          <p className={styles.hero__text}>Desde este espacio buscamos dar la mejor información sobre el Karate. Aportaremos artículos con información sobre los peleadores más conocidos de este deporte, y sobre todo lo relacionado con este Arte Marcial.</p>
        </article>
        <article className={styles.hero__image}></article>
      </section>
    )
}
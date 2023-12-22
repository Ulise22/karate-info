import styles from './page.module.css'
/* Articles Images */
import defensa from '@/assets/homepage/articles/defensa_personal.jpg'
import adultos from '@/assets/homepage/articles/karate_adultos.jpg'
import dans from '@/assets/articles-preview/dans.jpg'
import taekwondo from '@/assets/homepage/articles/taekwondo-vs-karate.jpg'
import dojoKun from '@/assets/homepage/articles/dojo_kun.svg'
import aka from '@/assets/articles-preview/aka_ao.jpg'
import enpi_kata from '@/assets/articles-preview/enpi_kata.jpg'
import marcial from '@/assets/articles-preview/am_karate.jpg'
/*Peleadores Images */
import higa from '@/assets/homepage/peleadores/oscar_higa.jpg'
import lidia from '@/assets/homepage/peleadores/lidia_rodriguez.jpg'
import rafael from '@/assets/homepage/peleadores/aghayev_rafael.jpg'
import yorgelis from '@/assets/homepage/peleadores/yorgelis_salazar.jpg'
/* Estílos Images */
import shorinji from '@/assets/homepage/articles/shorinji_ryu.jpg'
import kata from '@/assets/homepage/articles/karate_kata.jpg'
import kobudo from '@/assets/homepage/articles/karate_kobudo.jpg'
import shokotan from '@/assets/homepage/articles/shotokan.jpg'
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
            <ArticleCard artiURL='/articulos/defensa-personal-karate' artImage={defensa} title='Defensa Personal Karate' text='¿Es efectivo el karate para la defensa personal? Como muchas artes marciales, saber karate puede ser útil a la hora de encontrarte en situaciones que requieran que te defiendas...' />
            <ArticleCard artiURL='/articulos/karate-adultos' artImage={adultos} title='Karate para Adultos' text='¿Se puede aprender karate siendo adulto? La respuesta es que se puede aprender karate a cualquier edad, pero perfeccionar las técnicas enseñadas requiere de un tiempo y una practica exhaustivas...' />
            <ArticleCard artiURL='/articulos/dans-karate' artImage={dans} title='Dans Karate' text='Dan es la denominación que se le da a los diferentes rangos del sistema de graduación dankyuisei...' />
            <ArticleCard artiURL='/articulos/karate-taekwondo' artImage={taekwondo} title='Karate y Taekwondo' text='La princiapal diferencia entre estas 2 artes marciales consiste en que el karate abarca movimientos más amplios que el taekwondo, que hace principalmente uso de las patadas...' />
            <ArticleCard artiURL='/articulos/dojo-kun' artImage={dojoKun} title='Dojo Kun' text='El Dojo Kun es una serie de preceptos que suelen estar colgados en la pared de un dojo de artes marciales japonesas como el Karate o el Judo...' />
            <ArticleCard artiURL='/articulos/aka-ao-karate' artImage={aka} title='Aka Ao Karate' text='¿Qué significa aka y AO en karate? Al comienzo de cada encuentro, uno de los contendientes con cinturón rojo (AKA) y otro con cinturón azul (AO), se alinearán en el perímetro del área de competición mirando al Juez Jefe...' />
            <ArticleCard artiURL='/articulos/enpi-kata' artImage={enpi_kata} title='Enpi Kata' text='El kata Enpi (el vuelo de la golondrina) es uno de los katas más avanzados del estilo Shokotan...' />
            <ArticleCard artiURL='/articulos/arte-marcial-karate' artImage={marcial} title='Arte Marcial Karate' text='El karate es un arte marcial ded origen asiático, con raíces en otras artes marciales chinas y que sobre todo se popularizó en japón...' />
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
        <article className={styles.article}>
          <h2 className={styles.article__title}>Historia del karate</h2>
          <p>Los orgines del karate datan del siglo XVI en lo que hoy en día es la Prefectura de Okinawa. Está fuertemente influenciado por las artes marciales chinas, el Kung Fu principalmente, y se caracterizó por hacer uso de los puños y de técnicas provenientes de la lucha nativa. Lo que inspiró e influenció al karate moderno tal y como lo hacemos hoy en día, tiene que ver distintas artes marciales japonesas del siglo XX, como lo son el <b>Kendo</b>, el <b>Judo</b> y el <b>Aikido</b>. Lo que dió lugar al antecesor del karate, el &quot;TE&quot;, fue la necesidad de los guerreros nobles de defender al último rey de Okinawa y a sí mismos de los invasores japoneses pertenecientes al clan Satsuma, los <b>Samuráis</b>, quienes perpetraban abusos a la población civil que vivía en aquellas islas.</p>
        </article>
        <article className={styles.article}>
          <h2 className={styles.article__title}>Estílos de Karate</h2>
          <div className={styles.article__card__container}>
            <ArticleCard artiURL='/articulos/karate-kobudo' artImage={kobudo} title='Karate Kobudo' text='El karate Kobudo es un arte marcial japonés que estudia el uso de las armas tradicionales de madera o metal...' />
            <ArticleCard artiURL='/articulos/karate-kata' artImage={kata} title='Karate Kata' text='Los kata de karate son un conjunto de movimientos practicados solo o en pareja en una clase de artes marciales...' />
            <ArticleCard artiURL='/articulos/karate-shokotan' artImage={shokotan} title='Karate Shokotan' text='El karate Shokotan es el primer estilo de karate-do japonés. Desarrollado por el maestro Gichin Funakoshi...' />
            <ArticleCard artiURL='/articulos/shorinji-ryu' artImage={shorinji} title='Shorinji Ryu' text='El Shorinji Ryu es uno de los estilos más antiguos del karate okinawense. Sus katas combinan la distancia corta y la larga, los desplazamientos y técnicas combinan un rectilíneo con lo circular...' />
          </div>
        </article>
      </section>
    </main>
  )
}

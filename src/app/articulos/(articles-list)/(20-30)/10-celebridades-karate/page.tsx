import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import Link from 'next/link'
import Image from 'next/image'
import lee from '@/assets/famosos/hero/bruce_lee_hero.jpg'
import courteney from '@/assets/inside-articles/famosos-karatecas/Courteney_Cox.jpg'
import ritchie from '@/assets/inside-articles/famosos-karatecas/guy-ritchie.jpg'
import elvis from '@/assets/inside-articles/famosos-karatecas/elvis-presley.jpg'
import chuck from '@/assets/famosos/hero/chuck__hero.jpg'
import lundgren from '@/assets/famosos/hero/dolph_hero.jpg'
import snipes from '@/assets/famosos/hero/wesley_snipes_hero.jpg'
import vanDamme from '@/assets/famosos/hero/van_damme-hero.jpg'
import seagal from '@/assets/famosos/hero/steven_seagal_hero.jpg'
import michael from '@/assets/famosos/hero/michael-jai_white_hero.jpg'
import lautner from '@/assets/famosos/hero/taylor_lautner_hero.jpg'

export default function CelebridadesKarate () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='10 Famosos Karatecas' img={lee} />
            <section className={styles.article__container}>
                <h2>10 Celebridades que Practican Karate y no lo sabías</h2>
                <p>El karate es una de las artes marciales más practicadas del mundo, y ha alcanzado una popularidad consdierable, especialmente con la llegada a la pantalla grande de algunas películas que hacen foco en este arte marcial en particular. Por ello no es de extrañar que existan varias personas del mundo del cine y la televisión que también sean apasionadas del <Link href='/articulos/karate-do'>Karate-do</Link>.</p>
                <h2>Chuck Norris</h2>
                <Image className={styles.article__image} src={chuck} alt='Chuck Norris' />
                <p>Chuck Norris, la mítica estrella del cine de acción, es un gran karateca, que se ha perfeccionado tanto en este arte marcial, que supo ser campeón mundial desde 1968, manteniendo y defendiendo su título durante 6 años consecutivos.</p>
                <h2>Guy Ritchie</h2>
                <Image className={styles.article__image} src={ritchie} alt='Courteney Cox' />
                <p>El director de cine, productor y gionista británico, es otro de lo que que tiene un muy buen nivel en diferentes artes marciales, destacan sus concimientos en el Karate <Link href='/estilos/karate-shotokan'>Shotokan</Link>, y en el Judo donde es cinturón negro.</p>
                <h2>Dolph Lundgren</h2>
                <Image className={styles.article__image} src={lundgren} alt='Dolph Lundgren' />
                <p>El actor sueco Dolph Lundgren, reconocido por papeles como el de Drago en Rocky o por personajes como He-man, es un practicante del estilo de karate <Link href='/estilos/kyokushin-kai'>Kyokushinkai</Link>, donde es cinturón negro 4°DAN. Además, ha participado de los campeonatos de karate a pleno contacto europeos en los años 1980 y 1981, campeonatos que ganó, junto con el torneo de de peso pesado en Australia en 1982, torneo que también ha ganado.</p>
                <h2>Wesley Snipes</h2>
                <Image className={styles.article__image} src={snipes} alt='Wesley Snipes' />
                <p>Wesley Snipes es una de las figuras destacadas del cine de acción, en especial luego de que protagonizara e interpretara al héroe de Marvel, Blade, en los años 90. Para destacar en el cine de acción, fue de gran ayuda el entrenamiento que recibió en el Karate, en el estilo <Link href='/estilos/karate-shotokan'>Shotokan</Link>, donde es cinturón negro 5°DAN. Además destaca en el Hapkido, donde es cinturón negro 2°DAN.</p>
                <h2>Jean-Claude Van Damme</h2>
                <Image className={styles.article__image} src={vanDamme} alt='Jean-Claude Van Damme' />
                <p>Jean-Claude Van Damme no sólo era un practicante casual de este arte marcial, sino que desde los 15 comenzó su carrera competitiva en Bélgica, logrando formar parte del equipo nacional de Karate-do, donde consiguió ganar el campeonato europeo el 26 de diciembre de 1979 en Le Coupe Francois Persoons en Bruselas.</p>
                <p>Se especializa en el estilo <Link href='/estilos/karate-shotokan'>Shotokan</Link>, que entrena desde los 10 años y donde es cinturón negro, y a lo largo de su carrera competitiva ha conseguido un récord de 44 victorias y tan sólo 4 derrotas.</p>
                <h2>Steven Seagal</h2>
                <Image className={styles.article__image} src={seagal} alt='Steven Seagal' />
                <p>Más allá de que se le conoce más por su especialidad en en el Aikido, donde es cinturón negro 7°DAN, desde su juventud, el primer arte marcial que comenzó a entrenar fue el Karate, específicamente en el estilo <Link href='/estilos/shorinji-ryu'>Shorin Ryu</Link> de la mano del sensei <b>Sakamoto</b>. Debido al tiempo que estuvo entrenando, comenzaría a realizar exhibiciones diarias de karate en el Japanese Deer Park en el Sur de California.</p>
                <h2>Elvis Presley</h2>
                <Image className={styles.article__image} src={elvis} alt='Elvis Presley' />
                <p>Aunque no muchos lo sepan, el cantante y actor estadounidense Elvis Presley, es cinturón negro en Karate 1°DAN, donde destaca en la variante Kenpo, la cual practicó junto al maestro creador de este estilo, Ed Parker.</p>
                <h2>Michael Jai White</h2>
                <Image className={styles.article__image} src={michael} alt='Michael Jai White' />
                <p>Michael Jai White, no destaca sólo como un karateca, sino que como un artista marcial completo, dado que desde que comenzó a entrenar artes marciales a los 7 años, se ha convertido en cinturón negro de los estilos <Link href='/estilos/gojoryu'>Gojo Ryu</Link> (3°DAN), <Link href='/estilos/kyokushin-kai'>Kyokushinkai</Link> (3°DAN), <Link href='/estilos/karate-shotokan'>Shotokan</Link> y en el <b>Kobudo</b>. No sólo eso, sino que también posee 2 cinturones negros en las artes marciales coreanas Taekwondo y Tang Soo Do.</p>
                <h2>Taylor Lautner</h2>
                <Image className={styles.article__image} src={lautner} alt='Taylor Lautner' />
                <p>El actor que supo hacerse de una gran fama con la saga de películas Crepusculo, durante su infancia pasó gran parte de esta entrenando karate, llegando incluso a competir por varios torneos en donde tuvo una participación destacada. A los 6 años aprendió este arte marcial en la escuela Fabiano&apos;s Karate School en Holland, Michigan, donde su entrenamiento lo llevó a ganar 3 medalla de oro representando a su país en la World Karate Association, en la modalidad Junior World Forms and Weapons.</p>
                <h2>Courteney Cox</h2>
                <Image className={styles.article__image} src={courteney} alt='Courteney Cox' />
                <p>La actriz que supo destacar en la serie estadounidense de FRIENDS, practica karate desde hace mucho tiempo, entrenando varias por semana. Públicamente se mostrado muy contenta con los beneficios físicos que representó para ella la práctica de este arte marcial. </p>
            </section>
        </main>
    )
}
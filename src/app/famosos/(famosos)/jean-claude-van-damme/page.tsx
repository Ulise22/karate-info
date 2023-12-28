import styles from '@/app/famosos/famoso.module.css'
import vanDamme from '@/assets/famosos/van_damme-hero.jpg'
import ArticlesHero from '@/components/ArticlesHero'
import Link from 'next/link'

export default function VanDamme () {
    return(
        <main className={styles.famoso}>
            <ArticlesHero title='Jean-Claude Van Damme' img={vanDamme} />
            <section className={styles.famoso__article}>
                <p>Jean-Claude Van Damme es famoso actor de hollywood, guionista, productor, director, editor de cine, boxeador, kickbóxer, karateca, escenógrafo, artista marcial, actor de voz y compositor que vislumbró a todos con sus increíbles películas en donde demostraba al mundo su capacidad de ejecutar escenas de acción a la perfección gracias a sus dotes como artista marcial.</p>
                <p>Su nombre completo es <b>Jean-Claude Camille François Van Varenberg</b> y nació el 18 de octubre de 1960 en la capital de Bélgica, Bruselas. Es hijo de Eliana y Eugène van Varenberg, su madre contadora pública y su padre florista.</p>
                <p>Desde pequeño, Van Damme era un gran admirador de las películas de acción protagonizadas por actores como <Link href='/famosos/bruce-lee'>Bruce Lee</Link> o <b>Steve McQueen</b>, por lo que a la edad de 10 años comenzó a entrenar karate en el <b>Centro Nacional de Karate</b> en Brucelas, donde se inició en el estilos <Link href='/estilos/karate-shotokan'>Shotokan</Link> bajo la enseñanza del maestro Claude Goetz. Al mismo tiempo, comenzó a tomar clases de balet durante 5 años con la finalidad de ganar flexibilidad, danza de la que dijo: &quot;Si puedes sobrevivir a un entrenamiento de ballet, puedes sobrevivir a un entrenamiento de cualquier otro deport&quot;. Durante su adolescencia comenzó a entrenar con pesas para mejorar su aspecto físico y desarrollar musculatura, hasta que en 1978 montó su propio gimnasio en la ciudad donde había nacido, llamado &quot;California Gym&quot;. Más tarde Van Damme terminaría ganando el título de fisicoculturismo &quot;Míster Bélgica&quot;.</p>
                <p>En 1982 viajó a Estados Unidos a Los Ángeles para lograr convertirse en actor de cine, durante el tiempo que vivió allí, mientras buscaba su primer papel, trabajó como taxista, repartidor de pizza, conductor de limunsinas, guardaespaldas, instructor de karate, y masajista, entre otros. Su primer papel lo conseguiría gracias a la ayuda de <Link href='/famosos/chuck-norris'>Chuck Norris</Link> con quien había estado entrenando hacía varios meses. Norris le había conseguido un pequeño papel en la cinta de acción Missing in Action de 1984.</p>
                <p>Su primer éxito llegaría con la película <b>Contacto Sangriento</b>, la cual protagonizaría en 1988 y la cual lo llevaría a la fama mundial como actor de artes marciales. Este éxito es el que precedería a su protagónico <b>Kickboxer</b> de 1989, que lo comenzaría a consolidar en la industria.</p>
                <h2 className={styles.famoso__article__subtitle}>Jean-Claude Van Damme Karate</h2>
                <p>A los 15 años, comenzó su carrera competitiva en Bélgica, llegando a ser parte del equipo nacional de <Link href='/articulos/karate-do'>Karate-do</Link>. Un año después comenzaría a competir en la modalidad <b>Full Contact</b>, logrando de 1976 a 1980, obtuvo un récord de 44 victorias y 4 derrotas en peleas dentro y fuera de torneos de contacto y semi-contact. Siendo miembro del equipo belga de karate, consiguió ganar el campeonato europeo el 26 de diciembre de 1979 en Le Coupe Francois Persoons en Bruselas.</p>
                <p>Van Damme ya venía entrenando karate desde los 10 años de edad, especializandose en el estilos Shotokan, donde luego de años de entrenamiento terminaría consiguiendo el cinturón negro de primer <Link href='/articulos/dans-karate'>Dan</Link>.</p>
                <h2 className={styles.famoso__article__subtitle}>Jean-Claude Van Damme Películas</h2>
                <p>La lista de las películas de Jean-Claude Van Damme está compuesta por: </p>
                <ul>
                    <li>(1979) -	Een vrouw tussen hond en wolf</li>
                    <li>(1984) -    Rue Barbare</li>
                    <li>(1984) -    Monaco Forever</li>
                    <li>(1984) -    Missing in Action</li>
                    <li>(1984) -    Breakin&apos;</li>
                    <li>(1985) -	No Retreat, No Surrender</li>
                    <li>(1988) -    Black Eagle</li>
                    <li>(1988) -    Bloodsport</li>
                    <li>(1989) -    Kickboxer</li>
                    <li>(1989) -    Cyborg</li>
                    <li>(1990) -    Lionheart</li>
                    <li>(1990) -    Death Warrant</li>
                    <li>(1991) -	Double Impact</li>
                    <li>(1992) -	Universal Soldier</li>
                    <li>(1993) -    Nowhere to Run</li>
                    <li>(1993) -    Cyborg 2</li>
                    <li>(1993) -    Last Action Hero</li>
                    <li>(1993) -    Hard Target</li>
                    <li>(1994) -    Timecop</li>
                    <li>(1994) -    Street Fighter: Ultimate Battle</li>
                    <li>(1995) -	Sudden Death</li>
                    <li>(1996) -    The Quest</li>
                    <li>(1996) -    Maximum Risk</li>
                    <li>(1997) -	Double Team</li>
                    <li>(1998) -    Knock Off</li>
                    <li>(1998) -    Legionnaire</li>
                    <li>(1999) -    Universal Soldier: The Return</li>
                    <li>(1999) -    Van Damme&apos;s Inferno</li>
                    <li>(2001) -    Replicant</li>
                    <li>(2001) -    The Order</li>
                    <li>(2002) -	Derailed</li>
                    <li>(2003) -	In Hell</li>
                    <li>(2004) -    Narco</li>
                    <li>(2004) -    Wake of Death</li>
                    <li>(2006) -    Second in Command</li>
                    <li>(2006) -    The Hard Corps</li>
                    <li>(2006) -    SINAV</li>
                    <li>(2007) -	Until Death</li>
                    <li>(2008) -    The Shepherd: Border Patrol</li>
                    <li>(2008) -    JCVD</li>
                    <li>(2010) -	Universal Soldier: Regeneration</li>
                    <li>(2011) -    Rzhevsky Versus Napoleon</li>
                    <li>(2011) -    Beur sur la ville</li>
                    <li>(2011) -    Kung Fu Panda 2</li>
                    <li>(2011) -    Assassination Games</li>
                    <li>(2012) -    Universal Soldier: Day off reckoning</li>
                    <li>(2012) -    Dragon Eyes</li>
                    <li>(2012) -    Six bullets</li>
                    <li>(2012) -    The Expendables 2</li>
                    <li>(2013) -    Welcome to the Jungle</li>
                    <li>(2013) -    U.F.O.</li>
                    <li>(2013) -    Enemies Closer</li>
                    <li>(2014) -    Swelter</li>
                    <li>(2014) -    Pound of Flesh</li>
                    <li>(2015) -    Full Love (The Eagle Path)</li>
                    <li>(2015) -    kickboxer: Vengeance</li>
                    <li>(2015) -    Jian Bing Man</li>
                    <li>(2015) -    Yüksek Derece</li>
                    <li>(2015) -    The Tower</li>
                    <li>(2017) -    Kill&apos;em All</li>
                    <li>(2017) -    kickboxer: Retaliation</li>
                    <li>(2017) -   	Black Water</li>
                    <li>(2018) -	Lukas</li>
                    <li>(2019) -    Falconman</li>
                    <li>(2019) -    We Die Young</li>
                    <li>(2021) -    The Last Mercenary</li>
                    <li>(2021) -    Bloodsport Redux</li>
                    <li>(2022) -    What&apos;s My Name?</li>
                    <li>(2022) -    minions: The Rise of Gru</li>
                </ul>
            </section>
        </main>
    )
}
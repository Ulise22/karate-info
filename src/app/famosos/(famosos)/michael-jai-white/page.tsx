import styles from '@/app/famosos/famoso.module.css'
import michael from '@/assets/famosos/michael-jai_white_hero.jpg'
import ArticlesHero from '@/components/ArticlesHero'
import Link from 'next/link'

export default function BruceLee () {
    return(
        <main className={styles.famoso}>
            <ArticlesHero title='Michael Jai White' img={michael} />
            <section className={styles.famoso__article}>
                <p>Michael Jai White es un actor de cine y televisión, culturista y profesor de eduación especial que es conocido por sus películas de acción y artes marciales, también es un destacado artista marcial estadounidense que cuenta con más de 7 cinturones negros legítimos en los estilos de artes marciales japoneses y coreanas que supo practicar a lo largo de su carrera. Quizás el personaje por el que más se lo tenga presente sea por el superhéroe <b>Spawn</b>, a quien le hicieron su película en 1997.</p>
                <p>Michael nació el 10 de noviembre de 1967 en la ciudad estadounidense de Brooklyn, New York, donde pasó la mayor parte de su infancia hasta que se mudo a Bridgeport, Connecticut, en donde se graduaría en la Escuela Superior Central en 1988, en la que se destacó como deportista. Luego de su graduación comenzó a trabajar como profesor de educación especial hasta 1992, año en que dejó su trabajo para ir a vivir Los Ángeles para así poder dedicarse de lleno a la actuación y el cine. En aquella ciudad conocería a Courtenay Chatman, mujer que se convirtiría en su esposa en 2005, ella era una ginecóloga formada en Filadelfia y Los Ángeles, con quien tuvo una hija llamada Michelle Morgan, quien nació el 24 de diciembre de 2008.</p>
                <h2 className={styles.famoso__article__subtitle}>Michael Jai White Artes Marciales</h2>
                <p>Michael Jai White es un artista marcial muy destacado, especialmente en lo que respecta al Karate, dado que es poseedor del cinturón negro de los estilos: <Link href='/estilos/gojuryu'>Karate Goju Ryu</Link> (donde es 3° dan con el afamado maestro Eddie Morales), <Link href='/estilos/kyokushin-kai'>Karate Kyokushinkai</Link> (°3 dan), <Link href='/estilos/karate-shotokan'>Karate-Do Shotokan</Link> (3° dan) y en <b>Kobudo</b>. Además posee 2 cinturones negros en las artes marciales coreanas <b>Taekwondo</b> y <b>Tang Soo Do</b>.</p>
                <p>White comenzó su entrenamiento durante su niñez en las artes marciales tradicionales del Jiu-jitsu y del <Link href='/articulos/karate-do'>Karate-Do</Link> a la edad de siete años, para después dedicarse a otras variantes y estilos.</p>
                <h2 className={styles.famoso__article__subtitle}>Michael Jai White Películas</h2>
                <p>La filmografía de Michael Jai White está compuesta por: </p>
                <h3>Cine</h3>
                <ul>
                    <li>The Toxic Avenger Part II (1989)</li>
                    <li>The Toxic Avenger Part III: The Last Temptation of Toxie (1989)</li>
                    <li>Teenage Mutant Ninja Turtles II: The Secret of the Ooze (1991)</li>
                    <li>Soldado universal (1992)</li>
                    <li>Full Contact (1993)</li>
                    <li>Lion Strike (1994)</li>
                    <li>Ballistic (1995)</li>
                    <li>Captive Heart: The James Mink Story (1996)</li>
                    <li>Shaughnessy (1996) </li>
                    <li>Spawn (1997)</li>
                    <li>City of Industry (1997)</li>
                    <li>Ringmaster (1998)</li>
                    <li>Thick as Thieves (1998)</li>
                    <li>Universal Soldier: The Return (1999)</li>
                    <li>Freedom Song (2000)</li>
                    <li>Exit Wounds (2001)</li>
                    <li>Trois 2: Pandora&apos;s Box (2002)</li>
                    <li>Justice (2003)</li>
                    <li>Hotel (2003) </li>
                    <li>Silver Hawk (2004)</li>
                    <li>Undisputed II: Last Man Standing (2006)</li>
                    <li>Why Did I Get Married (2007)</li>
                    <li>The Dark Knight (2008)</li>
                    <li>Black Dynamite (2009)</li>
                    <li>Blood and Bone (2009)</li>
                    <li>Why Did I Get Married Too? (2010)</li>
                    <li>One Angry Juror (2010)</li>
                    <li>Tactical Force (2011)</li>
                    <li>Never Back Down 2 (2011)</li>
                    <li>Somebody&apos;s Child (2012)</li>
                    <li>Falcon Rising (2014)</li>
                    <li>Echo Effect (2015)</li>
                    <li>Never Back Down 3 (2016)</li>
                    <li>The Crooked Man (2016)</li>
                    <li>Cops and Robbers (2017)</li>
                    <li>Every Day Is Christmas (2018)</li>
                    <li>Dragged Across Concrete (2018)</li>
                    <li>Triple Threat (2019)</li>
                    <li>The Hard Way (2019)</li>
                    <li>Welcome to Sudden Death (2020)</li>
                    <li>Assault on VA-33 (2021)</li>
                    <li>Send It! (2021)</li>
                    <li>The Outlaw Johnny Black (2021)</li>
                </ul>
                <h3>Televisión</h3>
                <ul>
                    <li>Soul Food (2001)</li>
                    <li>Justice League Unlimited (2006)</li>
                    <li>Tyler Perry&apos;s House of Payne (2008) </li>
                    <li>spawn: The Animation (voice: Barabbas)</li>
                    <li>The Legend of Bruce Lee (2008)</li>
                    <li>The Boondocks (2010)</li>
                    <li>Mortal Kombat: Rebirth (2010)2</li>
                    <li>Mortal Kombat: Legacy (2011)</li>
                    <li>Black Dynamite Black Dynamite</li>
                    <li>Arrow temporadas 2 y 7 (2013-2014; 2018-2019)</li>
                </ul>
                <p>Además de todos estos trabajos que realizó como actor, también dirigió un par de películas: <b>Never Back Down 2 (2011)</b> y <b>TheoryHy El Prodigio (2013)</b>. Fue guionista de otros 2 filmes: <b>Black Dynamite (2009)</b> y <b>Three Bullets (2009)</b>. Y trabajo como productor en las producciones de: <b>PVC-1 (2007)</b>, <b>Blood and Bone (2009)</b> y <b>Three Bullets (2009)</b>.</p>
            </section>
        </main>
    )
}
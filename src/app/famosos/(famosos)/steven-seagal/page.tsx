import styles from '@/app/famosos/famoso.module.css'
import seagal from '@/assets/famosos/hero/steven_seagal_hero.jpg'
import ArticlesHero from '@/components/ArticlesHero'
import Link from 'next/link'

export default function StevenSeagal () {
    return(
        <main className={styles.famoso}>
            <ArticlesHero title='Steven Seagal' img={seagal} />
            <section className={styles.famoso__article}>
                <p>Steven Seagal es un actor, director, productor, guionista, coreógrafo, entrenador, maestro experto en artes marciales y músico estadounidense. Que destaca en el mundo de las artes marciales por ser cinturón negro, 7°DAN en el arte marcial tradicional japonés del <b>Aikido</b>. Además de tener una gran y reconocida trayectoria en el mundo del cine.</p>
                <p>Steven Frederic Seagal nació el 10 de abril de 1952 en la ciudad de Lansing, ubicada en el Estado de Michigan, en Estados Unidos. Cuando tenía 17 años se mudó a Japón con su padre, dado que aquel era contratista de las fuerzas militares estadounidenses que tenían una base allí. En el país asiático comenzó a entrenar <b>Aikido</b> de la mano del maestro <b>Hiroshi Isoyama</b>, que se convertiría en su mentor, y que incluso le haría conocer al inventor del aikido, el maestro <b>Morihei Ueshiba</b>.</p>
                <p>Para el año 1985, Seagal volvería a los Estados Unidos, donde trabajaría como coreógrafo para las escenas de acción de varias películas. Un par de años más tarde, haría su debut como actor en la película <b>Above the Law</b>, de la mano del director <b>Andrew Davis</b> que en aquel entonces ya había recnocido que Seagal contaba con las facultades para convertirse en una estrella del cine. Tiempo después, en el año 1990, conseguiría su primer protagónico en la película de acción <b>Marked For Death</b>, donde haría relucir sus habilidades en el Aikido, usando varias de estas técnicas en la película, además de mostrar sus habilidad en el Kenjutsu (esgrima tradicional japonés). Desde entonces se ha labrado un nombre en el mundo del cine de acción. </p>
                <p>Steven Seagal, es vegetariano y es un practicante activista del budismo tibetano, pese a haberse iniciado en el budismo zen japonés.</p>
                <h2>Steven Seagal Karate y Artes Marciales</h2>
                <p>Steven Seagal en su juventud se mudó a la ciudad de California, Fullerton, donde trabajó como lavaplatos en un restaurante, al tiempo que comenzó a practicar artes marciales, concretamente <Link href='/articulos/karate-do'>Karate-do</Link>, en el estilo <Link href='/estilos/shorinji-ryu'>Shorin Ryu</Link>, bajo la tutela del sensei Sakamoto, quien un maestro de Okinawa. Aquel sensei le presentaría al maestro japonés <b>Fumio Demura</b>, especializado en el estilo <Link href='/estilos/shito-ryu'>Shito Ryu</Link>, con quien Seagal se asoció, formando parte de su equipo de exhibición de karate, con quienes realizaba exhibiciones diaras en el Japanese Deer Park, que era un parque de atracciones con temática japonesa en el sur de California.</p>
                <p>Seagal también cuenta con conocimientos en otras artes marciales, como lo son el <b>Kenjutsu</b>, el <b>Kendo</b> (ambas estilos de esgrima clásica japonesa), y en disciplinas como el judo o el jiu-jitsu. Sin embargo donde destacó en particular fue en el <b>Aikido</b>, donde es cinturón negro 7°DAN, y que aprendió en su juventud cuando viajó a Japón, gracias a las enseñanzas de su maestro, <b>Hiroshi Isoyama</b>.</p>
                <h2>Steven Seagal Filmografía</h2>
                <p>A lo largo de su carrera ha participado en diversos proyectos del mundo del cine y la televisión, que hemos enlistado aquí: </p>
                <ul>
                    <li>Above the Law (1988)</li>
                    <li>Hard to Kill (1990)</li>
                    <li>Marked for Death (1990)</li>
                    <li>Out for Justice (1991)</li>
                    <li>Alerta máxima (Under Siege) (1992)</li>
                    <li>On Deadly Ground (1994)</li>
                    <li>Alerta máxima 2 (Under Siege 2: Dark Territory) (1995)</li>
                    <li>Executive Decision (1996)</li>
                    <li>Glimmer Man (1996)</li>
                    <li>Fire Down Below (1997)</li>
                    <li>El último patriota (The Patriot) (1998)</li>
                    <li>Not Even the Trees (1998)</li>
                    <li>Exit Wounds (2001)</li>
                    <li>Ticker (2001)</li>
                    <li>The Path Beyond Thought (2001)</li>
                    <li>Half Past Dead (2002)</li>
                    <li>The Foreigner (2003)</li>
                    <li>Venganza ciega (Out for a Kill) (2003)</li>
                    <li>Las entrañas de la bestia (Belly of the Beast) (2003)</li>
                    <li>Clementine (2004)</li>
                    <li>Rescate al límite (Out of Reach) (2004)</li>
                    <li>yakuza: El imperio del sol naciente (Into the Sun) (2005)</li>
                    <li>sumergido: Alerta Total (Submerged) (2005)</li>
                    <li>Vengador (Today You Die) (2005)</li>
                    <li>Golpe al amanecer (Black Dawn) (2005)</li>
                    <li>Mercenary for Justice (2006)</li>
                    <li>Shadow Man (2006)</li>
                    <li>Equipo de ataque (2006)</li>
                    <li>El vuelo de la ira (2007)</li>
                    <li>Urban Justice (2007)</li>
                    <li>Pistol Whipped (A tiro limpio) (2008)</li>
                    <li>The Onion Movie (2008)</li>
                    <li>Kill Switch (2008)</li>
                    <li>Against the Dark (Cazadores de sangre) (Contra la oscuridad) (2009)</li>
                    <li>Driven to Kill (Ruslan: venganza de un asesino) (2009)</li>
                    <li>The Keeper (El protector) (2009)</li>
                    <li>Red de corrupción (2009)</li>
                    <li>A Dangerous Man (Un hombre peligroso) (2010)</li>
                    <li>Machete (2010)</li>
                    <li>Born to Raise Hell (Nacido para matar) (2010)</li>
                    <li>Steven Seagal Lawman (serie documental) (2010)</li>
                    <li>Deadly Crossing (serie de TV) (2011)</li>
                    <li>Lethal Justice (2011)</li>
                    <li>True Justice (serie de TV) (2011-2012)</li>
                    <li>Maximum Conviction (2012)</li>
                    <li>Force of Execution (2013)</li>
                    <li>Juego sucio en Las Vegas (2014)</li>
                    <li>A Good Man (2014)</li>
                    <li>Absolution (2015)</li>
                    <li>El Arma Perfecta (The Perfect Weapon) (2015)</li>
                    <li>Código de honor (2016)</li>
                    <li>End of a Gun (2016)</li>
                    <li>Cartels (2017)</li>
                    <li>China Salesman (2017)</li>
                    <li>Attrition (2018)</li>
                    <li>General Commander (2019)</li>
                    <li>Beyond The Law (2019)</li>
                </ul>
            </section>
        </main>
    )
}
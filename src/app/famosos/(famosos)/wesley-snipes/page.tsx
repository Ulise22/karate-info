import styles from '@/app/famosos/famoso.module.css'
import wesley from '@/assets/famosos/hero/wesley_snipes_hero.jpg'
import ArticlesHero from '@/components/ArticlesHero'
import Link from 'next/link'

export default function WesleySnipes () {
    return(
        <main className={styles.famoso}>
            <ArticlesHero title='Wesley Snipes' img={wesley} />
            <section className={styles.famoso__article}>
                <h2>Weley Snipes Karate</h2>
                <p>Wesley Snipes es un actor, productor y artista marcial estadounidense, de recalcable fama y reconocimiento en el mundo del cine, en especial por su icónico personaje del cine de superhéroes, Blade, que interpreto entre los 90 y los 2000 en las 3 entregas de películas que hubo.</p>
                <p>Wesley Trent Snipes, nació el 31 de julio de 1962 en Orlando, Florida en los Estados Unidos, aunque creció en el barrio del Bronx, en Nueva York.</p>
                <p>Asistió a la Universidad del Estado de Nueva York, donde estudió interpretación durantes los años 80. En aquella misma decada debutó en Broadway, compaginando su carrera como actor con un trabajo en una compañía de teléfonos. Haría su debut en la pantalla grande en una producción de Warner, en la película <b>Gatos Salvajes</b> de Goldie Hawn. El productor y director Spike Lee, fue quien ayudó a que su carrera despegara, dado que lo incluyó en varias de sus películas en aquellos años.</p>
                <p>Para la decada de los 90, ya estaba consagrado como una estrella del cine de acción, habiendo aparecido en varias películas. Sus habilidades en las artes marciales fueron una gran contribución a que esto sucediera, dado que es cinturón negro 5°DAN de <Link href='/articulos/karate-do'>Karate-do</Link> en el estilo <Link href='/estilos/karate-shotokan'>Shotokan</Link>, también es cinturón negro 2°DAN en arte marcial <b>Hapkido</b>. Además, a lo largo de su carrera actoral ha ido incorporando movimientos de Capoeira, Kung-Fu shaolin y Jiu-Jitsu.</p>
                <p>Respecto a su vida personal, ha estado casado en 2 ocasiones. La primera de ellas con April Snipes, con quien tiene un hijo; y la segunda ocasión, fue con la pintora surcoreana Nakyung Park en 2003, con quien tiene 4 hijos y con quien aún continúa casado. Snipes pasa mucho tiempo en el país natal de su mujer, Corea del Sur, al que ha llamado &quot;su segundo hogar&quot;.</p>
                <p>Además tiene 5 hijos, todos producto de sus 2 matrimonios. El primer de ellos Jelani Asar Snipes, que nació en 1988 y es producto de su primer matrimonio, y los otros cuatro hijos de su segunda esposa Nakyung Park, ellos son Iset Jua-T Snipes, nacido en 2001; Alaafia Jehu-T Snipes, nacido en 2004; Akhenaten Kihwa-T Snipes, nacido en 2007; y Alimayu Moa-T Snipes, que también nació en el año 2007.</p>
                <p>Además ha llegado a estar en prisión, de 2010 a 2013 por evasión de impuestos, luego de que un juez estadounidense lo sentenciara a la pena máxima el 25 de abril de 2008. Finalmente fue puesto en libertad el 8 de abril de 2013.</p>
                <h2>Wesley Snipes Películas</h2>
                <p>A lo largo de su carrera, Wesley Snipes ha sido participe de variedad de producciones audiovisuales. Aquí el listado de ellas: </p>
                <h3>Cine</h3>
                <ul>
                    <li>Wildcats</li>
                    <li>Calles de oro</li>
                    <li>Critical Condition</li>
                    <li>Bad</li>
                    <li>Major League</li>
                    <li>Mo&apos; Better Blues</li>
                    <li>El rey de Nueva York</li>
                    <li>New Jack City</li>
                    <li>Fiebre salvaje</li>
                    <li>The Waterdance</li>
                    <li>White Men Can&apos;t Jump</li>
                    <li>Passenger 57</li>
                    <li>Boiling Point</li>
                    <li>Rising Sun</li>
                    <li>Demolition Man</li>
                    <li>Sugar Hill</li>
                    <li>Drop Zone</li>
                    <li>To Wong Foo, Thanks for Everything! Julie Newmar</li>
                    <li>Money Train</li>
                    <li>Waiting to Exhale</li>
                    <li>The Fan</li>
                    <li>John Henrik Clarke: A Great and Mighty Walk</li>
                    <li>Murder at 1600</li>
                    <li>Después de una noche</li>
                    <li>Jackie Chan: My Story</li>
                    <li>US Marshals</li>
                    <li>Blade</li>
                    <li>Down in the Delta</li>
                    <li>Play It to the Bone</li>
                    <li>The Art of War</li>
                    <li>Blade II</li>
                    <li>Liberty Stands Still</li>
                    <li>Zig Zag</li>
                    <li>Undisputed</li>
                    <li>Unstoppable</li>
                    <li>blade: Trinity</li>
                    <li>7 Seconds</li>
                    <li>The Marksman</li>
                    <li>Chaos</li>
                    <li>The Detonator</li>
                    <li>Hard Luck</li>
                    <li>The Contractor</li>
                    <li>The Art of War II: Betrayal</li>
                    <li>Brooklyn&apos;s Finest</li>
                    <li>Game of Death</li>
                    <li>Gallowwalkers</li>
                    <li>The Expendables 3</li>
                    <li>Chi-Raq</li>
                    <li>Armed Response</li>
                    <li>The Recall</li>
                    <li>Dolemite Is My Name</li>
                    <li>Cut Throat City</li>
                    <li>Coming 2 America</li>
                </ul>
                <h3>Televisión</h3>
                <ul>
                    <li>Miami Vice</li>
                    <li>Vietnam War Story</li>
                    <li>A Man Called Hawk</li>
                    <li>The Days and Nights of Molly Dodd</li>
                    <li>H.E.L.P.</li>
                    <li>America&apos;s Dream</li>
                    <li>Happily Ever After: Fairy Tales for Every Child</li>
                    <li>Futuresport</li>
                    <li>Masters of the Martial Arts Presented by Wesley Snipes</li>
                    <li>Disappearing Acts</li>
                    <li>The Bernie Mac Show</li>
                    <li>The Player</li>
                </ul>
            </section>
        </main>
    )
}
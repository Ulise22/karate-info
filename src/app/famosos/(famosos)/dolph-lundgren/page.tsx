import styles from '@/app/famosos/famoso.module.css'
import dolph from '@/assets/famosos/hero/dolph_hero.jpg'
import ArticlesHero from '@/components/ArticlesHero'
import Link from 'next/link'

export default function Dolph () {
    return(
        <main className={styles.famoso}>
            <ArticlesHero title='Dolph Lundgren' img={dolph} />
            <section className={styles.famoso__article}>
                <p>Dolph Lundgren es un famoso actor de hollywood sueco, aunque también supo ser director, guionista, ingeniero químico, modelo y especialista en artes marciales, siendo un conocedor tanto del Judo como del <Link href='/articulos/karate-do'>Karate-do</Link>, llegando a ser cinturón negro 4° dan en el estilo <Link href='/estilos/kyokushin-kai'>Kyokushinkai</Link>. También cuenta con experiencia como boxeador amateur, participando de una pelea de exhibición contra Oleg Taktarov en 2007. Tiene una maestría en Ingeniería Química formación académica en el MIT en esa misma área de la ciencia, y es políglota, ya que domina seis idiomas. Probablemente el grueso de su fama y reconocimiento se deba al mítico papel de <b>Drago</b> en <b>Rocky IV</b> que le tocó interpretar en 1985.</p>
                <p>Hans Lundgren, nació el 3 de noviembre de 1957 en la provincia sueca de Estocolmo. Realizó el servicio militar en su país y se graduó en el Instituto Real Sueco de Tecnología.  Luego obtuvo un máster en ingeniería química en la Universidad de Estocolmo (1982), centro donde compaginaba sus estudios con el trabajo de portero/guardaespaldas en una discoteca. Al siguiente año consiguió una beca de matemáticas en el MIT en 1983.</p>
                <p>En uno de sus viajes a Boston fue cuando consiguió la oportunidad de su vida que le abriría las puertas al mundo de Hollywood, donde Warren Robertson le ofreció la oportunidad de presentarse al casting para el papel de Ivan Drago en Rocky IV. 9 meses después de realizar su audición, recibió la llamada de <b>Sylvester Stallone</b>, quien le comunicó que había conseguido el papel gracias a su estupenda imagen y gran musculatura tan apropiada para ese papel.</p>
                <p>Entre las diferentes relaciones que supo tener a lo largo de su vida, destaca la que mantuvo con Anette Qviberg, diseñadora de joyería y estilista de moda desde 1994, con quien se casó y con quien tuvo 2 hijas, Idis Lundgren y Greta Eveline Lundgren.</p>
                <h2 className={styles.famosos__article__subtitle}>Dolph Lundgren Karate</h2>
                <p>Fue a la edad de 16 años cuando Dolph comenzó a interesarse en las artes marciales, en un principio entrenando Judo, aunque dejó este al poco tiempo para meterse de lleno en el Karate, arte marcial en el cual ostenta el grado de cinturón negro cuarto Dan en karate estilo Kyokushinkai, asimismo ganó los campeonatos de karate a pleno contacto europeos en 1980 y 1981 y un torneo de peso pesado en Australia en 1982. Fue también miembro del equipo de precipitación de karate Kyokushin sueco para el Torneo Abierto del Mundo de 1979, arreglado por la Organización de Karate Kyokushin. Actualmente es un difusor incansable de este estilo de karate a nivel mundial, con cursos y demostraciones.</p>
                <h2 className={styles.famosos__article__subtitle}>Dolph Lundgren Cáncer</h2>
                <p>Dolph Lundgren confesó recientemente en 2023 que le tocó sufrir una severa lucha contra un cáncer de riñón, que le fue diagnosticado en 2015, cuando ya era de avanzada etapa, y convirtiendosé en agresivo en 2020, al punto tal de que un médico le llegó a decir que le quedaba entre 2 o 3 años de vida, &quot;Estaba de vuelta en Suecia y tenía algún tipo de reflujo ácido, no sabía qué era, así que me hice una resonancia magnética. Descubrieron que había algunos tumores más alrededor de esa área. Encontraron un tumor más en el hígado. En ese momento me di cuenta de que esto era algo serio&quot; contó el mismo Dolph. Gracias a la ayuda de un especialista y con tratamiento particular fue capaz de superar esta sombría enfermedad en 2023, cuando se animaría a contar todo lo que tuvo que pasar.</p>
                <h2 className={styles.famosos__article__subtitle}>Dolph Lundgren Películas</h2>
                <p>Las películas en las que Dolph Lundgren ha participado, ya sea de forma protagonica o interpretando personajes secundarios son:</p>
                <ul>
                    <li>(1985) - A View to a Kill</li>
                    <li>(1985) - Rocky IV</li>
                    <li>(1987) - Masters of the Universe</li>
                    <li>(1987) - Maximum Potential</li>
                    <li>(1988) - Red Scorpion</li>
                    <li>(1988) - R.P.G. II</li>
                    <li>(1989) - The Punisher</li>
                    <li>(1990) - I Come in Peace</li>
                    <li>(1991) - I Come in Peace</li>
                    <li>(1991) - Showdown in Little Tokyo</li>
                    <li>(1992) - Universal Soldier</li>
                    <li>(1993) - Joshua Tree</li>
                    <li>(1994) - Sunny Side Up</li>
                    <li>(1994) - Pentathlon</li>
                    <li>(1994) - Men of War</li>
                    <li>(1995) - Johnny Mnemonic</li>
                    <li>(1995) - The Shooter</li>
                    <li>(1996) - Silent Trigger</li>
                    <li>(1997) - The Peacekeeper</li>
                    <li>(1998) - The Minion</li>
                    <li>(1998) - Sweepers</li>
                    <li>(1999) - Bridge of Dragons</li>
                    <li>(1999) - Storm Catcher</li>
                    <li>(2000) - Jill Rips</li>
                    <li>(2000) - The Last Warrior</li>
                    <li>(2000) - Agent Red</li>
                    <li>(2001) - Hidden Agenda</li>
                    <li>(2003) - Detention</li>
                    <li>(2004) - Direct Action</li>
                    <li>(2004) - Fat Slags</li>
                    <li>(2004) - Retrograde</li>
                    <li>(2004) - The Defender</li>
                    <li>(2005) - The Mechanik</li>
                    <li>(2006) - The Inquiry</li>
                    <li>(2007) - Diamond Dogs</li>
                    <li>(2007) - Missionary Man</li>
                    <li>(2009) - Direct Contact</li>
                    <li>(2009) - Command Performance</li>
                    <li>(2009) - Universal Soldier: Regeneration</li>
                    <li>(2010) - Icarus</li>
                    <li>(2010) - The Expendables</li>
                    <li>(2011) - En el nombre del rey 2</li>
                    <li>(2012) - Small Apartments</li>
                    <li>(1012) - Stash House</li>
                    <li>(2012) - One in the Chamber</li>
                    <li>(2012) - The Expendables 2</li>
                    <li>(2012) - Universal Soldier: Day of Reckoning</li>
                    <li>(2013) - The Package</li>
                    <li>(2013) - Legendary</li>
                    <li>(2013) - Battle of the Damned</li>
                    <li>(2013) - Ambushed</li>
                    <li>(2013) - Blood of Redemption</li>
                    <li>(2014) - Puncture Wounds</li>
                    <li>(2014) - The Expendables 3</li>
                    <li>(2014) - Skin Trade: Tráfico humano</li>
                    <li>(2014) - Electric Boogaloo: The Wild, Untold Story of Cannon Films</li>
                    <li>(2015) - War Pigs</li>
                    <li>(2015) - The Good, the Bad and the Dead</li>
                    <li>(2015) - Shark Lake</li>
                    <li>(2015) - Riot</li>
                    <li>(2015) - Malchishnik</li>
                    <li>(2016) - Hail, Caesar!</li>
                    <li>(2016) - Kindergarten Cop 2</li>
                    <li>(2016) - Don&apos;t Kill It</li>
                    <li>(2016) - Female Fight Club</li>
                    <li>(2016) - Welcome To Willits</li>
                    <li>(2017) - Larceny</li>
                    <li>(2017) - Altitude</li>
                    <li>(2017) - Dead Trigger</li>
                    <li>(2017) - Stopping Traffic</li>
                    <li>(2018) - Black Water</li>
                    <li>(2018) - Creed II</li>
                    <li>(2018) - Aquaman</li>
                    <li>(2019) - The Tracker</li>
                    <li>(2019) - Acceleration</li>
                    <li>(2019) - Hard Night Falling</li>
                    <li>(2019) - One Night: Joshua vs. Ruiz</li>
                    <li>(2021) - Pups Alone</li>
                    <li>(2021) - Seal Team</li>
                    <li>(2021) - Castle Falls</li>
                    <li>(2021) - The Making of &apos;Rocky vs. Drago&apos;</li>
                    <li>(2022) - minions: The Rise of Gru</li>
                    <li>(2022) - Section Eight</li>
                    <li>(2022) - Operation Seawolf</li>
                    <li>(2022) - Come Out Fighting</li>
                    <li>(2023) - The Best Man</li>
                    <li>(2023) - Expend4bles</li>
                    <li>(2023) - Showdown at the Odessa</li>
                    <li>(2023) - Aquaman y el Reino Perdido</li>
                </ul>
            </section>
        </main>
    )
}
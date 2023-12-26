import styles from '@/app/famosos/famoso.module.css'
import vanDamme from '@/assets/famosos/van_damme-hero.jpg'
import ArticlesHero from '@/components/ArticlesHero'

export default function VanDamme () {
    return(
        <main className={styles.famoso}>
            <ArticlesHero title='Jean-Claude Van Damme' img={vanDamme} />
            <section className={styles.famoso__article}>
                <p></p>
                <h2 className={styles.famoso__article__subtitle}>Jean-Claude Van Damme</h2>
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
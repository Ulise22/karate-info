import styles from '../../components/peleador.module.css'
import enoeda from '@/assets/peleadores/Keinosuk-Enoeda.webp'
import ArticlesHero from '@/components/ArticlesHero'
import Link from 'next/link'

export default function Enoeda () {
    return(
        <main className={styles.peleador}>
            <ArticlesHero title='Keinosuke Enoeda' img={enoeda} />
            <section className={styles.peleador__article}>
                <h2 className={styles.peleador__article__subtitle}>Sensei Enoeda</h2>
                <p className={styles.peleador__article__text}>Keinosuke Enoeda es un karateca japonés, maestro del estilo <Link href='/estilos/karate-shotokan'>Shotokan</Link> de Karate, que destacó por ser el intructor jefe de la <b>Union de Karate de Gran Bretaña</b>, llegando a ser 8° Dan en vida, y siendole otorgado el 9° Dan luego de su muerte.</p>
                <p className={styles.peleador__article__text}>Keinosuke Enoeda nació el 4 de julio de 1935 en la isla japonesa de Kyushu. Desde joven comenzó a entrenar <b>Kendo</b> y <b>Judo</b> a la vez que jugaba Baseball. Su entrenamiento de pequeño escaló tan rápido que para la edad de 16 ya era 2° Dan en Judo. Durante su temprana adultez, fue a estudiar a la Universidad de Takushoku, donde luego de presenciar una demostración de karate, quedó maravillado por lo que vió y comenzó a estudiar este arte marcial de inmediato.</p>
                <p className={styles.peleador__article__text}>Luego de graduarse de la universidad, comenzó a estudiar en la Asociación Japonesa de Karate (JKA por sus siglas en inglés, Japan Karate Association) en Tokyo bajo la tutela del legendario <Link href='/peleadores/gichin-funakoshi'>Gichin Funakoshi</Link>, quie fue fundador del estilo <Link href='/estilos/karate-shotokan'>Shotokan</Link>, y quien reconcido como el padre del karate moderno. Además, entrenó con el también instructor de karate <b>Masatoshi Nakayama</b> y con el entrenador de Kumite <b>Taiji Kase</b>.</p>
                <p className={styles.peleador__article__text}>En 1961 peleó en un notable enfrentamiento contra <b>Keigo Abe</b>, a quien venció por decisión después de 6 prorrogas. Además de que ganaría el torneo JKA All Japan en 1963, contra el conocido karateca <b>Hiroshi Shirai</b>. Fue en este periodo donde se ganaría el apodo de <b>Tora</b>, que significa Tigre en japonés. Este apodo se lo ganaría, luego de que fuera así que <b>Nakayama</b> describiera la forma de pelear de Enoeda.</p>
                <p className={styles.peleador__article__text}>El 20 de abril de 1965, el maestro Enoeda se muda a Liverpool para comenzar a dar clases allí, siguiendo de esta forma la política de JKA de enviar instructores por todo el mundo para expandir el karate a otros países, viajó a Inglaterra con la compañía de los también instructores, <b>Shirai</b>, <b>Kanazawa</b> y <b>Kase</b>. Durante su estadía y tiempo de enseñanza, enseñó a <b>Harry Cook</b>, quien es un reconocido artista marcial y autor británico.</p>
                <p className={styles.peleador__article__text}>En 1969 se casó con su esposa Reiko, con quien se terminó instalando en Kingston, Surrey, también pertenecientes a Reino Unido. En 1971 tuvo un pequeño papel en la película de James Bond <b>Diamonds Are Forever</b>, donde interpretó a uno de los hombres de confianza de Ernst Stavro Blofeld&apos;s. Un año después, haría una demostración de Karate en la televisión en la cadena BBC, dicha demostración incluía Kihon (técnicas básicas) y katas. También formaría parte del primer programa de televisión británico en ser exclusivamente sobre Karate, <b>Open Door</b>.</p>
                <p className={styles.peleador__article__text}>Mientras Instructor en Jefe de KUGB, fue asistido por: Sadashige Kato (from c. 1966–1973), Shiro Asano (from 1968 to 1974), Hideo Tomita (from 1973 to 1978), Masao Kawasoe (from 1974 to 1982), and Yoshinobu Ohta (from 1982 to 2003).</p>
                <p className={styles.peleador__article__text}>A lo largo de su vida, escribió varios libros sobre karate, donde transmitía sus conocimientos y enseñanzas, tanto técnicas como filosóficas. Esos libros fueron: </p>
                <ul className={styles.peleador__article__text}>
                    <li>Shotokan: Advanced kata (1983, en 3 volumenes)</li>
                    <li>Shotokan Karate (1996)</li>
                    <li>Shotokan Karate: 10th Kyu to 6th Kyu (1996)</li>
                    <li>Shotokan Karate: 5th Kyu to Black Belt (1996)</li>
                    <li>Karate: Defence & attack (1996, co-authored)</li>
                    <li>Shotokan Karate: Free Fighting Techniques (1999, donde fue co-autor)</li>
                </ul>
                <p className={styles.peleador__article__text}>Finalmente, fallecería el 29 de marzo de 2003, luego de estar 4 meses con su tratamiento contra el cáncer de estómago, dejando atrás a su esposa Reiko y asus 2 hijos, Daisuke y Maya. El mismo día de su partida, sería recompenzado con el 9° Dan en Karate, por la Asociación Japonesa de Karate. Su funeral se celebraría el 21 de abril de ese año en Tokyo, en el Templo Hozoji del instructor JKA Iida Sensei.</p>
            </section>
        </main>
    )
}
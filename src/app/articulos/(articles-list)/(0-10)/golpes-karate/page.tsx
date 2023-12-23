import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import golpe from '@/assets/articles-big/golpe (2).jpg'

export default function Golpes () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Golpes de Karate' img={golpe} />
            <section className={styles.article__container}>
                <p>Como en todo arte marcial tradicional, el karate posee una serie de técnicas (o waza) propias, especialmente de golpeo, bloqueo y chequeo, con diferentes segmentos corporales. Aquí mencionaremos esos golpes.</p>
                <h2 className={styles.article__subtitle}>Dachi / Tachi waza</h2>
                <p>Es el conjunto de todas las posiciones o posturas de las piernas. Los aspectos que caracterizan cada posición son:</p>
                <ul>
                    <li>Superficie de asentamiento</li>
                    <li>Distribución del peso</li>
                    <li>Altura del centro de gravedad</li>
                    <li>Cadera abierta o cerrada o en retroversión / anteversión</li>
                    <li>aplicación táctica en la ofensiva como parte de la defensa, o de transición</li>
                </ul>
                <h3>Posiciones Bajas</h3>
                <ul>
                    <li>Zenkutsu dachi</li>
                    <li>Kokutsu dachi</li>
                    <li>Kiba dachi</li>
                    <li>Kosa dachi</li>
                    <li>Neko (ashi) dachi</li>
                    <li>Fudo dachi</li>
                    <li>Hangetsu dachi</li>
                    <li>Shiko dachi, o posición del luchador (de sumo)</li>
                    <li>Sochin dachi</li>
                </ul>
                <h3>Posiciones Altas</h3>
                <ul>
                    <li>Heiko dachi</li>
                    <li>Musubi dachi</li>
                    <li>Heisoku dachi</li>
                    <li>Tsuru (ashi) dachi</li>
                    <li>Sanchin dachi</li>
                    <li>Naifanchi dachi</li>
                    <li>Moto dachi</li>
                </ul>
                <h2 className={styles.article__subtitle}>Uke waza técnicas de bloqueo duro o chequeo suave (nagashi)</h2>
                <h3>Defensas con un Brazo</h3>
                <ul>
                    <li>Gedan barai - defensa baja hacia el exterior para defender patadas u otros ataques gedan.</li>
                    <li>Jodan Age uke - defensa alta hacia arriba.</li>
                    <li>Shuto uke - defensa media hacia el exterior con el canto de la mano.</li>
                    <li>Uchi uke - defensa media hacia el exterior con el antebrazo.</li>
                    <li>Empi uke - defensa media con el codo.</li>
                    <li>Soto uke - defensa media hacia el interior con el antebrazo.</li>
                    <li>Otoshi uke - defensa media hacia abajo.</li>
                    <li>Tsuki uke - defensa interceptando con el puño.</li>
                    <li>Uraken uke - defensa interceptando con el revés de puño.</li>
                </ul>
                <h3>Defensas con ambos brazos</h3>
                <ul>
                    <li>Morote uke - se realiza como uchi uke pero con el otro puño apoyado en el antebrazo cerca del codo para reforzar el bloqueo.</li>
                    <li>Jyuji uke - defensa baja cruzando los brazos con los puños cerrados.</li>
                    <li>Jodan jyuji uke - defensa alta cruzando los brazos con las manos abiertas.</li>
                    <li>Kakiwake uke - defensa media empujando con ambos antebrazos hacia fuera en forma de &quot;cuña&quot; para librarse o efectuar un agarre.</li>
                    <li>Wa uke - defensa alta apartando los brazos flexionados a 90 grados hacia los laterales.</li>
                </ul>
                <h3>Defensas con los pies y piernas</h3>
                <ul>
                    <li>Nami gaeshi barai - patada con el pie barriendo</li>
                    <li>Shokutei / mikazuki uke - patada semicircular con la planta del pie en forma semicircular</li>
                    <li>gyaku mawashi mae uke o ushiro fumikomi uke - patadas con la planta del pie de forma directa ante patadas frontales o circulares tipo &quot;low-kick&quot;.</li>
                    <li>hiza / sune mikazuki uke / ura mikazuki uke - patadas con el lateral de la rodilla, o con el hueso tibial</li>
                </ul>
                <h3>Defensas dobles</h3>
                <ul>
                    <li>Doble gedan barai</li>
                    <li>Doble uchi uke</li>
                    <li>Gedan barai + uchi uke (Conocida en algunos estilos como Kosa uke)</li>
                    <li>Gedan barai + age uke</li>
                    <li>Ryo zenwan uke (Bloqueo que separa con un movimiento de arriba hacia abajo)</li>
                    <li>Aiwan nagashi uke (Conocida también como Sokumen awase uke o Sokumen aiwan uke)</li>
                </ul>
                <h3>Variantes</h3>
                <ul>
                    <li>Sho morote uke - como un morote uke pero con la mano que refuerza el bloqueo esta abierta.</li>
                    <li>Gedan kake uke - gedan barai en sentido contrario.</li>
                    <li>Shuto age uke - como age uke pero con la mano abierta con el canto hacia arriba.</li>
                    <li>Shuto gedan barai - como gedan barai pero con la mano abierta parando con el canto de la mano.</li>
                </ul>
                <h2 className={styles.article__subtitle}>Tsuki waza o estocadas con el puño, golpes directos</h2>
                <h3>Ataques con un puño</h3>
                <h4>Con el puño cerrado</h4>
                <ul>
                    <li>Oi tsuki - golpe de puño con la mano de la pierna adelantada.</li>
                    <li>Gyaku tsuki - golpe de puño con la mano contraria a la pierna adelantada.</li>
                    <li>Tate tsuki - golpe con el puño girado quedando la palma hacia el lado contrario.</li>
                    <li>Ura tsuki - golpe con el puño invertido quedando la palma hacia arriba.</li>
                    <li>Uraken - golpe con el reverso de la mano, golpeando con los nudillos.</li>
                    <li>Kizami tsuki - tsuki metiendo el hombro.</li>
                    <li>Kagi tsuki - golpe con un puño hacia el lado contrario golpeando frente al pecho.</li>
                    <li>Age tsuki - golpe de puño ascendente.</li>
                    <li>Yoko tsuki - golpe de puño lateral.</li>
                    <li>Ushiro tsuki - golpe de puño hacia atrás por encima del hombro contrario.</li>
                    <li>Kirami tsuki - golpe de puño de la pierna levantada apuntando hacia la cabeza del contrincante.</li>
                    <li>Maete tsuki - golpe con el puño adelantado, sin rotar la cadera y estirando el brazo.</li>
                    <li>Mawashi tsuki - golpe circular de puño horizontal.</li>
                </ul>
                <h4>Con la mano abierta</h4>
                <ul>
                    <li>Teisho - golpe con el talón de la mano.</li>
                    <li>Kumade - golpe con el talón de la mano y los nudillos teniendo la palma estirada y flexionando las falanges terminales de los dedos.</li>
                    <li>Kentos - nudillos
                        <ul>
                            <li>Hiraken - con la mano en la misma posición que en kumade, golpe con la zona de delante de los nudillos.</li>
                            <li>Ippon ken - golpe con el nudillo del dedo índice.</li>
                            <li>Nakadaka ken - golpe con el nudillo del dedo corazón.</li>
                        </ul>
                    </li>
                    <li>Nukite - dedos
                        <ul>
                            <li>Ippon nukite - golpe con el dedo índice.</li>
                            <li>Nihon nukite - golpe con los dedos índice y corazón, juntos o separados.</li>
                            <li>Yonhon nukite - golpe con los cuatro dedos largos juntos.</li>
                        </ul>
                    </li>
                </ul>
                <h3>Ataques con ambos puños</h3>
                <ul>
                    <li>Morote tsuki - dos &quot;tsukis&quot; simultáneos
                        <ul>
                            <li>Heiko tsuki - &quot;tsukis&quot; paralelos</li>
                            <li>Yama tsuki - &quot;tsukis&quot; frontales metiendo la cabeza. Uno por encima de la cabeza y otro por debajo e invertido.</li>
                            <li>Awase tsuki - &quot;tsukis&quot; frontales sin meter la cabeza. Uno por encima de la cabeza y otro por debajo e invertido.</li>
                            <li>Hasami tsuki - &quot;tsukis&quot; en tijera, desde ambos lados hacia el interior.</li>
                        </ul>
                    </li>
                    <li>Hasami nakadaka ken - doble nakadaka ken en tijera, desde ambos lados hacia el interior.</li>
                </ul>
                <h2 className={styles.article__subtitle}>Uchi waza o golpes indirectos</h2>
                <h3>Golpes con la mano cerrada</h3>
                <ul>
                    <li>Tetsui uchi - golpe con la base del puño.</li>
                    <li>Uraken uchi - golpe con el revés del puño.</li>
                </ul>
                <h3>Golpes con la mano abierta</h3>
                <ul>
                    <li>Shuto uchi - golpe con el canto externo de la mano.</li>
                    <li>Haito uchi - golpe con el canto interno de la mano.</li>
                    <li>Haishu uchi - golpe con la parte de detrás de la mano extendida.</li>
                    <li>Sho uchi - golpe con la palma de la mano extendida.</li>
                    <li>Seiryuto uchi - golpe con la parte inferior del shuto.</li>
                    <li>Washide uchi - golpe con los dedos juntos en forma de pico.</li>
                </ul>
                <h3>Golpes con otras partes del cuerpo</h3>
                <ul>
                    <li>Kakuto uchi - golpe con la muñeca. La mano hacia abajo para permitir el golpe.</li>
                    <li>Ude mawashi uchi - golpe horizontal con el antebrazo por el hueso radial.</li>
                    <li>Enpi uchi o Hiji uchi - golpe con el codo...
                        <ul>
                            <li>Mae enpi uchi - ... hacia delante.</li>
                            <li>Age enpi uchi - ... ascendente.</li>
                            <li>Yoko enpi uchi - ... lateral.</li>
                            <li>Mawashi enpi uchi - ... lateral circular.</li>
                            <li>Otoshi enpi uchi - ... descendente.</li>
                            <li>Ushiro enpi uchi - ... hacia detrás.</li>
                        </ul>
                    </li>
                    <li>Atama uchi - golpe con la cabeza</li>
                </ul>
                <h3>Golpes con ambas manos</h3>
                <ul>
                    <li>Hasami tetsui uchi - dos &quot;tetsuis&quot; simultáneos en tijera, desde ambos lados hacia el interior.</li>
                    <li>Hasami shuto uchi - dos &quot;shutos&quot; simultáneos en tijera, desde ambos lados hacia el interior.</li>
                    <li>Hasami haito uchi - dos &quot;haitos&quot; simultáneos en tijera, desde ambos lados hacia el interior.</li>
                </ul>
                <h2 className={styles.article__subtitle}>Patadas (keri waza)</h2>
                <ul>
                    <li>Mae geri - patada frontal.</li>
                    <li>Yoko geri - patada lateral.</li>
                    <li>Mawashi geri - patada circular.</li>
                    <li>Kakato geri - golpe descendente con el talón.</li>
                    <li>Ura mawashi geri - patada circular inversa.</li>
                    <li>Ushiro geri - patada hacia atrás.</li>
                    <li>Mikazuki geri - patada frontal recogiendo hacia dentro.</li>
                    <li>Nidan tobi geri - dos patadas alternas en salto.</li>
                    <li>Ura mikazuki geri-patada circular exterior con la parte exterior del pie.</li>
                    <li>Mae tobi geri-patada frontal en salto.</li>
                    <li>Mawashi tobi geri-patada circular en salto.</li>
                    <li>Yoko tobi geri-patada lateral en salto.</li>
                    <li>Kin geri-patada a los genitales, directa de frente sin flexión de rodilla.</li>
                    <li>Ushiro tobi geri-patada hacia atrás y en salto.</li>
                    <li>Ushiro ura mawashi tobi geri-patada circular inversa en salto.</li>
                    <li>Gyaku mawashi geri-patada en &quot;S&quot; con rotación externa de la pierna que patea.</li>
                    <li>Mae hiza geri-rodillazo frontal.</li>
                    <li>Mawashi hiza geri-rodillazo circular.</li>
                </ul>
            </section>
        </main>
    )
}
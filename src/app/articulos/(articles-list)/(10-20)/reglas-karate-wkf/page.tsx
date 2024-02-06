import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import wkf from '@/assets/articles-preview/wkf.webp'

export default function ReglasKarate () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Reglas de Karate Según WKF' img={wkf} />
            <section className={styles.article__container}>
                <h2 className={styles.article__subtitle}>Reglas WKF</h2>
                <p>¿Cuáles son las reglas establecidas para un combate de Karate? Según la WKF, que por sus iniciales en inglés es la <b>Federación Mundial de Karate</b>. Dichas reglas y normativas son las siguientes: </p>
                <h3>Vestimenta y Arreglo Personal</h3>
                <p>Para poder participar de las competiciones, es necesario usar un karate-gi blanco sin franjas, ribetes ni bordados. Además debe llevar el escudo o bandera de su país en la parte izquierda del pecho. Sólo puede aparecer la marca del fabricante y el dorsal identificativo por la Comisión de Organización.</p>
                <p>También es necesario que cada participante haga uso de los cinturones homologados WKF que deben tener una anchura de mínimo 5cm y una longitud que permita al menos 15cm sobrantes de cada lado del nudo; no deben presentar marcas o bordados que no sean del fabricante.</p>
                <p>Dicho cinturón debe ir amarrado alrededor de la cintura para sostener la chaqueta y cubrir las caderas. Las mangas de dicha chaqueta nunca deben ir dobladas, ni deben ser más cortas que la mitad del antebrazo, ni tan largas que sobrepasen el puño. También hay que llevar pantalones largos, que no pueden doblarse y que tampoco deberían llegar a cubrir los tobillos.</p>
                <p>Quienes participen de un torneo de karate deben presentarse con el cabello limpio y con una longitud que no adecte en los combates. En caso de llevar pelo largo pueden sujetarlo con una cinta de goma discreta. Se debe ir con las uñas cortas y sin ningún objeto metálico que pueda lesional al competidor. En caso de que no se cumpla con alguno de estos requisitos, el árbitro podría descalificar al participante que quede en falta.</p>
                <h3>Protecciones</h3>
                <p>El uso de vendajes o apoyos por lesión, deben ser aprovados previamente por el árbitro luego de escuchar el médico del torneo, más allá de eso, estas son las protecciones obligatorias que deben utilizarse en cada torneo de karate: </p>
                <ul>
                    <li>Guantillas aprobadas por la WKF, las de un competidor deberá ser rojas y las otras azules.</li>
                    <li>Protector bucal.</li>
                    <li>Protector corporal o peto y además protector de pecho homologado por la WKF, en el caso de las mujeres.</li>
                    <li>Protector de tibia homologado por la WKF, un competidor lo llevará rojo y el otro azul.</li>
                    <li>Protector de pie aprobado por la WKF, un competidor lo llevará rojo y el otro azul.</li>
                    <li>La coquilla es optativa, pero de llevarse, deber ser homologada por la WKF.</li>
                </ul>
                <h3>Artículos prohibidos por la WKF</h3>
                <p>No está permitido utilizar ninguna de los siguientes artículos: </p>
                <ul>
                    <li>El Hachimaki (banda en la frente).</li>
                    <li>Pinzas para el cabello o cualquier pieza metálica.</li>
                    <li>Cintas, abalorios y adornos.</li>
                    <li>Gafas de cualquier tipo, si el competidor lo desea puede usar lentillas blandas bajo su responsabilidad.</li>
                    <li>Prohibida la utilización de artículos, prendas y equipo no autorizados.</li>
                </ul>
                <h3>Reglas de la Competición, Duración de los Encuentros y Puntuación</h3>
                <p>Ningún competidor puede ser reemplazado por otro una vez iniciado el sorteo. En caso de que los competidores que sean llamados no se presenten, serán descalificados, y en caso de tratarse de una competición por equipos, la puntuación del encuentro marcará a favor del equipo asistente 8-0.</p>
                <p>Los equipos masculinos deben estar integrados por 7 participantes, de los cuales competirán 5 en cada eliminatoria. Mientras que en el caso de los equipos femeninos, estarán compuestos por 4 participantes, de las cuales participaren 3 por eliminatoria. Un representante presentará a la mesa oficial un formulario oficial con los datos de los miembros y el orden de combate de cada vuelta. En caso de darse un cambio sin notificación a la mesa oficial, se podría dar una descalificación para el equipo.</p>
                <p>La duración de un encuentro es de 3 minutos para sénior masculino, mientras que es de 2 minutos para sénior femenino. En el caso de las categorías Junior y Cadete, la duración es de 2 minutos. El encuentro inicia cuando el árbitro da la señal y termina cuando dice &quot;YAME&quot;. Además un timbre sonará cuando faltes 10 segundos par que termine el encuentro. El tiempo de descanso es de la misma cantidad que duró cada encuentro, este tiempo también puede aprovecharse para cambiar las protecciones.</p>
                <p>La forma de puntuación se conoce por tres tipos de puntos:</p>
                <ul>
                    <li>IPPON: tres puntos</li>
                    <li>WAZA-ARI: dos puntos</li>
                    <li>YUKO: un punto</li>
                </ul>
                <p>Se efectúa la puntuación cuando se realiza una técnica en una zona puntuable de acuerdo a los siguientes criterios:</p>
                <ul>
                    <li>Buena forma</li>
                    <li>Actitud positiva</li>
                    <li>Aplicación vigorosa</li>
                    <li>Zanshin</li>
                    <li>Tiempo apropiado</li>
                    <li>Distancia correcta</li>
                </ul>
                <p><b>IPPON</b> es válido cuando se dan patadas Jodan o cualquier técnica puntuable que se realice sobre un oponente caído. <b>WAZA-ARI</b> es válido cuando se efectúan patadas Chudan. <b>YUKO</b> es válido cuando se realizan patadas Chudan o Jodan Tsuki, Jodan o Chudan Uchi.</p>
                <p>Los ataques se limitan a las siguientes zonas:</p>
                <ul>
                    <li>Cabeza</li>
                    <li>Cara</li>
                    <li>Cuello</li>
                    <li>Abdomen</li>
                    <li>Pecho</li>
                    <li>Zona trasera</li>
                    <li>Zona lateral (los costados)</li>
                </ul>
                <h3>Comportamiento Prohibido y Penalización en Karate WFK</h3>
                <p>Los comportamientos prohibidos refiere a las técnicas de ataque no permitidas, como lo son los que van dirigidos a los ojos, garganta, brazos, piernas, ingle, aritculaciones o empeine. Además, también se penaliza la exageración de lesionas en busca de se sancione al oponente, el ponerse en peligro a uno mismo, el evitar el combate mostrando pasividad, agarrar o empujar sin una técnica válida de derribo, agarrar el karate-gi, los brazos o piernas del oponente. Además, los ataques simulados con cabeza, rodillas o codos tampoco están permitidos. Las provocaciones al oponente o la desobediencia a las ordenes del árbitro, así como el comportamiento descortés, son cosiderados antideportivos.</p>
                <p>En caso de infringerse alguna de las normas mencionadas, las penalizaciones e infracciones pueden ser algunas de las siguientes:</p>
                <ul>
                    <li>CHUKOKU: infracción menor.</li>
                    <li>KEIKOKU: advertencia de segunda infracción.</li>
                    <li>HANSOKU-CHUI: advertencia de descalificación.</li>
                    <li>HANSOKU: descalificación por una infracción muy grave.</li>
                    <li>SHIKKAKU: descalificación del torneo, competición o encuentro.</li>
                </ul>
            </section>
        </main>
    )
}
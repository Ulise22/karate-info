import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import kobudo from '@/assets/articles-big/kobudo.jpg'

export default function Kobudo () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Karate Kobudo' img={kobudo} />
            <section className={styles.article__container}>
                <p>El Kobudo, que en español significa &quot;El Arte Marcial Ancestral&quot;, es un término japonés que se refiere a un arte marcial originario de las islas Ryukyu, que tiene como característica principal el estudio de las armas tradicionales de madera o metal. </p>
                <p>Con el final de la guerra civil de Japón en 1609 terminó con la conquista de Okinawa por parte del clan samurái Satsuma, quienes con el uso de armas de fuego invadieron la isla. Con la llegada del lider del clan, <b>Toshihisa Shimazu</b> proclamó la prohibición absoluta de posesión y uso de toda clase de armas. Producto de esta prohibición y movidos por el odio a los samuráis, los aldeanos de Okinawa comenzaron a desarrollar armas para resistir a los invasores, basándose en simples intrumentos de la vida cotidiana, como las herramientas agrícolas con las que contaban y con las herramientas de pesca.</p>
                <p>Sin embargo, el kobudo no fue considerado un arte marcial organizado hasta principios del siglo XX, cuando comenzaron a conformar parte de la práctica del arte marcial del karate. Aunque la práctica con las herramientas propias del kobudo se hacía en secreto por diferentes familias de diversas villas.</p>
                <p></p>
                <h2>Kobudo Armas</h2>
                <p>Entre las diferentes armas tradicionales de las que hace uso el Kobudo de Okinawa, destacan:</p>
                <ul>
                    <li><b>BO o KUN</b>: La palabra BO siginifica &quot;palo&quot;, y la palabra KUN significa &quot;vara&quot;. Hay quienes dicen que el origen de estas armas porvienen de un arma, cuando la hoja de una lanza fue cortada en pelea, mientras que otros sostienen que la hoja de metal instalada en la punta de la vara fue eventualmente descartada para permitir su portación.</li>
                    <li><b>SAI</b>: Esta es un arma de metal con forma de cruz y que nomrmalmente se usa de a par. Originalmente fue usado como proyectil, y en los tiempos lejanos la policía de Ryukyu se mejoró y perfeccionó el arte del Sai a través de la experencia peleando con criminales. Las katas usadas con este arma fueron desarrolladas y llamadas con el nombre de quien las creo</li>
                    <li><b>NUNCHAKU</b>: Esta herramienta esta compuesta por dos palos de madera unidos en un extremo por una trenza tejida con la crin del caballo a modo de cuerda, y un ojal en la parte inferior para la sujeción. La herramienta fue usada en un principio con el fin de que el ganado no se comiera los sembrados, mientras que el arte del Nunchaku se desarrolló originalmente para lidiar con atacantes pendencieros o tumultosos. </li>
                    <li><b>TEKKO</b>: Esta es un arma que usando las técnicas de Seiken Uchi y Ate Waza dde karate se puede convertir en una extremadamente peligrosa. Se usa como una manopla que puede esconderse facilmente entre la ropa, y originalmente fue la herradura que usaban los caballos.</li>
                    <li><b>TONHUA, TUIHUA, TONKWA O TONFA</b>: Basicamente son un par dde palos cortos muy difíciles de usar, por lo cual su uso requiere de un entrenamiento especial. Originalmente era un utensillo del hogar usado para tamizar granos.</li>
                    <li><b>TINBE</b>: Es un set compuesto por una lanza corta, parecido a un arpón de pesca y por un escudo pequeño, que puede ser armado con el caparazón de la tortuga marina. Actualmente la única kata transmitida desde la antigüedad es la Sakugawa no Tinbe.</li>
                    <li><b>KAMA</b>: Basicamente es una hoz para cosechar conformada por un mango de madera y una metálica curva con filo en la punta. En la actualidad Okinawa prohibió su portación como arma.</li>
                    <li><b>EKU o KAI</b>: Es un remo de madera utilizado para patear la arena con la intención de cegar a los oponentes y de golpear con los bordes filosos de dicha arma.</li>
                    <li><b>SURUCHIN</b>: Son boleadoras, una cuerda con piedras o pedazos de metal atados en los extremos de la cuerda.</li>
                </ul>
            </section>
        </main>
    )
}
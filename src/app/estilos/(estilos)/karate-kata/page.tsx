import ArticlesHero from '@/components/ArticlesHero'
import styles from '@/app/articulos/article.module.css'
import kata from '@/assets/articles-big/karate_kata.jpg'

export default function KarateKata () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Karate Kata' img={kata} />
            <section className={styles.article__container}>
                <p>La palabra <b>Kata</b> es un término japonés que describe una serie, forma o secuencia de movimientos establecidos que se pueden practicar tanto en solitario como en parejas o como en grupo en una clase de artes marciales. En la práctica de las artes marciales japonesas, los katas se ven como un compañero esencial del <b>randori</b> o <b>kumite</b> (entrenamiento de combate libre), complementándose entre sí para preparar al que practica para un combate real. Tradicionalmente se enseña en etapas y con diferentes grados de complejidad, comenzando el aprendizaje con los katas relativamente más sencillos y escalando hasta aprender los katas mas difíciles, aumentando la complejidad de la técnica y la velocidad con la que se ejecutan dichos katas.</p>
                <p>En las artes marciales japonesas como lo son el <b>Kendo</b>, el <b>Jiu-Jitsu</b> o el <b>Aikido</b>, en la practica del kata que se hacen en pareja, suelen haber roles definidos, siendo uno de estos el que ataca (tori o, shite) y el otro el que se defiende (uke, nage o aite), donde ambos practicantes pueden cambiar de roles según la secuencia preestablecida por ambos.</p>
                <p>Para quienes practican un kata es clave poner enfasis en la técnica con la que se ejecuta, priorizando la corrección del equilibrio, en la respiración, en la coordinación del tiempo y la distancia, en mantener la tensión muscular justa y en conservar la conciencia de lo que está al rededor, al inicio, durante y al final dde cada técnica para poder asemejarlo a un combate real. Por esto es importante que el practicante preste mucha atención a los ataques del rival para que sus respuestas a estos ataques se asemejen a un combate real.</p>
                <p>El Kata suele estar mayormente asociado con el karate, arte marcial que consta de más de 200 formas codificadas de katas si sumamos todas sus diferentes escuelas y variaciones. Aunque cada estilo cuenta con su propia kata, siendo que algunas escuelas sólo cuentan con 8, mientras que otras llegan a tener casi 100.</p>
                <p>Los kata de karate son un conjunto de secuencias que pueden variar desde los 20 a los 70 movimientos, dependienddo de su dificultad. Las kata generalmente incluyen combinaciones de golpes de manos y pies, bloqueos, chequeos, desvíos, desplazamientos, pisotones, agarres, algunas luxaciones, lanzamientos, barridos, giros, saltos, desarmes contra armas clásicas, estrangulaciones, movimientos tácticos, manejo de la respiración y manejo de los ritmos de defensa y ataque; que son realizados buscando una ejecución perfecta.</p>
                <p>Los nombres que se les asigna a las kata pueden estar influenciados por diversos motivos, desde el número de movimientos con el que cuenta, el nombre del maestro que los creó, la sensación que puede llegar a transmitir el movimiento, o la estructura metodológica que siguen. Aunque también es importante saber que muchas veces los nombres que reciben las kata, está influenciadas por el sentido esperitual que reciben del Budismo esotérico, del Budiszmo zen, o del Taoísmo.</p>
                <p>El maestro <b>Hirokazu Kanazawa</b>, escribió 10 elementos que deben caracterizar el Kata. Hoy en día se utilizan muchos de estos elementos como varas de medir en las competiciones de kata: </p>
                <ul>
                    <li><b>1. YIO NO KISIN: </b> El estado de ánimo</li>
                    <li><b>2. INYO: </b> Activo y pasivo</li>
                    <li><b>3. CHIKARA NO KIOJAKU: </b> Fuerza</li>
                    <li><b>4. WAZA NO KANKYU: </b> La velocidad</li>
                    <li><b>5. TAINO SHIN SHOKU: </b> La contracción</li>
                    <li><b>6. KOKYU: </b> Respiración</li>
                    <li><b>7. TYAKUGAN: </b> El significado</li>
                    <li><b>8. KIAI: </b> Unión de mente y cuerpo</li>
                    <li><b>9. KEITAI NO HOJI: </b> La postura</li>
                    <li><b>10. ZANSHIN: </b> El guardia</li>
                </ul>
                <p>En la actualidad, su inclusión en la competición de karate ha sido sujeto de controversias durante décadas. Dado que para los más tradicionales, se desvirtúa el karate tradicional dejando de lado varias acciones motrices puntuales que se terminan modificando por estética. Mientras que para quienes siguen el karate deportivo fomenta el trabajo uniforme en la técnica básica. En el kata de competición se prefieren movimientos gimnásticos, vistosos, amplios o cortos pero rápidos, que muchas veces van en contramano de la aplicación a la defensa personal original.</p>
            </section>
        </main>
    )
}
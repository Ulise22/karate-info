import ArticlesHero from '@/components/ArticlesHero'
import dojo from '@/assets/articles-preview/dojo.jpg'
import styles from '../../../article.module.css'
import Link from 'next/link'

export default function Dojo () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Dojo Karate' img={dojo} />
            <section className={styles.article__container}>
                <p>Dojo es la palabra proveniente del vocablo Bodhimanda, que se usa en Japón para nombrar al espacio destinado a la práctica y enseñanza de la meditación o las artes marciales tradicionales modernas. En español la palabra significa &quot;Lugar de sabiduría&quot; o &quot;Lugar del despertar&quot;. Es tradicionalmente supervisado por un maestro o sensei, quien busca ayudar a lograr la perfección espiritual, física, moral y mental.</p>
                <p>Aunque originalmente la palabra Dojo era usada para hablar del templo donde los monjes recibían instrucción, con la caída del shogunato de Tokugawa en 1867, los artistas marciales comenzaron a adoptar el termino y lo utilizaron para referirse a su lugar de entrenamiento.</p>
                <p>El dojo, puede ser un espacio cerrado o al aire libre de forma rectangular o cuadrada, en donde por la influencia que tiene la religión japonesa, el sintoísmo, cada area recibe un nombre y una función determinada. Estas serían las areas pertenecientes a un dojo: </p>
                <ul>
                    <li>Kamiza o Shinza: es el asiento de los instructores al frente del dojo.</li>
                    <li>Kamidana: es el altar sintoísta o budista, presente al frente del dojo. En él se da la bienvenida a los espíritus de los ancestros o &quot;kami&quot;; contiene símbolos tradicionales o las imágenes de los maestros fundadores del arte marcial a desarrollar.</li>
                    <li>Shomen: es el frente del dojo, la pared opuesta a la entrada. En la tradición japonesa, suele apuntar al norte.</li>
                    <li>Tokonoma: en el dojo, se refiere al espacio físico donde se encuentra el kamidana.</li>
                    <li>Joseki: es el lado derecho del dojo, donde se sientan los estudiantes de mayor grado o experiencia.</li>
                    <li>Shimoseki: es el lado izquierdo del dojo, donde se sientan los estudiantes que aún no poseen suficiente experiencia o grado en el arte marcial a desarrollar.</li>
                    <li>Shimoza: es el lado opuesto al kamiza, donde los estudiantes se sientan por orden de graduación según el grado por cinturones (kyu - Dan) o antigüedad, en filas .</li>
                </ul>
                <p>Producto de la relación que tienen los guerreros <b>samuráis</b> con la filosofía del budismo zen, muchos de los dojos antiguos y contemporáneos todavía se destinan a la práctica de las diferentes artes marciales de Japón, como lo son el <b>Kenjutsu</b>, <b>Ninjutsu</b>, <b>Jujutsu</b>, <Link href='/articulos/karate-do'>Karate-do</Link>, <b>Judo</b>, <b>Aikido</b>, <b>Kendo</b> y el <b>Iaido</b>.</p>
                <p>Otras disciplinas modernas coreanas copiaron el mismo concepto del lugar, de los diferentes rituales, del orden de los elementos y de los estudiantes, en sus sitios de práctica, posterior a la segunda guerra mundial y a la guerra de Corea, como en el caso del <b>Taekwondo</b>, el <b>Tangsudo</b> / Tang soo do, y en el Hapkido donde las salas de práctica toman el nombre de Dochang. </p>
                <p>También el dojo se ha relacionado con el budismo zen y la práctica de la meditación <b>zazen</b> en Japón. En dicha práctica se busca un estado de contemplación en el que el practicante adquiere un estado de desapego y aislamiendo del mundo material, de las sensaciones, de la temporalidad, de las ideas vanas y egoístas que impiden una visión directa de la realidad.</p>
                <p>En la actualidad los dojos comienzan a estar en desuso producto del aumento de la práctica de otros deportes de combate modernos, como lo son el <b>Boxeo</b>, el <b>Kickboxing</b> y las <b>Artes Marciales Mixtas (MMA)</b>, que se enseñan y practican en salas de entrenamiento que mayoritariamente están ubicadas en gimnasios.</p>
                <h2>Soji Karate</h2>
                <p>Existe un ritual que se hace en muchos estilos clásicos y tradicionales de Japón, llamado <b>Soji</b>. Esto consta de hacer una limpieza al comienzo y al final de cada sesión de entrenamiento. Este ritual, compuesto por la limpieza regular del lugar donde se entrena y medita, además de las obvias ventajas higiénicas con las que cuenta, sirve para enseñar disciplina y para reforzar el mensaje zen sobre la responsabilidad de todos, al mantener el lugar donde se sigue el camino en perfectas condiciones, siendo esto no solo responsabilidad del maestro o de los instructores.</p>
            </section>
        </main>
    )
}
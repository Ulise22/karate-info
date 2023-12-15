import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import adultos from '@/assets/articles-big/adultos.jpg'
import Link from 'next/link'

export default function Adultos () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Karate para Adultos' img={adultos} />
            <section className={styles.article__container}>
                <h2>¿Se puede aprender karate siendo adulto?</h2>
                <p>La respuesta corta es que por supuesto que sí, cualquier persona puede aprender este arte marcial a cualquier edad sin importar que experiencia previa haya tenido. Salvo que tu objetivo sea ser un peleador profesional o competir en alguna competición mundial, siempre se está a tiempo para aprender karate, aunque se suela caer en la creencia de que es una actividad que se debe practicar de joven. Incluso puede ser beneficioso en muchos sentidos, que incluyen tanto la salud física como mental. De hecho, la organización principal de karate de los Estados Unidos, La <b>Shokotan Karate Of America</b> señala que: &quot;Practicar Karate fortalece la mente, desarrolla compostura, un proceso de pensamiento más claro, una mayor conocimiento sobre las capacidades mentales de uno y una mayor seguridad en uno mismo. Fortalece el cuerpo entero, mejora la coordinación, hace reflejos más rápidos, construye resistencia y la salud en general&quot;</p>
                <p>Pese a que se suele creer que cuanto mayor es uno, más difícil es aprender y adoptar nuevas rutinas, está comprobado que el cerebro de los humanos, en cualquier edad mantiene su plasticidad, lo que hace factible seguir aprendiendo y desarrollando habilidades sin importar la edad que se tenga, aunque está claro que para las personas más jovenes, será más sencillo aprender y posiblemente requerira de menos tiempo que para alguien que tenga bastantes años cumplidos. La buena noticia para todos y no sólo para los más grandes, es que la barrera de entreda para aprender karate es bastante baja en cuanto a dificultad.</p>
                <p>Puede servir de inspiración tener presente los casos de las abuelas <b>Sheila Stewart</b> e <b>Isabell Murray</b>, que con 77 años y 72 años respectivamente, se convirtieron en las personas de mayor edad en Gran Bretaña en ganar un cinturón negro de Karate. Siendo ya adultos mayores, estas abuelas decidieron adoptar un nuevo pasatiempo cuando encontraron una clase de karate diseñada para personas mayores.</p>
                <h2>¿Qué beneficios tiene practicar karate siendo adulto?</h2>
                <p>De hecho para profundizar en las ventajas y beneficios que tiene el practicar este arte marcial, incluso en los adultos mayores, aquí hay una lista de 10 beneficios que contrae el aprender este deporte: </p>
                <ul>
                    <li><b>1. Ganar Flexibilidad: </b>Por la naturaleza del karate, este ayuda a ganar flexibilidad a toda persona que lo practica, independientemente de su edad. </li>
                    <li><b>2. Mejora en el Equilibrio: </b> Las posturas que se practican ayudan a mejorar el equilibrio, que se consigue mediante el dominio del cuerpo y mente. </li>
                    <li><b>3 Ejercitar la Memoria: </b> Los <Link href='/estilos/karate-kata'>Katas</Link> de karate, favorecen el ejercicio de la memoria, ya que exige a quien lo practica saber y conocer toda la serie de movimiento que conforman los katas.</li>
                    <li><b>4. Ganar Vitalidad: </b> Es sabido que al realizar cualquier actividad física, el cuerpo se siente vigorizado y con mayor energía. Que sumado a la filosofía que uno aprende estudiando karate, filosofía que ayuda a manejar la mente y el cuerpo, hace recordar a uno que ellos son la base del control. </li>
                    <li><b>5. Mantener una alta autoestima: </b> Saber defenderte de ciertas situaciones, mejorar el cuerpo y mente, y estar en forma en general, siempre son cosas que ayudan a mejorar la imagen que uno tiene de sí mismo, y por tanto, mejoran la autoestima.</li>
                    <li><b>6. Fortalecer los Huesos:</b> El fortalecimiento de los huesos es uno de los mayores beneficios, dado que con el paso del tiempo se van descalcificando y son más propensos a sufrir fracturas.</li>
                    <li><b>7. Mejoran la Agilidad: </b>Producto de los entrenamientos que estan asociados al karate, las personas que lo practican mejoran su agilidad y por tanto mejoran su calidad de vida. Cosa que es muy importante mientras mayor es la persona.</li>
                    <li><b>8. Favorece el Sistema Cardiovascular: </b> La práctica del karate favorece al sistema cardiovascular, y mantenerse activo ayuda a descender la presión arterial. Previniendo todo tipo de enfermedades relacionadas con esto o con una mala circulación. </li>
                    <li><b>9. Permite Socializar: </b> Siempre el realizar actividades con otras personas que te obliguen a salir de tu casa, va a beneficiar la calidad de vida social que uno tenga. Además de que practicando karate lo habilita a uno a conocer a personas comparten la pasión por la vida y el amor por este arte marcial.</li>
                    <li><b>10. Mantenerse en Forma: </b> Y finalmente, el último beneficio con el que cuenta es que mantiene la forma física de uno, ya sea para mantenerse atractivo o para mantener unos altos niveles de salud.</li>
                </ul>
            </section>
        </main>
    )
}
import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import femenino from '@/assets/articles-big/femenino (2).jpg'
import Link from 'next/link'

export default function KarateFemenino () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Karate Femenino' img={femenino} />
            <section className={styles.article__container}>
                <p>En la actualidad, el karate es un arte marcial practicado por muchas mujeres, aunque por lo general se lo difunda como un arte marcial sólo para hombres y extremedamente agresivo, esto está lejos de ser así, ya que además del karate ser un deporte que cuente con muchas mujeres talentosas en su haber, es un deporte que tiene muchos beneficios para quien lo practique.</p>
                <p>Fue aproximadamente a principios del siglo XX, época que coincide con los inicios mismos del karate, cuando muchos maestros se mostraron a favor de la inclusión de las mujeres en su práctica, y fue a mediados de los años 20 cuando comenzaron a tener clases exclusivamente para ellas.</p>
                <h2 className={styles.article__subtitle}>¿Que beneficios tiene el karate para las mujeres?</h2>
                <p>Entre los muchos beneficios que puede otorgarle el karate a las mujeres, hemos decidio destacar los siguientes:</p>
                <ul>
                    <li>El karate ayuda a mejorar la fortaleza interna de una mujer, gracias a las habilidad adquiridas que favorecen la flexibilidad, la potencia y la velocidad propias del género. Por esto es muy común que las mujeres disfruten más de la práctica de los <Link href='/estilos/karate-kata'>Kata</Link>, al ser secuencias de movimientos que representan un combate contra un enemigo imaginario. En esta práctica es posible expolorar la creatividad, la belleza y la audacia en un sólo ejercicio.</li>
                    <li>También, producto de toda la practica que conlleva, se beneficia la coordinación, la fuerza, el equilibrio y la buena postura que acompañado de las enseñanzas promovidas, se favorecen valores como la generosidad, el respeto, la armonía, empatía, la paciencia, la humildad y la amistad entre muchos.</li>
                    <li>El karate es una herramienta super útil en la defensa personal, ya que además ayuda no sólo a afrontar situaciones extremas por medio del autocuidado, sino que te enseña a nunca permitir que los intereses dde otros pasen por encima de los nuestros, aprendizajes que pueden extrapolarse a la vida diaria, al trabajo, al hogar y a las problemáticas sociales. En esta practica se promueve a diario el respeto a uno mismo y hacia los demás.</li>
                    <li>Debido a las enseñanzas espirituales que también tiene el karate, se termina buscando un estado de paz y armonía canalizando correctamente la agresión y la ansiedad, y ayuda a liberar esa energía disminuyendo el estrés.Porque contrario a lo que se cree, que en el karate se maneja y se promueve un alto grado de violencia, esto está lejos de ser cierto, por el contrario se promueve la paz, y más importante, la paz mental, para poder manejar los problemas que la vida atrae con la mayor tranquilidad posible.</li>
                    <li>Como entrenamiento físico, permite a una tonificar de manera pareja todo el sistema, dado que el trabajo que se hacen con las patadas y desplazamientos, con las técnicas de brazos y cadera, hacen de todo el fortalecimiento del cuerpo algo uniforme.</li>
                    <li>Es un deporte y arte marcial que puede comenzar a practicarse desde cualquier edad hasta practicamente cualquier edad. Prueba de esto son los casos de las abuelas Sheila Stewart e Isabell Murray, que con 77 años y 72 años respectivamente, se convirtieron en las personas de mayor edad en Gran Bretaña en ganar un cinturón negro de Karate. </li>
                </ul>
                <p>Por lo que en resumen, el karate es algo que entrena al cuerpo y la mente de la mano, y su importancia está en adquirir las habilidades necesarias para de igual manera evitar y defenderse de los confictos, obtener confianza en una misma y autodeterminación en el accionar del día a día. Por esto, nunca mejor dicho: mente sana, cuerpo sano.</p>
                <h3 className={styles.article__subtitle}>¿Existen mujeres Sensei?</h3>
                <p>La respuesta es un rotundo sí. Hoy en día hay muchas mujeres que ocupan el cargo de Sensei, y no sólo en los distintos <Link href='/articulos/dojo-karate'>dojos</Link>, sino que en escuelas enteras de Karate, como es el caso de la Sensei <b>Nobuko Oshiro</b>, quien hoy en día es cabeza de escuela en Okinawa, de una línea de <Link href='/estilos/shorinji-ryu'>Shorin Ryu</Link>.</p>
            </section>
        </main>
    )
}
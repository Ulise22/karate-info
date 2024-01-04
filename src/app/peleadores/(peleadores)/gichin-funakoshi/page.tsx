import styles from '../../components/peleador.module.css'
import funakoshi from '@/assets/peleadores/funakoshi.jpg'
import ArticlesHero from '@/components/ArticlesHero'
import Link from 'next/link'

export default function Funakoshi () {
    return(
        <main className={styles.peleador}>
            <ArticlesHero title='Gichin Funakoshi' img={funakoshi} />
            <section className={styles.peleador__article}>
                <h2 className={styles.peleador__article__subtitle}>Funakoshi Karate</h2>
                <p className={styles.peleador__article__text}>Gichin Funakoshi fue un maestro de Karate japonés muy reconocido, considerado el padre del karate moderno, por su trabajo en la difusión del <Link href='/articulos/karate-do'>Karate-Do</Link> en las principales islas de Japón. Además claro, de alcanzar reconocimiento por ser el fundador del estilo <Link href='/estilos/karate-shotokan'>Shotokan</Link> junto con su hijo, Yoshitaka Funakoshi.</p>
                <p>Gichin Funakoshi nació el 10 de noviembre de 1868 en la ciudad de Shuri, en lo que hoy es Okinawa. Es proveniente de una familia de nobles del reino de Ryukyu (antes de ser Okinawa), por parte de la familia Tominakoshi. A la edad de 11 años comenzó a practicar el arte marcial to-de/ tuidi/ to-de/ Shuri-Te, que es parecido al estilo <b>Shorin ryu</b> actual. Comenzó recibiendo clases por parte de los maestros <b>Anko Asato</b> y <b>Yasutsune Itosu</b>, ambos a su vez habían sido alumnos del guardaespaldas de los reyes de Okinawa, <b>Sokon Matsumara</b>.</p>
                <p>Producto del despilfarro de su padre en la bebida, Funakoshi sufrió bastante durante su infancia a nivel económico, agravado esto por los apresurados cambios sociales y económicos que sucedieron al final del siglo XIX y principios del siglo XX, cuando las familias de los nobles en Japón comenzaron a perder sus privilegios sociales y económicos. Aún así, siguiendo la educación recibida por los nobles, aprendió las enseñanzas clásicas chinas del <b>confusionismo</b> y japonesas del <b>Budismo zen</b>, así como ambos idiomas. </p>
                <p>Gracias a la educación que recibió, Funakoshi se convirtió en un ferviente seguidor de la filosofía del <b>Confusionismo</b>, al punto que se sintió avergonzado por las 2 ocasiones en que se vió obligado a utilizar el karate para defenderse, ya que había deshonrado la armonía y las normas del cielo. Tiempo después de los altercados en los que se vió envuelto, el maestro Funakoshi fue quien desarrolló el <Link href='/articulos/dojo-kun'>Dojo-kun</Link>, que basicamente son una serie de preceptos a aplicarse tanto dentro como fuera del dojo.</p>
                <p>En 1891 se levantó la prohibición de las artes marciales en Okinawa, por lo que el karate pasó a ser una actividad enseñada en las escuelas públicas. En este sentido, el maestro Funakoshi influenció mucho en el desarrollo de la popularidad del karate, enseñando los katas que él mismo había creado. </p>
                <p>En 1922, el maestro Funakoshi viaja a Tokio como invitado a la Primera Gala Gimnástica Nacional, organizada por la Dai Nihon Butokukai, en la que se le pidió que realizara una exhibición. Esta fue muy aceptado y es por esto que decidió radicarse en Japón para reformar y expandir su propio karate. Al punto tal llegó su influencia, que lo que entonces se conocía con los nombres de &quot;To-Te&quot;, Tuidi, o To-de, &quot;Tang -te&quot; (camino de la mano china), Ryukyukyu Kempo/ tuidi, okinawa-te (mano de Okinawa), pasan a recibir el nombre que tiene actualmente, siendo este <Link href='/articulos/karate-do'>Karate-Do</Link>.</p>
                <p>Uno de sus principales aportes al mundo del karate, fue el desarrollo del estilo <Link href='/estilos/karate-shotokan'>Shotokan</Link>, que nace de la unificación de las enseñanzas de sus 2 maestros formando un estilo más &quot;japonés&quot;, para ayudar a difundir este arte marcial alrededor de todo el país, con ayuda de las instituciones oficiales. Este estilo, destaca además por el énfasis en el uso de la distancia larga, un elemenot que fue incorporado su hijo Yoshitaka, quien había practicado las artes marciales del sable japonés o <b>Kendo</b> y <b>Laido</b>, haciéndo del karate Shotokan un método de esgrima corporal. Además, este estilo incluye varias técnicas del Judo.</p>
                <p>Con el paso del tiempo, fue el hijo de Gichin, Yoshitaka Funakoshi quien tuvo mucha influencia en la evolución y desarrollo del Karate Shotokan. Quien usaba posiciones mucho más bajas que Gichin, y quien convirtió el estilo en un deporte de arte y combate más japonés, siguiendo el ejemplo de otras artes marciales como lo son el <b>Kendo</b>, el <b>Laido</b>, el <b>Judo</b> o el <b>Sumo</b>. También introdujo cambios en la sincronización, e incluyó técnicas de patadas más altas. </p>
            </section>
        </main>
    )
}
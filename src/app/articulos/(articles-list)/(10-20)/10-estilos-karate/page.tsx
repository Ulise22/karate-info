import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import diezEstilos from '@/assets/articles-big/10-estilos (2).jpg'
import Link from 'next/link'

export default function Haito () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Top 10 Estilos de Karate' img={diezEstilos} />
            <section className={styles.article__container}>
                <p>En el mundo del karate existe un gran número de estilos practicados a lo largo del mundo, cada uno con su propia historia, sus propios maestros y sus particularidades. En este articulo hemos decidido nombrar 10 de estos estilos, y aunque hay bastantes más, consideramos que estos son importantes y hemos decidido destacarlos.</p>
                <h2 className={styles.article__subtitle}>1. Shotokan</h2>
                <p>El karate <Link href='/estilos/karate-shotokan'>Shotokan</Link> es el primer estilos de <Link href='/articulos/karate-do'>Karate-do</Link>. Fue desarrollado por el histórico maestro <Link href='/peleadores/gichin-funakoshi'>Gichin Funakoshi</Link>, quien es considerado el padre del karate moderno, en el año 1936, aunque sin embargo no fue reconocido oficialmente por el gobierno japonés hasta el año 1939. Dicho estilo toma su inspiración filosófica a partir del confucionismo y del código Bushido, que eran las normas por las que se regían los guerreros samurái. Además, el hijo de Gichin, Yoshitaka Funakoshi tuvo un papel muy importante en el desarrollo de la técnica y táctica del estilo.</p>
                <p>Este estilo cuenta con un total de 26 katas propios, además de contar con otros 5 llamados &quot;katas Heian&quot;, que son más sencillos y se suele enseñar a niños en Okinawa.</p>
                <h2>2. Goju Ryu</h2>
                <p>El <Link href='/estilos/gojuryu'>Goju-Ryu</Link> es un estilo de karate fundado por el maestro Chojun Miyagi y es uno de los 3 estilos tradicionales de Karate de Okinawa. Su nombre se registró oficialmente en el año 1933 en la Dai Nippon Butokukai (la Asociación Nacional de Artes Marciales Japonesas). Es un sistema de defensa basado en un conjunto de técnicas duras de tipo lineal con movimientos circulares más suaves, siendo esta ultima una de las principales características de este estilo, los movimientos circulares que sirven especialmente para bloquear, dado que no solo desvían y absorben la energía de un oponente, sino que sirven para contraer el cuerpo como un resorte para luego desatar un contrataque explosivo.</p>
                <p>Tradicionalmente cuenta con 12 katas, aunque con el paso del tiempo se fueron agregando más creados por alumnos y maestros tomando como referencia otros estilos de karate.</p>
                <h2>3. Shorin Ryu</h2>
                <p>El <Link href='/estilos/shorinji-ryu'>Shorinji Ryu</Link> es uno de los estilos más antiguos del karate de okinawa, y se lo considera como uno de los predecesores del karate actual. Su nombre tiene varios significados, pero todos hacen referencia al famoso templo chino de Shaolin, que se destaca por el sistema de lucha de los monjes que lo habitan practicaban. Quien fue el creador de este estilo es el Maestro Sokon Matsumara, sin embargo quien se encargó de sistematizarlo fue su discípulo, el Maestro Yasutsune Itosu, que dividió el estilos en 4 variantes.</p>
                <p>Este estilo en particular cuenta con 21 katas que son enseñados en las escuelas del Shorin Ryu.</p>
                <h2>4. Kyokushin Kai</h2>
                <p>El <Link href='/estilos/kyokushin-kai'>Kyokushin Kai</Link> es un estilo de karate fundado por el maestro de artes marciales coreano <Link href='/peleadores/masutatsu-oyama'>Masutatsu Oyama</Link> en 1953. Creado con el objetivo de ser eficaz en un combate real, con una filosofía basada en la mejora personal mediante el control de la mente y el cuerpo, destacando por sus intensos regímenes de entrenamiento, dureza y disciplina. Actualmente, es uno de los estilos de Karate-do más practicados a nivel internacional, contando con más de 40 millones de practicantes.</p>
                <h2>5. Shudokan</h2>
                <p>El <Link href='/estilos/karate-shudokan'>Shudokan</Link> es una escuela de karate fundada por el maestro Kanken Toyama en 1932. El modelo de aprendizaje de este estilo se basa en los fundamentos de los Katas, de las secuencias de combate preestablecidas y del combate en grupos. Siendo los katas una secuencia de movimientos entrelazados. Las secuencias de combate preestablecidas, desarrollandosé desde posiciones fijas, donde ya se sabe como va a atacar el oponente, así también como la defensa que va realizar.</p>
                <p>Este estilo cuenta con un total de 21 katas.</p>
                <h2>6. Isshin Ryu</h2>
                <p><Link href='/estilos/isshin-ryu'>Isshin-Ryu</Link> es un estilo de Karate Okinawense fundado en el año 1956 por el maestro Tatsuo Shimabuku. Este estilo tiene una especial inspiración en los estilos Shorin Ryu y Goju Ryu, además hace un uso especial de las armas tradicionales del Kobudo. Este estilo cuenta con un total de 19 katas.</p>
                <h2>7. Uechi Ryu</h2>
                <p>El <Link href='/estilos/uechi-ryu'>Uechi Ryu</Link> es uno de los 3 principales estilos tradicionales de Karate de Okinawa, junto con el Gojo Ryu y el Shorin Ryu, y fue transmitido desde China hasta la isla de Okinawa en Japón gracias al maestro Kanbun Uechi y su familia. Este estilo cuenta con 29 katas.</p>
                <h2>8. Shito Ryu</h2>
                <p>El <Link href='/estilos/shito-ryu'>Shitō-ryū</Link> es un estilo de karate fundado en 1931 por el maestro Kenwa Mabuni. Este estilos es uno de los 4 más importantes del Karate-Do en la actualidad, junto con el Shotokan, el Goju Ryu y el Wado Ryu. Su creador, Kenwa Mabuni nació en Okinawa el 14 de noviembre de 1889, y quien había comenzado a entrenar el arte del Shuri-Te a la edad de 13 años, de la mano del legendario Yasutsune Itosu.</p>
                <h2>9. Wado Ryu</h2>
                <p>El <Link href='/estilos/wado-ryu'>Wadō-ryū</Link> es un estilo de karate fundado por el maestro Hironori Otsuka y es uno de los 4 estilos principales de Karate-do tradicionales de Japón. Este es en particular un estilo con una marcada influencia japonesa. Su nombre se compone de 3 partes: Wa, dō y ryū. Siendo que Wa significa &quot;Armonía&quot;, dō &quot;camino&quot; y ryū significa &quot;escuela&quot; o &quot;estilo&quot;. Siendo su filosofía al incluir la palabra &quot;Armonía&quot;, el reconocer que a veces ceder es más efectivo que dominar por la fuerza. Dicho estilo consta de 9 katas oficiales.</p>
                <h2>10. Byakuren</h2>
                <p>El <Link href='/estilos/karate-byakuren'>Byakuren Kaikan</Link> es un estilo de karate fundado en 1984 por el Sugihara Masayasu, quien fue un estudiante y guardaespaldas de So Doshin, fundador del Shorinji Kempo. Pese a ser una escuela de karate, debido a la enseñanza que recibió Masayasu por parte de su maestro, el Byakuren es considera como hijo del estilo Shorinji Kempo, que a su vez tiene origenes estrechamente relacionados con el Kung Fu Shaolin.</p>
            </section>
        </main>
    )
}
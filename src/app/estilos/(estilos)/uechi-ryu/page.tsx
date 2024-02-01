import ArticlesHero from '@/components/ArticlesHero'
import uechi from '@/assets/articles-preview/uechi-ryu.jpg'
import styles from '@/app/articulos/article.module.css'
import Link from 'next/link'

export default function UechiRyu () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Uechi Ryu' img={uechi} />
            <section className={styles.article__container}>
                <h2 className={styles.article__subtitle}>Karate Uechi Ryu</h2>
                <p>El Uechi Ryu es uno de los 3 principales estilos tradicionales de Karate de Okinawa, junto con el <Link href='/estilos/gojoryu'>Gojo Ryu</Link> y el <Link href='/estilos/shorinji-ryu'>Shorin Ryu</Link>, y fue transmitido desde China hasta la isla de Okinawa en Japón gracias al maestro <b>Kanbun Uechi</b> y su familia, quien había aprendido los estilos chinos ancestrales del dragón, el tigre y la grulla de Chuan-fa/ kung fu/ wu shu de la mano de los monjes chinos, de quienes conservo fielmente su filosofía y la forma china en las katas del estilo. Pese a las modificaciones que ha sufrido este estilo a lo largo del tiempo, como es común en cada estilo de cualquier arte marcial cuando se populariza y se expande demasiado, el Karate Uechi Ryu ha sabido preservar bien sus raíces chinas, en comparación con otrso estilos de Karate o de Kempo.</p>
                <p>El origen de este estilo comienza con el nacimiento de su fundador en Okinawa, el maestro Kanbun Uechi en el año 1877, quien con la intención de librarse del servicio militar obligatorio viaja a China para aprender técnicas de Chuan-fa. Posteriormente en aquel país, aprendería las técnicas del dragón, el tigre y la grulla con los monjes expertos. Pese a no saber el idioma ni las costumbre chinas, entrenó en calidad de discipulo hasta convertirse en el primer maestro japonés de Chuan-fa/ kung fu / wu shu en China, luego de 10 años.</p>
                <p>Debido a un trájico suceso, en el que uno de sus alumnos llegó a matar a un campesino con una ténica de Chuan-fa en un disputa sobre el agua para el cultivo, Kanbun se sintió culpable y decidió volver a su natal Okinawa. Decidió volver haciendose pasar por ciudadano chino, al punto tal que incluso amigos que lo conocían desde hacía tiempo llegaron a creerle, dado que hablaba mejor el idioma chino que su propia lengua, y que su vestimenta y su comportamiento eran impecablemente chinos.</p>
                <p>Debido a la situación económica que se vivía en la isla, el maestro Kanbun decide mudarse a la ciudad de Wakayama, donde consiguió trabajo en una fábrica textil, donde conoció a un joven okinawense que lo convencería de enseñarle su arte en secreto. De esta forma el maestro Kanbun funda su propio dojo sin nombre, donde enseña a alumnos con la única condición de que guarden su secreto. Esto se mantiene así hasta el año 1932, cuando abre su primer dojo público en Wakayama.</p>
                <p>Finalmente en 1937, autorizaría a su hijo Kan-ei a establecer otro Dojo en el centro de Osaka, a donde él también se establecería en 1940. Además, en otoño de ese año, su hijo cambiaría el nombre del dojo a &quot;Uechi-Ryu&quot; por unanimidad de los alumnos aventajados.</p>
                <p>Tristemente el maestro Kanbun Uechi fallecería en 1948 por nefritis, y quien continuaría con su legado y con la promoción de este estilo sería su hijo Kan-ei, quien recibió el rango de 10°Dan en tres ocasiones de diferentes Organizaciones durante su carrera como Karateka. Kan-ei fallecería en febrero de 1991.</p>
                <p>En la actualidad, el Uechi-Ryu es uno de los estilos de Karate tradicional de Okinawa más practicados del mundo.</p>
                <h2>Técnicas de Uechi Ryu</h2>
                <p>Los nombres de las técnicas principales corresponden a la denominación antigua y son los siguientes: </p>
                <ul>
                    <li>Daiken</li>
                    <li>Shouken(sioken)</li>
                    <li>Chuken</li>
                    <li>Sishisen(Nukite)</li>
                    <li>Boshiken</li>
                    <li>Shutou</li>
                    <li>Hiji</li>
                    <li>Riken(Uraken)</li>
                    <li>Haito</li>
                    <li>Kentsui(Tettsui)</li>
                    <li>Kote</li>
                    <li>Kakushi</li>
                    <li>Haishu</li>
                    <li>Hajiki</li>
                    <li>Sokusen</li>
                    <li>Sokuto</li>
                    <li>Sune</li>
                    <li>Kakato</li>
                    <li>Sokutei</li>
                    <li>Haisoku</li>
                    <li>Hiza</li>
                </ul>
                <h2>Uechi Ryu Katas</h2>
                <p>Actualmente el estilo cuenta con un total de 8 katas, siendo 3 de estas creadas por su fundador, el maestro Kanbu Uechi, 3 por su hijo, Kenei Uechi, 1 por el maestro Saburo Uehara y 1 por el maestro Seiki Itokazu. Dichos Katas son: </p>
                <ul>
                    <li>Sanchin</li>
                    <li>Sesan</li>
                    <li>Sanseryu</li>
                    <li>Kanshiwa</li>
                    <li>Seryu</li>
                    <li>Kanchin</li>
                    <li>Seichin</li>
                    <li>Daini Seisan (actualmente conocido como Kanshu)</li>
                </ul>
            </section>
        </main>
    )
}
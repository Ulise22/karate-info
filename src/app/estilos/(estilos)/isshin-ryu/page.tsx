import ArticlesHero from '@/components/ArticlesHero'
import styles from '@/app/articulos/article.module.css'
import isshin from '@/assets/articles-preview/isshin_ryu.jpg'
import Link from 'next/link'

export default function IsshinRyu () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Isshin Ryu' img={isshin} />
            <section className={styles.article__container}>
                <p>Isshin-Ryu es un estilo de Karate Okinawense fundado en el año 1956 por el maestro Tatsuo Shimabuku. Este estilo tiene una especial inspiración en los estilos <Link href='/estilos/shorinji-ryu'>Shorin Ryu</Link> y <Link href='/estilos/gojuryu'>Goju Ryu</Link>, además hace un uso especial de las armas tradicionales del <Link href='/estilos/karate-kobudo'>Kobudo</Link>.</p>
                <p>Destaca por hacer uso de los musculos del antebrazo en lugar de los huesos cubital y radial para bloquear y desviar los golpes, además de hacer uso del puño en forma vertical con el dedo pulgar sobre este. Este estilo es practicado en varios países de todo el mundo, pero ha logrado una especial popularidad en Estados Unidos, donde las tropas militares y marines destinados a la base militar de Okinawa, una vez volvieron a su país, difundieron ampliamente este estilo en la región Norteaméricana.</p>
                <p>Al recopilar las características del Karate Shorin Ryu, Goju Ryu y del Kobudo, su origen se basa en los 3 antiguos sistemas de Karate, el Naha-Te, el Shuri-Te y el Tomari-Te. Los métodos formales de práctica de este estilo, están compuesto por una serie de ejercicios tradicionales básicos y varios katas, tanto del karate como del kobudo.</p>
                <p>Su fundador, el Maestro Tatsuo Shimabuku, fundó este estilo luego de entrenar bajo la tutela de algunos grandes maestros, como lo son el Maestro Chojun Miyagi, el Maestro Chotoku Kiyan y el Maestro Taira Shinken, quienes les enseñaron los estilos de Karate Shorin Ryu, Goju Ryu y el Kobudo. Con lo aprendido por sus maestros, amalgamó las enseñanzas en un solo sistema de defensa personal al cual agregó modificaciones que consideró necesarias para que el estilo funcionara de mejor manera.</p>
                <p>Los fundamentos, y las técnicas básicas de karate utilizadas en este estilosm son: Te-no-bu o Te-Waza; Ashi-no-bu o Keri-Waza; Kotekitae. Ejercicios desarrollados por el maestro Shimabuku y su alumno Kaneshi Eiko, además estos ejercicios son la base del estilo por tanto se se practican al inicio de cada clase, para acondicionar a los alumnos y prepararlos para ejercicios de mayor complejidad técnica.</p>
                <p>Luego del fallecimiento de su fundador, el Maestro Shimabuku, el día 30 de mayo de 1975. Surgieron varias líneas diferentes del Isshin-Ryu, creadas por sus alumnos de rangos más altos. Entre ellas Escuelas y Asociaciones, entre las que destacan: </p>
                <ul>
                    <li>KIKKK - Koden Isshinryu Karate Kobudo Kenkyukai</li>
                    <li>AOKA - American Okinawan Karate Association</li>
                    <li>GKA - Guardian Karate Association</li>
                    <li>IIKA - International Isshin-Ryu Karate Association</li>
                    <li>IIKF - International Isshin-Ryu Karate Federation</li>
                    <li>IIKKA - Isshinkan Isshin-Ryu Karate and Kobudo Association</li>
                    <li>IKA - Isshinryu Karate-Do Association.</li>
                    <li>IOTKA - Isshin-Ryu Okinawa Tradictional Karate Association</li>
                    <li>IWKA - Isshin-Ryu World Karate Association</li>
                    <li>OI - Order of Isshin-Ryu</li>
                    <li>OIKKA - Okinawa Isshin-Ryu Karate and Kobudo Association</li>
                    <li>SWKO - Shinshinkan World Karate Organization.</li>
                    <li>TKS - Tatsuo Kan Society</li>
                    <li>UIC - United Isshin-Ryu Council</li>
                    <li>UIKA - United Isshinryu Karate Association</li>
                    <li>UIKF - United Isshin-Ryu Karate Federation</li>
                    <li>USIKA - The United States Isshinryu Karate Association.</li>
                </ul>
                <h2>Isshin Ryu Katas</h2>
                <p>Con la excepción del <b>Sunsu</b>, los katas utilizados en estilo provienen, en algunos casos con variaciones adaptadas al estilos, de los estilos y artes marciales que inspiraron al Isshin Ryu. Dichos katas son: </p>
                <ul>
                    <li>Seisan (Trece adversarios)</li>
                    <li>Seiunchin (calma en la Tormenta)</li>
                    <li>Naihanchi (o tekki / Jinete de Hierro)</li>
                    <li>Wansu (o empi)</li>
                    <li>Chinto</li>
                    <li>Sanchin (Tres Batallas)</li>
                    <li>Kusanku </li>
                    <li>Sunsu (hombre de piedra)</li>
                    <li>Tokumine no kon</li>
                    <li>Urashi bo </li>
                    <li>Shishi no kon </li>
                    <li>Kusanku sai</li>
                    <li>Chatanyara no sai</li>
                    <li>Kyan no sai</li>
                    <li>Hamahiga-no-tuifa</li>
                    <li>Nunchaku-no-Kata </li>
                    <li>Bo-tai-Bo-Kumite (Bo contra Bo)</li>
                    <li>Bo-tai-Sai-Kumite (Bo contra Sai)</li>
                    <li>Bo-tai-Tonfa-Kumite (Bo contra Tonfa)</li>
                </ul>
                <p>Entre estas katas, se incluyen varias que utilizan Armas tradicionales propias del Kobudo. Y si bien el maestro Shimabuku enseñó únicamente tres de las armas utilizadas por este marcial, como lo son el Bo, el Sai y la Tonfa, otras líneas del Isshin-Ryu hacen uso de elementos como el Nunchaku, la Kama, el Eku y los Tekko para hacer ciertos katas</p>
            </section>
        </main>
    )
}
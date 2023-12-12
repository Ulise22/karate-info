import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import okinawa from '@/assets/articles-preview/okinawa.jpg'
import Link from 'next/link'

export default function Okinawa () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Okinawa Karate' img={okinawa} />
            <section className={styles.article__container}>
                <p>La isla de Okinawa ha tenido una gran importancia no sólo en la historia del karate, sino tambien en la de las diferentes artes marciales japonesas como el <b>tegumi</b>, <b>Shuri-te</b>, <b>Tomari-te</b>, <b>Naha-te</b> y el kobudo de Okinawa, dado que es en este lugar donde se crearon. Esta isla fue influenciada a lo largo de su historia por diferentes culturas y civilizaciones tales como China, Corea y la región del sudeste asiático, hasta fue anexada a Japón. Todas estas culturas fueron influyendo en el desarrollo de las artes marciales en Okinawa.</p>
                <p>En el año 1477, la practica de las artes marciales había sido prohibida por el rey de entonces <b>Sho Shin</b> en el Reino de Ryukyu, que estaba conformado por los 3 anteriores reinos que hoy forman parte de las actuales islas de Okinawa: Hokuzan (Montaña Septentrional), Chuzan (Montaña Central) y Nanzan (Montaña Meridional). Pese a esto, las artes marciales To-te y Ryukyu Kobudo se continuaron enseñando en secreto. Dicha prohibición se exentendió hasta el año 1609, cunado Okinawa sería invadida por el Dominio de Satsuma en el acontecimiento llamado <b>Invasión de las Ryukyu por el clan de Satsuma</b>. Se cree que al ser un pueblo pacifista, dada su inlfuencia por el budismo, y al la población tener prohibida la tenencia de armas fue fácil para el clan Satsuma invadirlos.</p>
                <p>La prohibición de las artes marciales en aquella epoca, además de la prohibición del uso de armas, contribuyeron al desarrollo y popularidad del <Link href='/articulos/karate-do'>Karate-do</Link> (lucha de manos desnudas) y del <Link href='/articulos/karate-kobudo'>Kobudo</Link>, que utiliza elementos domésticos y agrícolas de fácil acceso como armamento. Además, los habitantes de Okinawa terminarían combinando las artes marciales chinas con las variantes locales que ya existían en la isla para formar lo llamado <b>Tōde</b>, normalmente llamado <b>Okinawa-te</b>.</p>
                <p>Básicamente, si hubiera que resumir en puntos claves como las Islas de Okinawa influyeron en la creación y desarrollo del karate, habría que decir:</p>
                <ul>
                    <li>1. <b>La Influencia de China:</b> Dado que en un inicio Okinawa era un país tributario de China, estas 2 regiones tuvieron un intercambio bastante amplio, que principalmente abordaba lo comercial, pero que también abordó lo cultural. Siendo que muchas de las katas que se utilizan en el karate hoy en día, tiene raíces en estilos de artes marciales chinos como lo son el Kung Fu.</li>
                    <li>2. <b>La Prohibición de Armas:</b> Producto de la prohibición de armas que sufrió la isla ddurante el siglo XVII, y producto de las frecuentes invasiones que recibía la isla por parte de otros países, sus ciudadanos se vieron obligados a buscar formas de defenderse sin recurrir a las armas de fuego, es así como desarrollaron técnicas y artes marciales que se desarrollarían hasta conformar lo que hoy conocemos como karate.</li>
                    <li>3. <b>Te y Sho:</b> En la época en que las prohibición de armas continuaba vigente, en la isla de Okinawa se desarrollaron 2 estilos de pelea que en el futuro contribuirían con el desarrollo del karate: el Te y el Sho. Siendo el Te un estilo de pelea que se centraba más en las manos, mientras que el Sho hacía uso de las manos y de los pies.</li>
                    <li>4. <b>La Influencia de los Samuráis:</b> Pese a que Okinawa estaba bajo el dominio japonés, la isla también recibió una influencia signficativa por parte de los Samurái, quienes también se integraron en las artes marciales locales, llevando a una fusión entre las técnicas tradicionales de allí con la disciplina y ética samurái.</li>
                    <li>5. <b>La Mezcla de Estilos:</b> Con el paso del tiempo, otras formas de karate se fueron desarrollando en Okinawa, con diferentes ténicas y enfoques como lo son <Link href='/articulos/gojuryu'>Goju-Ryu</Link>, <Link href='/articulos/shorinji-ryu'>Shorin-Ryu</Link> o el <b>Uechi-Ryu</b>. </li>
                    <li>6. <b>La Globalización del Karate:</b> Por último, luego de la Segunda Guerra Mundial, muchos maestros y senseis de Okinawa compartieron sus conocimientos con el mundo, lo que llevó a una mayor exposición global por parte del karate, y de las artes marciales de Okinawa en general. Convirtiendo al karate, en una de las artes marciales más practicadas en todo el mundo.</li>
                </ul>
            </section>
        </main>
    )
}
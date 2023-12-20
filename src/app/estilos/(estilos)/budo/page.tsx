import ArticlesHero from '@/components/ArticlesHero'
import styles from '@/app/articulos/article.module.css'
import budo from '@/assets/articles-preview/budo.jpg'
import Link from 'next/link'

export default function Budo () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Budo' img={budo} />
            <section className={styles.article__container}>
                <p>Budo, que en español significa &quot;El camino del guerrero&quot;, aunque a menudo se lo suele traducir como &quot;Artes Marciales&quot;, es una palabra que engloba el conjunto de conocimientos técnicos de las artes marciales japonesas modernas, y al conjunto de normas éticas por las que se rigen sus practicantes, algo similar con lo que era el <b>Bushido</b> para los guerreros samurái. Es un camino marcial en un sentido ténico, teórico y ético al mismo tiempo, ya que en su corpus se incluyen aspectos tanto marciales como espirituales (meditación, etiqueta, valores, etc.).</p>
                <p>En 1977 se crea oficialmente la <b>Asociación Japonesa del Budo</b>, que fue fundada por 9 federaciones de artes marciales japonesas. Estas 9 asociaciones de artes marciales creadoras eran: </p>
                <ul>
                    <li>Judo</li>
                    <li>Kendo</li>
                    <li>Kyudo</li>
                    <li>Sumo</li>
                    <li>Aikido</li>
                    <li>Shorinji Kempo</li>
                    <li>Naginata</li>
                    <li>Jukendo</li>
                    <li>Karate-do</li>
                </ul>
                <p>En el año 1987 se promacla la Constitución del Budo, que recoge los principios éticos y comunes que han de regir a cada una de las 9 artes marciales. Algunas de estas 9 disciplinas están porque desde el primer día sus principales maestros estuvieron presentes en la <b>Dai Nihon Butokukai</b> cuando se registro la Asociación Japonesa de Budo, y algunas otras con el paso de las decadas se fueron sumando porque se sentían unidos en el espíritu del Budo y desean preservar dicho espíritu.</p>
                <p>Hoy en día se usa el término <b>Budo</b> para referirse a las enseñanzas de las arte marciales tradicionales como lo son el <Link href='/articulos/karate-do'>Karate</Link>, el <b>Judo</b>, <b>Aikido</b> y el <b>Kendo</b>.</p>
                <h2 className={styles.article__subtitle}>Principios del Budo.</h2>
                <p>Producto del estado de guerra en que se encontró Japón durante muchos años, los llevó a desarrollar un código de comportamiento que evitara conflictos innecesarios en busca de mantener una convivencia armónica en los escasos momentos de paz. Además buscaban, que cuando ya estuvieran en guerra o envueltos en un conflico, este no excediera ciertos limites. Estas virtudes promovidas por el Budo son: </p>
                <ul>
                    <li><b>Rectitud: </b>La autoexigencia debe ser máxima, sino es que absoluta. No se permite la mínima variación entre lo que se dice y se hace.</li>
                    <li><b>Heroicidad: </b>Asumir con felicidad y responsabilidad los riesgos tomados, siempre actuando con la mayor inteligencia posible para cuidarse.</li>
                    <li><b>Compasión: </b>Aprovechar cualquier situación que se tenga y buscar activimente ayudar a los demás.</li>
                    <li><b>Respeto: </b>Ofrecer y obtener respeto por el trato, nunca por la fuerza, y menos aún por la crueldad.</li>
                    <li><b>Integridad: </b>No hacer promesas que no se pueden cumplir, la fuerza de la palabra debe ser aún mayor que la del cuerpo en combate.</li>
                    <li><b>Honor: </b>Hacer introspección respecto al cumplimiento de estas virtudes, nunca dejar de juzgarse a uno mismo.</li>
                    <li><b>Lealtad: </b>Ser fiel con aquellos con quien uno tiene un compromiso, asumiendo las consecuencias de las palabras y acciones propias.</li>
                </ul>
                <p>Estos valores vienen influenciados por las filosofías del confucianismo, el sintoísmo, el taoísmo y el budismo (más que nada por su corriente zen). Por todos los requisitos necesarios para cumplir con las virtudes del Budo, para practicarlos en la vida diaria, es necesario un alto grado de consciencia interna y externa basada en el conocimiento del propio cuerpo y el manejo de la respiración, la comprensión de las emociones, la estabilidad de pensamiento, y la sincronización con el movimiento exterior.</p>
                <p>Otra definición poco conocida del Budo es la de &quot;Camino de la Guerra&quot; dado que &quot;do&quot; significa &quot;camino&quot; y &quot;bu&quot; puede ser traducido del japonés como &quot;guerra&quot;. Pero en China, la palabra BU es un concepto que habla de cesar la lucha, de dejar de combatir, lo que le daría un significado como &quot;el camino del cese de la lucha&quot;. Es decir que la palabra tiene un doble significado. El budo nos enseña que un gran guerrero sabe como ganar una batalla, pero el maestro es quien sabe vencer antes de entrar al combate, evitando la confrontación.</p>
            </section>
        </main>
    )
}
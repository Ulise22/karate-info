import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../../article.module.css'
import jutsu from '@/assets/articles-big/karate_jutsu (2).jpg'
import Link from 'next/link'

export default function CelebridadesKarate () {
    return(
        <main className={styles.article}>
            <ArticlesHero title='Karate Jutsu' img={jutsu} />
            <section className={styles.article__container}>
                <h2>¿Qué significa el Karate Jutsu?</h2>
                <p>La traducción literal de <b>Jutsu</b> del japonés, es &quot;Ciencia&quot; o &quot;Método&quot;. Que en el contexto de las artes marciales, el <b>Karate Jutsu</b> se puede entender como la estrategia o las técnicas utilizadas en un combate real. Esta definición, contrasta con lo que entendemos por <Link href='/articulos/karate-do'>Karate-do</Link>, dado que la palabra <b>Do</b>, se traduce como &quot;El camino&quot;, que en el contexto de las artes marciales, se utiliza para inferir que el entrenamiento que se está por realizar está enfocado especialmente en el desarrollo del carácter de quien lo practica.</p>
            </section>
        </main>
    )
}
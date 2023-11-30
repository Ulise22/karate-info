import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../components/peleador.module.css'
import higa from '@/assets/peleadores/higa.jpg'

export default function Higa () {
    return(
        <main className={styles.peleador}>
            <ArticlesHero title='Oscar Higa' img={higa} />
        </main>
    )
}
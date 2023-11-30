import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../components/peleador.module.css'
import yorgelis from '@/assets/peleadores/yorgelis.jpg'

export default function Salazar () {
    return(
        <main className={styles.peleador}>
            <ArticlesHero title='Yorgelis Salazar' img={yorgelis} />
        </main>
    )
}
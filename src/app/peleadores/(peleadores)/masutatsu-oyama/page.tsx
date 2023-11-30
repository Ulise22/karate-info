import ArticlesHero from '@/components/ArticlesHero'
import styles from '../../components/peleador.module.css'
import mastatsu from '@/assets/peleadores/masutatsu.jpg'

export default function Masatsu () {
    return(
        <main className={styles.peleador}>
            <ArticlesHero title='Masutatsu Oyama' img={mastatsu} />
        </main>
    )
}
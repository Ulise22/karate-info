import PeleadorCard from '../homepage/PeleadorCard'
import styles from './suggestCelebrities.module.css'
/* IMAGES */
import norris from '@/assets/famosos/chuck_norris.jpg'
import lee from '@/assets/famosos/bruce_lee.jpg'
import lundgren from '@/assets/famosos/dolph_lundgren.jpg'
import vanDamme from '@/assets/famosos/van_damme.jpg'

export default function SuggestCelebrities () {
    return(
        <section className={styles.suggestCelebrities}>
            <h2 className={styles.suggestCelebrities__title}>Celebridades de Karate</h2>
            <div className={styles.suggestCelebrities__container}>
                <PeleadorCard peleadorImage={norris} nombre='Chuck Norris' link='/famosos/chuck-norris' texto='Chuck Norris es uno de los actores más emblemáticos del cine de acción en Estados Unidos, paricipando en más de 30 películas y en más de una decena de programas de televisión...' />
                <PeleadorCard peleadorImage={lee} nombre='Bruce Lee' link='/famosos/bruce-lee' texto='Bruce Lee es una de las mayores figuras y representantes de las artes marciales en el cine de historia, de hecho, debe ser el primero en que muchos piensan a la hora de buscar un artista marcial tan famoso en el cine...' />
                <PeleadorCard peleadorImage={lundgren} nombre='Dolph Lundgren' link='/famosos/dolph-lundgren' texto='Dolph Lundgren es un famoso actor de hollywood sueco, aunque también supo ser director, guionista, ingeniero químico, modelo y especialista en artes marciales, siendo un conocedor tanto del Judo como del Karate-do...' />
                <PeleadorCard peleadorImage={vanDamme} nombre='Jean-Claude Van Damme' link='/famosos/jean-claude-van-damme' texto='Jean-Claude Van Damme es famoso actor de hollywood, guionista, productor, director, editor de cine, boxeador, kickbóxer, karateca, escenógrafo, artista marcial, actor de voz y compositor...' />
            </div>
        </section>
    )
}
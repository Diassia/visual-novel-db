import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { joinedGenre } from './utils'

const RecommendationCard = (props) => {
    // const [showMore, setShowMore] = useState(false);
    
    return (
        <>
            <div className={styles.card}>
                <div className={styles.cardContent}>
                    <div className={styles.cardInfo}>
                        <h2 className={styles.cardSubtitle}>{props.vnData.title}</h2>
                        <h6>{joinedGenre(props.vnData.genre)}</h6>
                        <h5 className={styles.cardRating}>Rating: {props.vnData.rating}</h5>
                    </div>
                    <div className={styles.cardImage}>
                        <Image 
                            src={props.vnData.urlImage}  
                            alt="cat"     
                            layout="fill"
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.overflow}>
                    <h3 className={styles.cardDescription}>{props.vnData.description}</h3>
                </div>
            </div>
        </>
    )
}

export default RecommendationCard;
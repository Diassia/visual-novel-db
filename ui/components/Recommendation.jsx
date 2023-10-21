import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Recommendation = (props) => {
    // const name = "Danganronpa";
    // const image = "http://placekitten.com/500/300";
    // const description = "Death Game. Murder. Despair.";
    // const rating = 10;
    // const genre = ["sci-fi", "horror", "sad", "death game"];

    const joinedGenre = props.vnData.genre.map(e => {
        return e[0].toUpperCase() + e.substring(1);
    }).join(", ");
    
    return (
        <>
            {/* <h2 className={styles.cardTitle}>Random Recommendation</h2> */}
            <div className={styles.card}>
                <div className={styles.cardContent}>
                    <div className={styles.cardInfo}>
                        <h2 className={styles.cardSubtitle}>{props.vnData.title}</h2>
                        <h6>{joinedGenre}</h6>
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
                <h3 className={styles.cardDescription}>{props.vnData.description}</h3>
            </div>
        </>
    )
}

export default Recommendation;
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
        <div className="card">
            {/* <h2 className={styles.cardtitle}>Random Recommendation</h2> */}
            <div className={styles.imageContainer}>
                <Image 
                    src={props.vnData.urlImage}  
                    alt="cat"     
                    width="100%"
                    height="100%"
                    //layout options: responsive, fixed, fill, instrinsic
                    layout="fill"
                    className={styles.image}/>
            </div>
            <div>
                <h2 className={styles.cardsubtitle}>{props.vnData.title}</h2>
                <h6>{joinedGenre}</h6>
                <h3 className={styles.carddescription}>{props.vnData.description}</h3>
                <h5 className={styles.cardrating}>Rating: {props.vnData.rating}</h5>
            </div>
        </div>
    )
}

export default Recommendation;
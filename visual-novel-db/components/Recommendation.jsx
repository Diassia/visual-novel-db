import Image from 'next/image'

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
            <Image 
                src={props.vnData.urlImage}  
                alt="cat"     
                width={400}
                height={400}
                //layout options: responsive, fixed, fill, instrinsic
                layout="intrinsic"/>
            <div className="card-body">
                <h5 className="card-title">Random Recommendation</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.vnData.title}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{joinedGenre}</h6>
                <p className="card-text">{props.vnData.description}</p>
                <p className="card-text">Rating: {props.vnData.rating}</p>
            </div>
        </div>
    )
}

export default Recommendation;
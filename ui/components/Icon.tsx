import Image from 'next/image'

//TODO: create icons for last ten (use getLastTenPlayed func)

const Icon = (props) => {
    return (
        <Image 
            // src={image}
            src={props.vnData.icon}
            alt="whoops"     
            // className={styles.icon}
            width={50}
            height={50}
        />
    );
}
 
export default Icon;
import Image from 'next/image'

//TODO: create icons for last ten (use getLastTenPlayed func)

const Icon = (props) => {
    // console.log(`This image displayed is from ${props.vnData.title}`);
    
    return (
        <Image 
            src={props.vnData.urlImage}  
            alt="cat"     
            width={400}
            height={400}
            //layout options: responsive, fixed, fill, instrinsic
            layout="intrinsic"/>
    );
}
 
export default Icon;
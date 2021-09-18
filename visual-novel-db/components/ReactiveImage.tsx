import Image from 'next/image'

const ReactiveImage = (props) => {
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
 
export default ReactiveImage;
import Image from 'next/image'

const ReactiveImage = (props) => {
    // console.log(`This image displayed is from ${props.vnData.title}`);

    {/* Random image - Make to a banner? */}
    {/* <div className="container">
        { data.visualNovels.length > 0 ? 
        <ReactiveImage vnData={data.visualNovels[Math.floor(Math.random() * data.visualNovels.length)]}/>
        : <></>
        }
    </div> */}
    
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
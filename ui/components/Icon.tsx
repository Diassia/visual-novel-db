import Image from 'next/image'

const Icon = (props) => {
    return (
        <div>
            <Image 
                src={props.vnData.icon}
                alt="whoops"     
                width={50}
                height={50}
            />
            <h6>{props.vnData.title}</h6>
        </div>
    );
}
 
export default Icon;
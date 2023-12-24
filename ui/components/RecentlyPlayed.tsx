import Icon from '../components/Icon'

interface Props {
    vnData: VisualNovels
}

const RecentlyPlayed: React.FC<Props> = ({vnData}) => {
    const visualNovels: VisualNovels = vnData;
    
    return (
        <>
            <h3>Most recent visual novels played:</h3>
            {
                getLastTenPlayed(visualNovels).map((vn) =>
                    vn && <Icon vnData={vn} />
                )
            }
        </>
    )
}
 
export default RecentlyPlayed;

const getLastTenPlayed = (vnData) => {
    const lastTen = []
    for (let i = vnData.length - 1; i >= (vnData.length - 10); i--) {
        if (i) {
            lastTen.push(vnData[i])
        }
    }
    return lastTen
}
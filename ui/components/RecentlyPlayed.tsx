import Icon from '../components/Icon'
import styles from '../styles/Home.module.css'

interface Props {
    vnData: VisualNovels
}

const RecentlyPlayed: React.FC<Props> = ({vnData}) => {
    const visualNovels: VisualNovels = vnData;
    
    return (
        <div className={styles.recentlyPlayedCard}>
            <h3 className={styles.cardTitle}>Most recent visual novels</h3>
            <div className={styles.recentlyPlayedCardContent}>
                {
                    getLastTenPlayed(visualNovels).map((vn) =>
                        vn && <Icon vnData={vn} />
                    )
                }
            </div>
        </div>
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
import React, { useState, useEffect } from 'react'
import ReactiveImage from '../components/ReactiveImage'
import Recommendation from '../components/Recommendation'
import styles from '../styles/Home.module.css'

const Home = () => {
    const [data, setData] = useState({visualNovels: []});
    

    const getLastTenPlayed = () => {
        const lastTen = []
        for (let i = data.visualNovels.length - 1; i >= (data.visualNovels.length - 10); i--) {
            lastTen.push(data.visualNovels[i])
        }
        return lastTen
    }

    const handleDatabase = async () => {
        const res = await fetch("./database.json");
        const data = res.json();
        return data;
    }

    useEffect(() => {
        (async () => {
          const result = await handleDatabase();
          setData(result);
        })();
    }, [])

    return (
        <>
            <main className={styles.main}>
                <h4 className={styles.title}>
                    Visual Novel Database
                </h4>

                {/* Random image - Make to a banner? */}
                {/* <div className="container">
                    { data.visualNovels.length > 0 ? 
                    <ReactiveImage vnData={data.visualNovels[Math.floor(Math.random() * data.visualNovels.length)]}/>
                    : <></>
                    }
                </div> */}
                <div>
                    { data.visualNovels.length > 0 ? 
                        <Recommendation vnData={data.visualNovels[Math.floor(Math.random() * data.visualNovels.length)]}/>
                        : <></>
                    }
                </div>
                <h5>Most recent visual novels:</h5>
                    
            </main>
        </>
    )
}

export default Home
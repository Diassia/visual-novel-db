import React, { useState, useEffect } from 'react'
import ReactiveImage from '../components/ReactiveImage'
import Recommendation from '../components/Recommendation'
import styles from '../styles/Home.module.css'

const Home = () => {
    const [data, setData] = useState({visualNovels: []});

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
                <div className={styles.card}>
                    { data.visualNovels.length > 0 ? 
                        <Recommendation vnData={data.visualNovels[Math.floor(Math.random() * data.visualNovels.length)]}/>
                        : <></>
                    }
                </div>
            </main>
        </>
    )
}

export default Home
import React, { useState, useEffect } from 'react'
import RecommendationCard from '../components/RecommendationCard'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import NavBar from '../components/NavBar/NavBar'
import RecentlyPlayed from '../components/RecentlyPlayed'

// TODO:
// 1. Most recent visual novels
// 2. Login
// 3. Add visual novel button
// 4. General layout for all pages

const Home = () => {
    const [data, setData] = useState({visualNovels: []});

    const getRandomRecommendations = (vnData) => {
        const randomVN = vnData[Math.floor(Math.random() * vnData.length)];
        let secondRandomVN = vnData[Math.floor(Math.random() * vnData.length)];
        while (randomVN === secondRandomVN) {
            secondRandomVN = vnData[Math.floor(Math.random() * vnData.length)];
        }

        return (
            <>
                <RecommendationCard vnData={randomVN}/>
                <RecommendationCard vnData={secondRandomVN}/>
            </>
        )
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
            <Head>
                <title>Visual Novel Database</title>
                <meta name="description" content="homepage" />
            </Head>
            <main className={styles.main}>
                <NavBar />
                <h3 className={styles.cardTitle}>Random Recommendations</h3>
                <div className={styles.recommendationCards}>
                    { data.visualNovels.length > 0 ? (
                        getRandomRecommendations(data.visualNovels)
                    )
                        : <></>
                    }
                </div>
                <RecentlyPlayed vnData={data.visualNovels as VisualNovels} />
            </main>
        </>
    )
}

export default Home
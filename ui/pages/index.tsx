import React, { useState, useEffect } from 'react'
import RecommendationCard from '../components/RecommendationCard'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import NavBar from '../components/NavBar/NavBar'
import Icon from '../components/Icon'

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

    const getLastTenPlayed = () => {
        const lastTen = []
        for (let i = data.visualNovels.length - 1; i >= (data.visualNovels.length - 10); i--) {
            if (i) {
                lastTen.push(data.visualNovels[i])
            }
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

    console.log(getLastTenPlayed());

    return (
        <>
            <Head>
                <title>Visual Novel Database</title>
                <meta name="description" content="homepage" />
            </Head>
            <main className={styles.main}>
                <NavBar />
                <div className={styles.recommendationCards}>
                    { data.visualNovels.length > 0 ? (
                        getRandomRecommendations(data.visualNovels)
                    )
                        : <></>
                    }
                </div>
                <h2>Most recent played:</h2>
                {
                    getLastTenPlayed().map((vn) =>
                        vn && <Icon vnData={vn} />
                    )
                }
            </main>
        </>
    )
}

export default Home
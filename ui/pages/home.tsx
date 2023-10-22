import React, { useState, useEffect } from 'react'
import RecommendationCard from '../components/RecommendationCard'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

// TODO:
// 1. Most recent visual novels
// 2. Login
// 3. Add visual novel button
// 4. General layout for all pages

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
                <div className={styles.homeNavigation}>
                    <h4 className={styles.title}>
                        Visual Novel Database
                    </h4>
                    <Link href="/database">Go to database</Link>
                </div>
                <div>
                    { data.visualNovels.length > 0 ? 
                        <RecommendationCard vnData={data.visualNovels[Math.floor(Math.random() * data.visualNovels.length)]}/>
                        : <></>
                    }
                </div>
            </main>
        </>
    )
}

export default Home
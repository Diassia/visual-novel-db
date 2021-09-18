import React, { useState, useEffect } from 'react'
import ReactiveImage from '../components/ReactiveImage'

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

    console.log(data)

    return (
        <>
            <p>Hello World</p>

            <div className="container">
                { data.visualNovels.length > 0 ? 
                <ReactiveImage vnData={data.visualNovels[Math.floor(Math.random() * data.visualNovels.length)]}/>
                : <></>
                }
            </div>
        </>
    )
}

export default Home
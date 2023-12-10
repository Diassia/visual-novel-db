import { useEffect, useState } from "react";
import { Table } from "../components/Table"
import NavBar from "../components/NavBar/NavBar";
import styles from '../styles/Home.module.css'

const Database = () => {
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
            <NavBar />
            <h3 className={styles.title}>
                Database
            </h3>
            <Table data={data.visualNovels} />
        </>
    )
}

export default Database
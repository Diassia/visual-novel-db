import { useEffect, useState } from "react";
import { Table } from "../components/Table"
import Link from "next/link";

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
            <Link href="/home">Back to home</Link>
            <Table data={data.visualNovels} />
        </>
    )
}

export default Database
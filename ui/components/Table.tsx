import { joinedGenre } from "./utils"

interface VisualNovel {
    title: string,
    rating: number,
    genre: string[],
    description: string,
    urlImage: string,
}

interface TableProps {
    data: VisualNovel[]
}

// TODO:
// 1. add filters to sort by title, rating, genre
// 2. small picture icon
// 3. edit details option

export const Table = (props: TableProps) => {
    const tableData = props.data.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.title}</td>
                    <td>{info.rating}</td>
                    <td>{joinedGenre(info.genre)}</td>
                    <td>{info.description}</td>
                </tr>
            )
        }
    )

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Rating</th>
                        <th>Genre</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
        </div>
    )
}
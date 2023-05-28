import { useEffect } from "react"
import { useFetchListQuery } from "../../../store/store"

export default function FavRecipe() {
    const { data, isLoading, isError } = useFetchListQuery()
    useEffect(() => {
        async function fetchEachdata() {
            console.log(data[0].infolink)
            const response =await fetch(`https://api.edamam.com/search?r=${data[0].infoLink}&app_id=1c0b4f3e&app_key=8b6739af5fb1802f1b25e59f4fa41b4c`)
            const res = await response.json()
            console.log(res)
        }
        fetchEachdata()
    })
    console.log(data)
    return ( 
        <div>Here the Favourite recipes selected by ther users are shown</div>
    )
}
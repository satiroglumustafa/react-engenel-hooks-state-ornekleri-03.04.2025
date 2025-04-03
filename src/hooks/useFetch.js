import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [apiData, setApiData] = useState([])
    const [loading,setLoading] = useState(true)

    const apiDataFunct = async () => {
        try {
            const apiUrl = await fetch(url)
            const apiJsonData = await apiUrl.json()
            setApiData(apiJsonData.hits)
            setLoading(false)
        } catch (error) {
            console.error(
                `${window.navigator.onLine ? "İnternet bağlı ama veri çekilemedi" : "İnternete bağlı değil Bu yüzden veri çekilemedi"}`
            )
            setLoading(true)
        }
    }


    useEffect(() => {
        apiDataFunct()
    }, [])

    return {apiData,loading}

}

export default useFetch
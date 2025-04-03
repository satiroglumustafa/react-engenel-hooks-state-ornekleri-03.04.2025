import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiDataFunct = async () => {
            try {
                const apiUrl = await fetch(url);
                const apiJsonData = await apiUrl.json();
                setApiData(apiJsonData.hits);
            } catch (error) {
                console.error(
                    `${window.navigator.onLine
                        ? "İnternet bağlı ama veri çekilemedi"
                        : "İnternete bağlı değil. Bu yüzden veri çekilemedi"
                    }`
                );
            } finally {
                setLoading(false);
            }
        };

        apiDataFunct();
    }, [url]); // url değişirse tekrar çalışsın

    return { apiData, loading };
};

export default useFetch;

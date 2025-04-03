import { ListGroup } from "react-bootstrap"
import useFetch from "../hooks/useFetch"

const CustomHooksExs1 = () => {

    const { apiData, loading } = useFetch('https://hn.algolia.com/api/v1/search?query=chatgpt')

    if (loading) {
        return (
            <p>Yükleniyor...</p>
        )
    }

    return (
        <>

            <div className="blockArea mb-4">
                <h5><strong>Örnek 1: useFetch Kullanarak</strong> Veri Çekme</h5>
                <ListGroup>
                    {
                        apiData && (
                            apiData.map((apiProduct) => {
                                return (
                                    <ListGroup.Item key={apiProduct.story_id}>{apiProduct.title}/</ListGroup.Item>
                                )
                            })
                        )
                    }
                </ListGroup>
            </div>


        </>
    )
}

export default CustomHooksExs1
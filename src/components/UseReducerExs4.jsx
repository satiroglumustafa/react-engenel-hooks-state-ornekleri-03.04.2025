import { useEffect, useState } from "react"
import Products from "./Products"
import ProductContext from "../contexts/ProductContext"

const UseReducerExs4 = () => {


    const [product, setProduct] = useState([])

    const [totalProduct, setTotalProduct] = useState(0)



    const productsFunct = async () => {

        try {

            const productsData = await fetch('https://fakestoreapi.com/products')
            const productsJsonData = await productsData.json()
            setProduct(productsJsonData)
            setTotalProduct(productsJsonData.length)

        } catch (error) {
            console.error('Veri çekilirken hata oluştu')
        }

    }



    useEffect(() => {
        productsFunct()
    }, [])


    return (
        <>
            <div className="blockArea">
                <h5 className="mb-5"><strong>Örnek 4 </strong> Sepete Ekleme,Çıkarma,Boşaltma - UseRef,UseEffect,UseReducer </h5>
                <ProductContext.Provider value={{totalProduct,product}}>
                    <Products></Products>
                </ProductContext.Provider>
            </div>
        </>
    )
}

export default UseReducerExs4
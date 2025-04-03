
import { Col, Row } from "react-bootstrap"
import Product from "./Product"
import { useContext, useReducer } from "react"
import ProductContext from "../contexts/ProductContext"
import { ReducerTotalProduct, initialProductState } from "../reducers/ReducerTotalProduct"



const Products = () => {

    const [state, dispatch] = useReducer(ReducerTotalProduct, initialProductState)

    console.log(state)

    const { totalProduct, product } = useContext(ProductContext)
    // obje olarak çektiğimiz için aynı isimlendirmeyi yapmalıyız 
    return (
        <>
            <Row>
                {
                    product && (
                        product.map(productData =>

                            <Col xs={12} md={6} xl={3} key={productData.id} className="mb-3">
                                <Product {...productData} dispatch={dispatch} cartItems={state.cartItems} />
                                {/* Dispatch fonksiyonunu alt komponentlere props olarak atayabiliyoruz */}
                                {/* Çok Önemli */}
                            </Col>
                        )
                    )
                }
                <Col xs={12}>
                    <strong>Listelenen Ürün Sayısı: {totalProduct}</strong>
                </Col>
                <Col xs={12}>
                    <strong>Sepete Eklenen Ürün Sayısı: {state.count} </strong>
                    <h6>

                        {state.cartItems.length > 0 && (
                            <strong>Sepetteki Ürünler:</strong>
                        )}

                    </h6>
                    <ul>
                        {state.cartItems.map((item, index) => (
                            <li key={index}>{item.title}</li>
                        ))}
                    </ul>
                </Col>
                <Col xs={12}>
                Toplam Tutar: {(state.totalPrice ?? 0).toFixed(2)} TL
                </Col>
            </Row>
        </>
    )
}

export default Products
 
import { useRef, useState } from "react"
import { Button, Card } from "react-bootstrap"


const Product = (props) => {



    const [isSelected, setIsSelected] = useState(false)
    const isInCart = props.cartItems.some(item => item.id === props.id)
    // Sepete eklendi mi?

    const cardRef = useRef()

    const choosenFunct = () => {
        if (cardRef.current) {
            cardRef.current.classList.toggle('active')
            setIsSelected(cardRef.current.classList.contains('active'))
        }
    }

    const handleAddToCart = () => {
        props.dispatch({
            type: "ADD_TO_CART",
            payload: {
                id: props.id,
                title: props.title,
                price: props.price
            }
        })
    }

    const handleRemoveFromCart = () => {
        props.dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                id: props.id
            }
        })
    }
    const handleEmptyFromCart = () => {
        props.dispatch(
            {
                type: "RESET",
            }
        )
    }

    return (
        <>
            <Card ref={cardRef}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <div className="d-flex align-items-center justify-content-between flex-wrap" >
                        <Button variant="primary" style={{ width: '48%' }} className="me-1 mb-2 px-0">{props.price} TL </Button>
                        <Button variant="success" style={{ width: '48%' }} className="ms-1 mb-2">Satın Al</Button>
                        <Button variant="danger" style={{ width: '100%' }} className=" mb-2" onClick={choosenFunct}>
                            {isSelected ? 'Seçildi' : 'Seçiniz'}
                        </Button>
                        <Button variant={isInCart ? "success" : "primary"} onClick={handleAddToCart} className="mb-2" style={{ width: '100%' }} >
                            {isInCart ? "Eklendi" : "Sepete Ekle"}
                        </Button>
                        <Button variant="warning" style={{ width: '100%' }} className="mb-2" onClick={handleRemoveFromCart}>
                            Sepetten Çıkar
                        </Button>
                        <Button variant="danger" style={{ width: '100%' }} onClick={handleEmptyFromCart}>
                            Sepeti Boşalt
                        </Button>
                    </div>
                </Card.Body>
            </Card>

        </>
    )
}

export default Product
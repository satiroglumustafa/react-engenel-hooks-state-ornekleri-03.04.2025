import { Button, Card } from "react-bootstrap"
import "./Tour.css"
 

const Tour = (prop) => {

    const clickHandler = ()=>{
        console.log(prop.price)
    }

    return (
        <>
            <Card>
                <Card.Img variant="top" src={prop.image} />
                <Card.Body>
                    <Card.Title>{prop.name}</Card.Title>
                    <Card.Text>
                       {prop.info}
                    </Card.Text>
                    <Button variant="success" onClick={clickHandler}>{prop.price}</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Tour
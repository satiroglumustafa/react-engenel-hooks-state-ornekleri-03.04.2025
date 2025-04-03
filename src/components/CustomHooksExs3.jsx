import { Badge, Button, Card } from "react-bootstrap"

import useWindowResize from "../hooks/useWindowResizeControl"

const CustomHooksExs3 = () => {


    const windowSize = useWindowResize()
     

    return (
        <>
            <div className="blockArea mb-4">
                <h5><strong>Örnek 3 - Window Resize -  Custom Hook</strong></h5>
                <p><strong>Genişlik:</strong>  {windowSize.width} px</p>
                <p><strong>Yükseklik: </strong> {windowSize.height} px</p>
                {
                    windowSize.width < 768 ?
                        <Badge>Slide Kaldırıldı</Badge>
                        :

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://picsum.photos/id/237/200/300" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                }
            </div>
        </>
    )
}

export default CustomHooksExs3
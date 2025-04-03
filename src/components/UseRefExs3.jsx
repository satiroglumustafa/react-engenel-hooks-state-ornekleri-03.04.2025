

import { Button, Card } from 'react-bootstrap'
import './UseRefExs.css'
import { useEffect, useRef } from 'react'

const UseRefExs3 = () => {


    const activeElement = useRef()

    useEffect(()=>{
        activeElement.current.classList.add('active')
    },[])


    return (
        <>
            <div className='blockArea mb-5'>
                <h5>Örnek 3 - (useRef ve useEffect birlikte kullanımı)</h5>
                <p><strong>Sayfa yüklendiğinde useRef ile card divine active classı eklenir</strong></p>
                <Card ref={activeElement} style={{width:300}}>
                    <Card.Img variant="top" src="https://picsum.photos/id/235/200/300" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>

        </>
    )
}

export default UseRefExs3



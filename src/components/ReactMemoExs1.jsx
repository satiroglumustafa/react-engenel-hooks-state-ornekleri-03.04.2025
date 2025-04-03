import { useState } from "react"
import { Button } from "react-bootstrap"
import  ReactMemoChild  from "./ReactMemoChild"

const ReactMemoExs1 = ()=> {

    const [sayac,setSayac] = useState(0)

    const handleIncrease = ()=>{
        console.log('Ana komponent çalıştı')
        setSayac(prevState => prevState + 1)
    }

    return(
        <>
            <div className="blockArea">
                <h5><strong>Örnek 1</strong></h5>
                <Button variant="success" onClick={handleIncrease}>Increase</Button>
                <p>{sayac}</p>
                <ReactMemoChild name="Nil" />
            </div>
        </>
    )
}

export default ReactMemoExs1
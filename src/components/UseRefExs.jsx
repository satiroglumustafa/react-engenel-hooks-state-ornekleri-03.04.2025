import { useRef, useState } from "react"
import { Button, Form } from "react-bootstrap"
import './UseRefExs.css'


const UseRefExs = () => {

    const inputElement = useRef()
    const [isActive, setIsActive] = useState(false)

    const focusInput = () => {
        if (inputElement.current) {
            inputElement.current.classList.add('active')
            setIsActive(true)
        }
    }

    return (
        <>
            <div className="blockArea mb-5">
                <h5>Örnek 1</h5>
                <Form.Control type="text" placeholder="Normal text" className="mb-3" ref={inputElement} />
                {isActive ? <p>İnput Seçildi</p> : <p>İnput Seçilemedi</p>}
                <Button variant="success" onClick={focusInput}>Success</Button>
            </div>
        </>
    )
}

export default UseRefExs
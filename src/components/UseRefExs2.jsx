 
import { Button, Form, InputGroup } from 'react-bootstrap'
import './UseRefExs.css'
import { useRef, useState } from 'react'
 

 
const UseRefExs2 = ()=> {

    const containerRef = useRef()
    const [value,setValue] = useState('merhabalar')


    const changeFunct = (event)=>{
        setValue(event.target.value)
    }

    const ControlledInputFunct = ()=>{
        containerRef.current.insertAdjacentHTML('beforeEnd',`<div>${value}</div>`)
        
    }

    return(
        <>
           <div className='blockArea mb-5'>
                <h5>Örnek 2</h5>
                <InputGroup className="mb-3">
                    <Form.Control type="text" placeholder="Normal text" onChange={changeFunct} value={value} />
                    <Button variant="info" onClick={ControlledInputFunct}>Click</Button>
                </InputGroup>
                <div ref={containerRef}></div>
           </div>
        </>
    )
}

export default UseRefExs2
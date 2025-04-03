import { useState } from "react"
import { Col, Form, Row } from "react-bootstrap"

const ControlledInput = () => {

    const [value, setValue] = useState('')

    const [dropdownValue, setDropdownValue] = useState('')

    const controlledFunct = (event) => {
        setValue(event.target.value)
    }

    const dropdownControlledFunct = (event) => {
        setDropdownValue(event.target.value)
    }

    return (
        <>
            <Row>
                <Col xs={12} md={6}>
                    <div className="d-flex align-items-start flex-column">
                        <strong>İnput Value: {value}</strong>
                        <Form.Control type="text" placeholder="Normal text" onChange={controlledFunct} className="mb-3" />
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="d-flex align-items-start flex-column">
                        <strong>Seçilen dropdown öğesi: {dropdownValue}</strong>
                        <Form.Select aria-label="Default select example" onChange={dropdownControlledFunct} className="mb-3">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>

                    </div>
                </Col>
            </Row>
        </>
    )
}
export default ControlledInput
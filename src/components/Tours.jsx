import { Col, Row } from "react-bootstrap"
import Tour from "./Tour"

const Tours = ({ arrayTours }) => {
    return (
        <>
            <Row>
                {
                    arrayTours.map(tourData => 
                        <Col xs={12} md={6} lg={3} className="mb-3" key={tourData.id}>
                            <Tour  {...tourData} />
                        </Col>
                    )
                }
            </Row>

        </>
    )
}

export default Tours
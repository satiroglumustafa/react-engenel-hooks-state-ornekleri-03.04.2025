
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import './App.css';
 
import { useEffect, useState } from 'react';
import Tours from './components/Tours';
import ControlledInput from './components/ControlledInput';
import UseRefExs from './components/UseRefExs';
import UseRefExs2 from './components/UseRefExs2';
import UseRefExs3 from './components/UseRefExs3';
import UseRefExs4 from './components/UseRefExs4';
import UseContextExs1 from './components/UseContextExs1';
import UseContextExs2 from './components/UseContextExs2';
import UseReducerExs1 from './components/UseReducerExs1';
import UseReducerExs2 from './components/UseReducerExs2';
import UseReducerExs3 from './components/UseReducerExs3';
import UseReducerExs4 from './components/UseReducerExs4';
import UseMemoExs1 from './components/UseMemoExs1';
import UseMemoExs2 from './components/UseMemoEx2';
import ReactMemoExs1 from './components/ReactMemoExs1';
import UseCallbackExs1 from './components/UseCallbackExs1';
import CustomHooksExs1 from './components/CustomHooksExs1';
import CustomHooksExs2 from './components/CustomHooksExs2';
import CustomHooksExs3 from './components/CustomHooksExs3';
import CustomHooksExs4 from './components/CustomHooksExs4';


const App = ()=>{

  const [loading,setLoading] = useState(true)
  const [tours,setTour] = useState([])
  const [totalTourLength,setTotalTourLength] = useState('')

  
  const fetchData = async ()=>{
    try {

      const requestData = await fetch("https://www.course-api.com/react-tours-project")
      const jsonData = await requestData.json()
      setLoading(false)
      setTour(jsonData)
      setTotalTourLength(jsonData.length)
       
    } catch (error) {
      setLoading(true)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

  if(loading){
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>    
    )
  }

  return(
    <>
      <Container>
        <Row className='mb-4'>
          <Col xs={12}>
            <h3 className='text-center mb-5 primary-text'>Listelenen Şehirler: {tours.length}</h3>
          </Col>
          <Col xs={12}>
            <Tours arrayTours ={tours}/>
          </Col>
          <Col xs={12}>
            <hr></hr>
          </Col>
        </Row>


        <Row className='mb-4'>
          <Col xs={12}>
            <h3 className='text-center mb-5 primary-text'>İnput Controlled</h3>
            <ControlledInput />
          </Col>
          <Col xs={12}>
            <hr></hr>
          </Col>
        </Row>


        <Row className='mb-4'>
          <Col xs={12}>
            <h3 className='text-center mb-5 primary-text'>useRef Kullanımı</h3>
            <UseRefExs />
            <UseRefExs2 />
            <UseRefExs3 />
            <UseRefExs4 />
          </Col>
          <Col xs={12}>
            <hr></hr>
          </Col>
        </Row>


        <Row className='mb-4'>
          <Col xs={12}>
            <h3 className='text-center mb-5 primary-text'>useContext Hooks</h3>
            <UseContextExs1 totalTourLength={totalTourLength} />
            <UseContextExs2  />
          </Col>
          <Col xs={12}>
            <hr></hr>
          </Col>
        </Row>


        <Row className='mb-4'>
          <Col xs={12}>
            <h3 className='text-center mb-5 primary-text'>useReducer Hooks</h3>
            <UseReducerExs1 />
            <UseReducerExs2  />
            <UseReducerExs3  />
            <UseReducerExs4  />
          </Col>
          <Col xs={12}>
            <hr></hr>
          </Col>
        </Row>

        <Row className='mb-4'>
          <Col xs={12}>
            <h3 className='text-center mb-5 primary-text'>useMemo Hooks</h3>
            <UseMemoExs1 />
            <UseMemoExs2 />
          </Col>
          <Col xs={12}>
            <hr></hr>
          </Col>
        </Row>

        <Row className='mb-4'>
          <Col xs={12}>
            <h3 className='text-center mb-5 primary-text'>React.memo</h3>
            <ReactMemoExs1 />
          </Col>
          <Col xs={12}>
            <hr></hr>
          </Col>
        </Row>

        <Row className='mb-4'>
          <Col xs={12}>
            <h3 className='text-center mb-5 primary-text'>useCallback Hooks</h3>
            <UseCallbackExs1 />
          </Col>
          <Col xs={12}>
            <hr></hr>
          </Col>
        </Row>

        <Row className='mb-4'>
          <Col xs={12}>
            <h3 className='text-center mb-5 primary-text'>Custom Hooks</h3>
            <CustomHooksExs1 />
            <CustomHooksExs2 />
            <CustomHooksExs3 />
            <CustomHooksExs4 />
          </Col>
          <Col xs={12}>
            <hr></hr>
          </Col>
        </Row>

      </Container>
    </>
  )
}


export default App;

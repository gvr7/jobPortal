import Carousel from 'react-bootstrap/Carousel';
import "../App.css"
import Spinner from 'react-bootstrap/Spinner';


const About = ()=> {
  return (
    <div className = "d-flex justify-content-center align-items-center height">
      <div>
      <h5 className = "text-light mx-2">Loading....</h5>
      <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
      <Spinner animation="border" variant="danger" />
      <Spinner animation="border" variant="warning" />
      <Spinner animation="border" variant="info" />
      
      </div>
    </div>
    )
}

export default About;

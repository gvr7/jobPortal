import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState,useEffect} from "react"
import {useParams} from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';
const Description = ()=> {
 let {id} = useParams();
  
 const [value,setValue] = useState(false)
const [desc,setDesc] = useState([])
  useEffect(() =>{
    const options = {
    method : "GET",
    headers:{
      "Content-Type":"Application/json",
      "Accept":"Application/json"
        } 
  }
  const url = `https://allinonejobs.herokuapp.com/jobs/${id}`
  fetch(url,options).then((res)=> res.json()).then((jsonData) =>{
        setValue([jsonData])
        setDesc((jsonData.description[0]['responsibilities']))
      
  })
  })
  if (value ===false){
    return(
      <div className = "d-flex justify-content-center align-items-center height">
        <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
    </div>
    )
  }
  
    return (
      <div> 
        <div className="container my-2">
          <div className= "row ">
             {value.map((i) => (
            <div className="col-sm-12 col-lg-6" key={i["_id"]}>
             <Card>
               <Card.Img variant="top check2" src={`${i.imageUrl}`}/>
            <Card.Header as="h4" className = "text-center animation">{i.company}</Card.Header>
            <Card.Body>
              <Card.Title className = 'text-danger'>{i.title}</Card.Title>
              
              <Card.Text>
                {desc.map((i,index) => <li key = {index}>{i}</li>)}
              </Card.Text>
              <Card.Text>
                <p className = "text-danger">Last Date :{i.lastDate}</p>
                 <img src ="https://res.cloudinary.com/venkygvr/image/upload/v1667459818/image-2_c4ujxq.gif" />
              </Card.Text>
              <Button variant="primary"><a href={`${i.link}`} className = "text-light text-decoration-none" target = "_blank">Apply Now</a></Button>
            </Card.Body>
    </Card>
              </div>
       
        ))}
        </div>
        </div>
     </div>          
  
 
  )
  }

export default Description;

//https://allinonejobs.herokuapp.com/
import { Component } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import "../App.css"
import {Navigate} from "react-router-dom"
class Home extends Component{
  state = {
    data : false,
    id :null
  }
IndividualHandler = (id) =>{
  this.setState({id:id})
}
componentDidMount(){
  const options = {
    method : "GET",
    headers:{
      "Content-Type":"Application/json",
      "Accept":"Application/json"
        } 
  }
  const url = "https://allinonejobs.herokuapp.com/jobs"
  fetch(url,options).then((res)=> res.json()).then((jsonData) =>{
   
    this.setState({data :jsonData.reverse()})
  })
 }

  render(){
    const {data,id} = this.state
      console.log(data)
    if (id !==null){
      return(
        <Navigate to ={`/${id}` }/>
      )
    }else if (data === false){
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
          <div className= "row gy-2">
             {data.map((i) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={i["_id"]} onClick={() => this.IndividualHandler(i["_id"])}>
             <div className="card-deck">
                  <div className="card">
                    <img className="card-img-top img-top" src={`${i.imageUrl}`} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-text animation text-center">{i.company}</h5>
                      <h5 className="card-title">{i.title}</h5> 
                      <h6 className="card-text">Exp:<span className = "text-danger"> {i.experience}</span> </h6>
                        <h6 className="card-text">Eligibility:<span className = "text-danger"> {i.branches}</span> </h6>
                      <img src ="https://res.cloudinary.com/venkygvr/image/upload/v1667459818/image-2_c4ujxq.gif" />
                    </div>
                    <div className="card-footer bg-primary text-center">
                      <small className="text-light" bg="dark">Apply Now</small>
                    </div>
                  </div>
                    </div>
              </div>
       
        ))}
        </div>
        </div>
     </div>          
  )
 
  
}
}

export default Home;
import React from 'react'
import { Link } from 'react-router-dom'



const Landin = () => {
  
  // const history = useHistory();
  return (
    <div className="mx-auto mt-12">
      <Link to="/signin">
      <u>Click to go to Sign In Page</u>
      </Link>

      <br></br>
      <br/>

      <Link to ="/signup" >
      
      <u>Click To go to Sign Up Page</u>

      </Link>


      <br></br>
      <br/>


      <Link to ="/home" >
      
      <u>Click To go to Home Page</u>

      </Link>
    </div>
  )
}

export default Landin

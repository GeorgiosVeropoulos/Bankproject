import React from 'react'
import './Report.css';
import {useState} from "react";


function Report() {

  const[inputs,setInputs] = useState({});
  const[load,setLoad] = useState(true);
  let firstName,lastName;
  console.log(load);

  const handleChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    //console.log(setInputs.username.target.name);
    setInputs(values => ({...values,[name]: value}))
      
    
    if(setInputs !== ('') ){  
      setLoad(false);
    }
    else{
      
      //event.target.value = null;
      setLoad(true);
    }
    
  }

  const handleClick= (event) =>{
   
      if(inputs.firstname === ('') || inputs.lastname === ('')){
        alert("First name or Last name cannot be empty");
      }    
      else{
        firstName = inputs.firstname;
        lastName = inputs.lastname
        setInputs('');
        event.preventDefault();
        console.log(firstName);
        console.log(lastName);
        setLoad(true);
      }

      
      
   
  }
  

  return (
    <div className='reports'>
        
        <div className='login'>
          <form>
            <input type="text" placeholder="First name" name="firstname" value={inputs.firstname || ""} onChange={handleChange} />
            <input type="text" placeholder="Last name" name="lastname" value={inputs.lastname || ""} onChange={handleChange} />
            <button id="buttonid" type="button" onClick={handleClick} disabled ={load}>Save</button>
          </form>
        </div>
        
    </div>
    
  )
  
}



export default Report
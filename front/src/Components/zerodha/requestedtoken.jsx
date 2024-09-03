
import React, { useState,useEffect} from 'react';
import { useNavigate  } from 'react-router-dom';


const Fetchtoken = ()=>{
const [error, setError] = useState('');

function getURLParameters() {
    var url = window.location.href;
    console.log('URL:', url)
    var params = new URLSearchParams(url.split('?')[1] );
    return params 
  }

useEffect(() => {
    const paramss= getURLParameters('');
    const sd=paramss.get('request_token') 
    handlesubmit(sd)
    
   
  }, [])

const  handlesubmit = async (rstoken)=>{
    const sdd= localStorage.getItem('token')
       
    const payload= JSON.stringify({rstoken})
    
    try {
      const t= 'token '+ sdd
      
      
  
      const response = await fetch('http://13.127.52.62:8000/api/rstoken', {
        
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': t,
         
         
          
        },
        body: payload,
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      const datastr = await response.json()
      console.log(datastr)
      
     
    

      
     
     
      
} catch (error) {
      setError('something went wrong');
      console.error('INIT error:', error);
    }
  
    // Reset the form after submission
    
  }

return (
    <div>
        {!error? <p>successfully submission</p>:'something went wrong'}
    </div>
)
}

export default Fetchtoken;
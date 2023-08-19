import React from 'react';
import { useNavigate } from 'react-router-dom';
const Page=() =>{
    const nav=useNavigate();
    const Login=() =>{
    nav('/login')
   }
    
    
        return(
        <>
        
        <div className='div4'>
        <div className='div1'>
            <div className='div5'>
                <img src="logob1.jpg"width="100"height="100"></img>
            </div>
        <button className="button" name="button" onClick={Login}>login</button> 
        
        </div>
        <div className='div2'>
            <h1><i>HOME</i></h1>
        </div>
        <div className='div3'>
            <h1>about nature</h1>
        </div >
        </div>
        </>
       
        
    );
}
export default Page;
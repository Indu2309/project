import {React,  useEffect,  useState } from "react";
import axios from 'axios';

export  const Problem = () => {
    const[i,si]=useState([]);
    useEffect(()=>
      {
        axios.get("http://localhost:8000/pso")
        .then( (result)=>
          {
            si(result.data);
          })
      })
        return(
            <>
                <div>
                 {
                i.map((data)=>
                (
                    <>
                      <div className="ammu">
                      <div className="a1">
                    {data.About}<br/>
                    {data.Matter}
                    </div></div>
                    </>
                ))
                 }
                </div>
              


               
            </>
        )
}




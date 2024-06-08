'use client'
import { useState, useEffect, ChangeEvent } from 'react'




export default  function Delete(prop:any) {

    
    const [username, setusername] = useState("")



 async function addData2(){
     await fetch("http://localhost:3000/api/data",{method:"DELETE",
       headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"username": username})})
      prop.delete();
 }
 
function ChageUserName(e:ChangeEvent<HTMLInputElement>){
  setusername(e.target.value)
}


    return (
      <div>
        <input className=' bg-slate-800 m-1  text-white' type='text' onChange={ChageUserName} ></input>
        <button onClick={ addData2}>button Delete</button>
        
      </div>
    );
  }
  
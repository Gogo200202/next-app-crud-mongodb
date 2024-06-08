'use client'
import { useState, useEffect, ChangeEvent } from 'react'




export default  function Add(prop:any) {

    
    const [username, setusername] = useState("")
 
    const [userdata, setuserdata] = useState("")


 async function addData2(){
     await fetch("http://localhost:3000/api/data",{method:"POST",
       headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"username": username, "userdata": userdata})})

      
      prop.add()
 }
 
function ChageUserName(e:ChangeEvent<HTMLInputElement>){
  setusername(e.target.value)
}

function ChageUserData(e:ChangeEvent<HTMLInputElement>){
  setuserdata(e.target.value)
}

    return (
      <div>
        <input className=' bg-slate-800 m-1  text-white' type='text' onChange={ChageUserName} ></input>
        <input  className=' bg-slate-800 m-1 text-white' type='text' onChange={ChageUserData}></input>
           <button onClick={ addData2}>button add</button>
        
      </div>
    );
  }
  
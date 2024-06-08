'use client'
import { useState, useEffect } from 'react'
 import ReseveData from "./components/reseveData"

 import Add from './components/add'

 import Delete from './components/delete'
 interface Iuser{
  _id:number;
  username:string;
  userdata:string;
}
 
export default  function Home() {
  const [data, setData] = useState<Iuser[] | []>()

  function getRefresh(){
    refresh();
  }
  //window.addEventListener('load', refresh);


  useEffect(() => {
    if (document.readyState !== 'complete') {
      const handler = () => {
        console.log('load');
        refresh()
      };
      window.addEventListener('load', handler);

      return () => {
        window.removeEventListener('load', handler);
      };
    } else {
      const timeout = window.setTimeout(() => {
        console.log('timeout');
        refresh()
      }, 500);
      return () => window.clearTimeout(timeout);
    }
  }, []);
   async function refresh(){

   await fetch('http://localhost:3000/api/data')
    .then((res) => res.json())
    .then((data) => {
  
      setData(data)  
    })
  }
   



 
  
  
  
  return (
    <div> Home
     <Add add={getRefresh}/>
     <Delete delete={getRefresh}/>
<ReseveData sendData={data} />
    
    </div>
  );
}

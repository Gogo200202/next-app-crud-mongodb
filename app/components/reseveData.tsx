'use client'
import { useState, useEffect } from 'react'

import useSWR from 'swr';

 interface Iuser{
    _id:number;
    username:string;
    userdata:string;
 }

export default  function ReseveData(prop:any) {

 
    return (
      <div>
        {prop.sendData?.map((x:Iuser)=>{
            return <div key={x._id}> 
            <div>{x.username} </div>
            <div> {x.userdata}</div>
             </div>
        })}

        
      </div>
    );
  }
  
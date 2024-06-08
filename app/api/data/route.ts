import { NextResponse ,NextRequest} from "next/server";

import {getAllData} from "./getAlldata"
import{deleteData} from "./deleteData"
import{addData} from "./addData"

import {connection} from "./db/mongodbDatabase"
async function makeConnection(){
  await connection()
}
makeConnection();


export async function GET(req:Request) {
let result =await getAllData();
//console.log(result);
  return NextResponse.json(
    result,
    {
      status: 200
    }
  );
}


export async function POST(req:Request) {
  try {
    addData(await req.json())
    return NextResponse.json("neshto post", {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get admins" },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(req:Request) {
  
  try {
    let userName=await req.json();
    deleteData(userName.username)

    return NextResponse.json("neshto DElete", {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get admins" },
      {
        status: 500,
      }
    );
  }
}
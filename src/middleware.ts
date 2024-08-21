import { NextFunction,Request,Response } from "express";
import jwt from "jsonwebtoken";
export function authMiddleWare(req:any,res:any,next:NextFunction){ 
   const token=req.headers['authorization']??""
   try{

     const  decoded=jwt.verify(token,'ashutosh')
     //@ts-ignore
     if(decoded.userId){
     //@ts-ignore
       req.id=decoded.userId
       return next();
     }
     else{
    return res.status(403).json({message:"You are not logged in "})

     }

   }
   catch(e){
    return res.status(403).json({message:"You are not logged in "})

   }


   next()

}

export function workerMiddleWare(req:any,res:any,next:NextFunction){ 
  const token=req.headers['authorization']??""
  try{

    const  decoded=jwt.verify(token,'shivam')
    //@ts-ignore
    if(decoded.workerId){
    //@ts-ignore
      req.id=decoded.workerId
      return next();
    }
    else{
   return res.status(403).json({message:"You are not logged in "})

    }

  }
  catch(e){
   return res.status(403).json({message:"You are not logged in "})

  }


  next()

}

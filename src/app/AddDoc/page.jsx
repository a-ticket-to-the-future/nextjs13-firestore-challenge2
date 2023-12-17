"use client"

import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import db from "../../firebase"
// import { useEffect } from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const AddDoc = () => {

    // const [users , setUsers] = useState([]);
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");


    const inputName = (e) => {
      e.preventDefault();
      
      setName(e.target.value);
      console.log(e.target.value);


      
    }
    
    const inputEmail = (e) => {
      e.preventDefault();
      
      setEmail(e.target.value);
      console.log(e.target.value)
    }

    const inputForm = async (e) => {
      e.preventDefault();



      const data = {
        uid : 1,
        userName :name,
        email : email,
      }
      

    const result =  await setDoc(doc(db,"users","documents"),data);

    const docRef = doc(db,"users","documents");
    const docSnap = await getDoc(docRef);
      console.log("Document written with ID:",docSnap.data().uid);
    
    // console.log(result);
    // 
    // await result;
    // setUsers(result);

    // const [userData ,setUserData] = useState([]);

    // try{
    //     const docRef = await setDoc(collection(db,"users","documents"),{
    //         userName : "A",
    //         email : "grandemilan2011@gmail.com",

    //     });
    
        
      }; 
    //     setUserData(docRef.data());

    // } catch(error) {
    //     console.log("Error adding document:" , error);
    // }

    
      
    


   const handleClick = () => {
   


   }


      
      
    
    
    

  return (
    <div>
        <div>
          あとでformとinput
        </div>
        <div className=' text-black'>
            <form action="" onSubmit={inputForm} className='flex flex-col'>
              <input type="text" onChange={inputName} placeholder='ユーザの名前を入力' className='border-2 border-black m-2 text-lg ' />
              <input type="text" onChange={inputEmail} placeholder='ユーザーのメールアドレス' className='border-2 border-black m-2 text-lg'/>
              <button  className=' border-2 border-blue-600 bg-blue-500 text-slate-50 hover:scale-110 active:scale-95 ' onClick={inputForm}>送信</button>
            </form>
        </div>
        <div>
          <button className=' border-2 border-blue-600 bg-orange-500 m-2 text-slate-50 hover:scale-110 active:scale-95 ' onClick={handleClick}>空にする</button>
        </div>

    </div>
  )
}

export default AddDoc

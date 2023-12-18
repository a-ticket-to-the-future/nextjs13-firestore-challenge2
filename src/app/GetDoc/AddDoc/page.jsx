"use client"

import db from '@/firebase';
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import React, { useRef, useState } from 'react'

const AddDoc = () => {

    //ここは仮置きね
     // const [users , setUsers] = useState([]);
     const [name , setName] = useState("");
     const [email , setEmail] = useState("");
 
 
    //  const inputUid = (e) => {
    //    e.preventDefault();
       
    //    setName(e.target.value);
    //    console.log(e.target.value);
 
 
       
    //  }
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
        //  uid : uid,
         userName :name,
         email : email,
       }

       const docRef = await addDoc(collection(db,"users"),data);

       console.log("Document written with ID :",docRef.id)
       
 //この３行は動いた
    //  const result =  await setDoc(doc(db,"users","documents"),data);
 
    //  const docRef = doc(db,"users","documents");
    //  const docSnap = await getDoc(docRef);
    //    console.log("Document written with ID:",docSnap.data().uid);
     
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
    //    docId = useRef(null);
       
       }; 
     //     setUserData(docRef.data());
 
     // } catch(error) {
     //     console.log("Error adding document:" , error);
     // }
 
     const handleClick = async () => {
        
     }
       
     
 
 
    // const handleClick = async () => {
    //     setName("")
    //     setEmail("")
 
    // }
 
 
       
       
     

    //ここは仮置きね
  return (
    <div className=' flex flex-col w-[540px] h-[390px]'>
      <div className=' mt-1 border-2 border-blue-500 h-[140px]'>
        <div className=' text-black text-sm'>
          こちらはAddDoc
        </div>
        <div className=' text-black h-[3px]'>
            <form action="" onSubmit={inputForm} className='flex flex-col h-[40px]'>
              {/* <input type="text" onChange={inputUid} placeholder='ユーザのuidを入力' className='border-2 border-black m-1 text-lg h-[40px] ' /> */}
              <input type="text" onChange={inputName} placeholder='ユーザの名前を入力' className='border-2 border-black m-1 text-lg h-[40px] ' />
              <input type="text" onChange={inputEmail} placeholder='ユーザーのメールアドレス' className='border-2 border-black m-1 text-lg h-[40px]'/>
              <button  className=' border-2 border-blue-600 bg-blue-500 text-slate-50 text-sm hover:scale-110 active:scale-95 h-[25px] w-[100px] ' onClick={inputForm}>送信</button>
            </form>
        </div>

    </div>
        <div>
          <button className=' border-2 border-blue-600 bg-orange-500  text-slate-50 text-sm h-[25px] w-[100px] hover:scale-110 active:scale-95 ' onClick={handleClick}>空にする</button>
        </div>
    </div>
  )
}

export default AddDoc

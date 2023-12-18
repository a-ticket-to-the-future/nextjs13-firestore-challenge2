import db from '@/firebase'
import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore'
import React from 'react'

const GetDocument = async () => {

    const q = query(collection(db,"users"))
    const querySnapshot = await getDocs(q);

    const docs = [];
    querySnapshot.forEach((doc) => {
        docs.push(doc.data());
        console.log(doc.id, "=>", doc.data());

        
    })


    //単一のドキュメントを取得する

    // const docRef = doc(db,"users","documents")
    // const docSnap  = await getDoc(docRef);

    // if(docSnap.exists()){
    //     console.log("Document data:",docSnap.data());
    // } else {
    //     console.log("No such document!");
    // }

  return (
    
       <div className=' border-2 border-green-500 w-[560px] h-[300px]'>
    <div className='text-black'>
       こんにちは
       {docs.map((doc) => (
        <div className=' flex flex-wrap w-[560px]'>
        <div  className=' ml-2 border-2  border-orange-400 w-[300px] h-[50px]'>
       {/* <div>{doc.uid}</div> */}
       <div key={doc.uid} className=''>{doc.userName}</div>
       <div>{doc.email}</div>
       </div>
       </div>
       ))}

    </div>
    </div>
  )
}

export default GetDocument

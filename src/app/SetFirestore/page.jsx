import React from 'react'
import {addDoc, collection} from "firebase/firestore";
import AddDoc from "../AddDoc/page"

const SetFIrestore = async () => {

    



  return (
    <div>
    
    <div className='flex'>
    <div className=' flex  bg-slate-400 h-[400px] w-[800px] justify-center ml-5 mt-10 '>
    <div className=' w-[750px] bg-yellow-200 text-slate-400 text-3xl my-4 '>
        <div className=' justify-items-center'>
                現在のユーザー情報
            <div className=' flex flex-wrap bg-slate-50 my-1 ml-4 w-[720px] h-[320px]'>

                    <div>
                     firestoreの中身を簡単に作ってみます

                   </div>
                   <div className=' border-2 border-blue-500 w-[700px] h-[280px]'>
                        <div>
                            <AddDoc />
                        </div>
                   </div>
                {/* {users.map((user) => (
                    <div className='  border-2 border-orange-400 text-xs my-1 ml-1 pl-2 w-[230px] h-[40px]'>
                        <div key={user.id}>
                        <div>{docId}</div>
                        <div>{user.uid}</div>
                        <div >{user.displayName}</div>
                        <div>{user.email}</div>
                        </div>
                    </div>
                ))} */}
            </div>
        </div>
        {/* <div>
          <button className=' mx-5 my-3 px-5 py-2 mt-10 bg-blue-300 text-slate-50 border-2 border-blue-700 font-bold rounded-lg hover:scale-105 active:scale-95'>
          <Link href="/"   >戻る</Link>
          </button>
       </div> */}
    </div>
    
    </div>
        <div>
            {/* <AddFields /> */}
        </div>
    </div>
    </div>
  )
}

export default SetFIrestore

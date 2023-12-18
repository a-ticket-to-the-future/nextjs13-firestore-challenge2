import React from 'react'
import {addDoc, collection} from "firebase/firestore";
import AddDoc from "../SetDoc/page"
import SetDoc from '../SetDoc/page';
import  GetDoc  from '../GetDoc/page';
import GetDocument from '../GetDoc/GetDocument/page';

const SetFIrestore = async () => {

    



  return (
    <div>
    
    <div className='flex w-screen'>
    <div className=' flex  bg-slate-400 h-[350px] w-[750px] justify-center ml-2 mt-10 '>
    <div className=' w-[740px] bg-yellow-200 text-slate-400 text-3xl my-4 '>
        <div className=' justify-items-center'>
                新規ユーザー情報を登録
            <div className=' flex flex-wrap bg-slate-50 my-1 ml-2 w-[720px] h-[270px]'>

                    <div>
                     firestoreの中身を簡単に作ってみます

                   </div>
                   <div className=' border-2 border-blue-500 ml-2 w-[700px] h-[225px]'>
                        <div>
                            <SetDoc />
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
       <div className=' w-[600px] bg-gray-400 h-[350px] ml-5 mt-10'>
        <div className='m-2 w-[580px] bg-green-400 h-[330px] '>
            <div className=' text-slate-50 text-xl'>
                登録ユーザーの情報
            </div>
            <div className=' bg-slate-50 w-[580px] h-[150px] mb-0'>
            <GetDocument />
            </div>
            <div className=' w-[560px] bg-slate-50 h-[280px] mt-0 '>
                <GetDoc />
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default SetFIrestore

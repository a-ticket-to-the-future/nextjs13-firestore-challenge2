import React from 'react'
import AddDoc from './AddDoc/page'
import GetDocument from "./GetDocument/page"

const GetDoc = () => {
  return (
    <div className=''>
      <div className=' flex  bg-slate-400 h-[200px] w-[580px] justify-center mt-[115px] '>
    <div className=' w-[570px] bg-blue-400 text-slate-50 text-xl mt-4 '>
        <div className=' justify-items-center'>
                現在のユーザー情報を表示
            <div className=' flex flex-wrap bg-slate-50  ml-2 w-[550px] h-[145px] '>
                  
                    
                   <div className='  ml-1 w-[560px] h-[100px]'>
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
    </div>
  )
}

export default GetDoc

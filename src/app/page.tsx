import Image from 'next/image'
import SetFirestore from "./SetFirestore/page"

export default function Home() {
  return (
    <div>
    <div className=' text-slate-400 text-4xl ml-5 mt-5'>firestoreを一からやってみる</div>
    <div>
      <SetFirestore />
    </div>
    </div>
  )
}

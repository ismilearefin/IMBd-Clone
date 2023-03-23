import Image from "next/image";


export default function loading() {
  return (
    <div className='mt-24 flex justify-center items-center'>
        <img className="w-28" src="spinner.svg" alt="loading..."/>
    </div>
  )
}

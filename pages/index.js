import Head from "next/head"
import Image from "next/image"

const index = () => {
  return (
   <>
   <Head>
     <title>My baby steps</title>
     <meta name="description" content="baby step into next"/>
   </Head>
   
     <div className="flex flex-col items-center h-screen justify-center">
      <div className="flex">
        <div className="w-96 h-80 bg-red-200 rounded-md m-8 p-8 text-white font-bold  bg-no-repeat bg-cover bg-center" style={{  backgroundImage: "url(/assets/pix.jpeg)"}}>Hello world</div>
        {/* <div>Hello world</div> */}
        <Image 
          src="/assets/pix1.jpg"
          alt="Image"
          width={400}
          height={100}
          className="object-cover bg-red"
        />
      </div>
    </div>
   </>
  )
}

export default index

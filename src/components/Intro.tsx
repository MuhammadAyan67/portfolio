'use client'
import { headerItems , userInfo} from "@/constant/constant";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
const Intro : React.FC =()=>{
   useEffect(()=>{
      Aos.init();
   })
    return(
     <section id={headerItems.home.page} 
     className="h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start  " >
        <div data-aos='fade-right'>
           <Image
           src={userInfo.picture}
           alt="Profile Picture"
           width={300}
           height={300}
           className="rounded-full shadow-2xl mt-10"/>
        </div>
        <div className="md:ml-20 sm:ml-12 sm:w-1/2" data-aos="fade-up-left">
         <h1 className="text-7xl hidden md:block">
            Frontend Web Developer
         </h1>
         <h1 className="text-2xl mt-5 md:text-3xl">
           Hi, I&#39;m <span className="text-red-600  text-3xl md:text-4xl">{userInfo.name}</span>
         </h1>
         <p  className="mt-4 mb-4">{userInfo.about}</p>
        </div>
     </section>
    )
}
export default Intro
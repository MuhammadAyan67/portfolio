import { headerItems , userInfo} from "@/constant/constant";
import Image from "next/image";
import { FaCopyright } from "react-icons/fa";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa";
const Contact : React.FC =()=>{
    return(<>
        <section id={headerItems.contact.page} 
     className="h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start">
       
        <div className="md:ml-20 sm:ml-12 sm:w-1/2  m-4" >
         <h1 className="text-6xl my-6" data-aos="zoom-in-down">
           Contact Me
         </h1>
         <h2 className="text-3xl my-4" data-aos="zoom-in-up">
         Feel free to reach out, and I’ll get back to you as soon as possible.
         </h2>
           
         <h2 className="text-3xl flex w-96 justify-center items-center text-center border my-4"data-aos="zoom-out">
           <SiGmail className="border rounded mr-3" />ayan46013@gmail.com
         </h2>
         <div className="flex justify-around text-2xl m-10 p-5   ">
         <Link data-aos="zoom-out-right" href={"https://www.instagram.com/_ayan__.15/profilecard/?igsh=YXV1cHViNjdmMjN2"} className="transition-transform duration-1000 transform hover:scale-150"><FaInstagram /></Link>
         <Link data-aos="zoom-out" href={"https://www.linkedin.com/in/muhammad-ayaan-7408b0301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} className="transition-transform duration-1000 transform hover:scale-150"><BsLinkedin /></Link>
         <Link data-aos="zoom-out-left" href={"https://www.facebook.com/ayan.imran.71271466?mibextid=JRoKGi"} className="transition-transform duration-1000 transform hover:scale-150"><FaFacebook /></Link>
         
        </div>
        </div>
      
     </section>
     <hr />
     
       <div className="flex flex-row text-center items-center justify-center m-10">
       <h4> <FaRegCopyright  className="inline"/>  2024 Ayan. All right reserved  </h4> 
      </div>
</>
      
    )
}
export default Contact
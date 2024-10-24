import { headerItems , userInfo} from "@/constant/constant";
import Image from "next/image";
const About : React.FC =()=>{
    return(
     <section id={headerItems.about.page} 
     className="h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start">
       
        <div className="md:ml-20 sm:ml-12 sm:w-1/2  m-4" data-aos="zoom-in-left">
         <h1 className="text-6xl my-6">
           About 
         </h1>
         <h2 className="text-3xl my-4">
          Get to know me!
         </h2>
         <p data-aos="zoom-in-right">{userInfo.About1}</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center" data-aos="zoom-out-up">
           <Image
           src={userInfo.picture}
           alt="Profile Picture"
           width={300}
           height={300}
           className="m-auto"/>
           <div className="mt-3  w-3/4 break-words" data-aos="zoom-in-down">
            {
                userInfo.skills.map(skills =>(
                    <span className="bg-gray-200 m-1 p-2 text-sm inline-block rounded-md ">{skills}</span>
                ))
            }
           </div>
        </div>
     </section>
    )
}
export default About
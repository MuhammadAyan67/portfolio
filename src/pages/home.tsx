 import About from "@/components/about"
import Contact from "@/components/contact"
import Intro from "@/components/Intro"
 const Home : React.FunctionComponent = () => {
    return(
       <div className="lg:mx-32 md: mx-4">
       <Intro/>
       <About/>
       <Contact/>
       </div>
    )
}
export default Home
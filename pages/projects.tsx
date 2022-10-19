import ProarcCard from "../components/ProarcCard"
import ProjectsNavbar from "../components/ProjectsNavbar"
import { proarc} from "../data"
import { useState } from "react"
import { Category } from "../type"
import { motion } from "framer-motion"
import { fadeInUp, routeAnimation, stagger } from "../animation"
import Head from "next/head"


const Projects = () => {

    const [projects, setProjects] = useState(proarc);
    const [active, setActive] = useState("All");

    const [showDetail,setshowDetail] = useState<number|null>(null);

    const handlerFilterCategory=(category:Category | "All")=>{
        if(category === "All"){
            setProjects(proarc);
            setActive(category);
            return;
        }

        const newArray = proarc.filter(proarc=>proarc.category.includes(category));
        setProjects(newArray);
        setActive(category);
    };

    return (
        <motion.div className="px-5 py-2 overflow-y-scroll" 
        style={{height:"65vh"}} 
        variants={routeAnimation} 
        initial="initial" 
        animate="animate"
        exit="exit"
        >

        <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/lion.jpg"/>
        <title> Lee Yun Ann | Consultant | Projects</title>
      </Head>
        
        <ProjectsNavbar handlerFilterCategory={handlerFilterCategory} 
        active={active}/>

        <motion.div className="relative grid grid-cols-12 gap-4 my-3"variants={stagger}
        initial="initial" animate="animate">
        {projects.map((proarc)=>(
            <motion.div className="col-span-12 p-2 rounded-lg sm:col-span-6 lg:col-span-4 bg-default-ivory dark:bg-dark-200" 
            variants={fadeInUp} 
            key={proarc.name}
            >
            <ProarcCard proarc={proarc} showDetail={showDetail} setshowDetail={setshowDetail}/>
            </motion.div>
            ))}   

        </motion.div>
        </motion.div>
    )
}

export default Projects

//import { GetStaticPropsContext } from "next"
import ServiceCard from "../components/ServiceCard"
import {services} from "../data"
import {motion} from "framer-motion"
import { fadeInUp, routeAnimation, stagger } from "../animation"
import Head from 'next/head'

const index = () => {
  return (
    <motion.div className="flex flex-col flex-grow px-6 pt-1" variants={routeAnimation} initial="initial" animate="animate" exit="exit">
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/lion.jpg"/>
        <title> Lee Yun Ann | Consultant | Portfolio</title>
      </Head>
      <h5 className="my-3 text-base font-medium ">I am a <b>Infrastructure Consultant </b> with a degree in land economics. I have more than 3 years of working experience related to <b> master planning</b>, <b> economics</b>, and <b>heritage conservation</b> in Taiwan and Singapore.
<br/><br/>Knowledge of urban planning, urban economics, heritage conservation, and community engagement. <br/><br/>I have also been writing articles introducing places, culture, and history in Singapore. Feel free to check them out! </h5>
    <div className="flex-grow p-4 mt-5 bg-default-ivory dark:bg-dark-100" 
    style={{marginLeft:"-1.5rem", marginRight:"-1.5rem"}}>
      <h6 className="my-3 text-xl font-bold tracking-wide">What My Core Competencies Are </h6>
      <motion.div className="grid gap-6 my-3 lg:grid-cols-2" variants={stagger} initial="initial" animate="animate" >
          {services.map(service => (
            <motion.div 
            variants={fadeInUp}
            className="bg-white rounded-lg lg:col-span-1 dark:bg-dark-200" key={service.title}>
              < ServiceCard service={service}/>
          </motion.div>
          ))}
      </motion.div>
    </div>
    </motion.div>
  )
}

export default index

// export const getStaticProps = async(
//   context:GetStaticPropsContext
//   )=>{

//   //calculation
  
//   const res = await fetch('http://localhost:3000/api/services')
//   const data= await res.json()

//   console.log("Server",services)

//   return{
//     props:{
//       services:data.services,
//     },
//   }
// }


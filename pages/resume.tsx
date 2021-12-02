import Bar from "../components/Bar"
import { language, Skillset } from "../data"
import {motion} from "framer-motion"
import { fadeInUp, routeAnimation } from "../animation"
import Head from "next/head"

const resume = () => {
    return (
        <motion.div 
        className="px-6" 
        variants={routeAnimation} 
        initial="initial" 
        animate="animate"
        exit="exit">

        <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/lion.jpg"/>
        <title> Lee Yun Ann | Urban Planner | Resume</title>
      </Head>
        

        {/* experience and education */}

        <div className="grid gap-6 md:grid-cols-2">
            <motion.div variants={fadeInUp} initial="initial" animate="animate" >
                <h5 className="my-2 text-xl font-bold">Work Experience</h5>
                <div>
                    <h5 className="my-2 text-base font-bold">Research Assistant (2020-present)</h5>
                    <p className="my-1 text-sm font-semibold">National University of Singapore, Singapore</p>
                    <p className="my-1 text-xs">Urban design project of Paya Lebar Air Base & conservation study of Old Bukit Timah Turf Club</p>
                    <h5 className="my-2 text-base font-bold">Economic Team Intern (2019)</h5>
                    <p className="font-semibold my-1text-sm">Aecom, Singapore</p>
                    <p className="my-1 text-xs">Competitive analysis of smart city projects & Market analysis for retail devleopments during my pursuit of master&apos;s degree</p>
                    <h5 className="my-2 text-base font-bold">Urban Planner (2017-2018)</h5>
                    <p className="font-semibold my-1text-sm">Environmental Design Service Pte Ltd, Taiwan</p>
                    <p className="my-1 text-xs">Review of a historic district&apos;s master plan located in Taipei City</p>
                </div>
            </motion.div>
            <motion.div variants={fadeInUp} initial="initial" animate="animate">
                <h5 className="my-2 text-xl font-bold">Education</h5>
                <div>
                    <h5 className="my-2 text-base font-bold">Master of Urban Planning (2018-2020)</h5>
                    <p className="font-semibold my-1text-sm">National University of Singapore, Singapore</p>
                    <p className="my-1 text-xs">3rd prize in URA competition “Runway for your imagination” (Jun 2020) </p>
                    <h5 className="my-2 text-base font-bold">Bachelor&apos;s degree in Land Economics (2013-2017)</h5>
                    <p className="font-semibold my-1text-sm">National ChengChi University, Taiwan</p>
                    <p className="my-1 text-xs">Representative of National Chengchi University in 11th Exhibition of the Planning Departments- Taiwan (May 2016) </p>
                </div>
            </motion.div>
        </div>

        {/* Skillset and language */}

        <div className="grid gap-6 md:grid-cols-2">

        <div>
            <h5 className="my-3 text-2xl font-bold">Skillset</h5>
            <div className="my-2">
            {
                Skillset.map(skillset=>(
                <Bar data={skillset} key={skillset.name}/>)
                )}

            </div>        
        </div>
        <div>
            <h5 className="my-3 text-2xl font-bold">Languages</h5>
            <div className="my-2">
            {
                language.map(language=>(
                <Bar data={language} key={language.name}/>)
                )}

            </div>
            <div className="my-0">
                <h5 className="font-semibold text-center text-default-tan dark:text-white">↓<br/>Constantly Learning!</h5>
                    </div>        
        </div>      

        </div>
            
        </motion.div>
    )
}

export default resume

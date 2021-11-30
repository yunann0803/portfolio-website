import { FunctionComponent, useState } from "react"
import { AiOutlineLink } from "react-icons/ai"
import { Iproarc } from "../type"
import { MdClose } from "react-icons/md"
import {motion} from "framer-motion"

import Image from "next/image"
import { fadeInUp, stagger } from "../animation"

const ProarcCard: FunctionComponent<{

    proarc:Iproarc;

}> = ({
    proarc:{
        name,
        image_path,
        category,
        deployed_url,
        description,
        key_techs,
    },
}) => {

    const [showDetail,setshowDetail] = useState(false);


    return (
        <div>
            <Image
            src={image_path}
            alt={name}
            className="cursor-pointer"
            onClick={()=> setshowDetail(true)}
            width="300"
            height="150"
            layout="responsive"
            />
                 
            {/* <img src={image_path} alt={name} className="cursor-pointer" onClick={()=> setshowDetail(true)}/>             */}
        <p className="my-2 text-center">{name}</p>

{showDetail &&
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black md:grid-cols-2 gap-x-12 bg-default-ivory dark:text-white dark:bg-dark-100">
             <motion.div variants={stagger} initial="initial" animate="animate">
             {/* <img src={image_path} alt={name}/>  */}

        <motion.div variants={fadeInUp}>
             <Image
            src={image_path}
            alt={name}
            width="300"
            height="150"
            layout="responsive"
            />
            </motion.div>
            
            <motion.div className="flex justify-center my-4 space-x-3" variants={fadeInUp}>
                <div>
                    <a href={deployed_url} className="flex items-center px-2 py-2 space-x-1 text-base bg-white dark:bg-dark-200">
                    <AiOutlineLink/> <span>Link</span>
                    </a>
                </div>
            </motion.div>
            </motion.div>

        <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2 variants={fadeInUp}className="mb-3 text-xl font-medium md:text-2xl">{name}</motion.h2>
            <motion.h3 variants={fadeInUp}className="mb-3 font-medium">{description}</motion.h3>

            <motion.div variants={fadeInUp}className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                {
                    key_techs.map((tech=>
                    <span key={tech}
                    className="px-2 py-1 my-1 rounded-sm bg-default-beige dark:bg-dark-200"
                    >{tech}</span>
                    ))}
            </motion.div>
        </motion.div>

        <button onClick={()=> setshowDetail(false)}
        
        className="absolute p-1 rounded-full top-3 right-3 focus:outline-none bg-default-ivory dark:bg-dark-200"

        >
            <MdClose size={30} />
        </button>
        
        </div>

}
        </div>

    )
}

export default ProarcCard

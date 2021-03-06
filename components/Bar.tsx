import { FunctionComponent } from "react"
import { Iskill } from "../type"
import {motion} from "framer-motion"

const Bar:FunctionComponent<{
    data:Iskill

}> = ({data:{Icon,level,name}}) => {

    const variants={
        initial:{
            width:0
        },
        animate:{
            width: level,
            transition:{
                duration:0.5,
                type:"spring",
                damping:10,
                stiffness:50,
            }
        },

    }


    return (
        <div className="my-2 text-sm text-white rounded-lg bg-default-ivory dark:bg-dark-200">
            <motion.div 
            className="flex items-center px-4 py-1 rounded-lg bg-default-tan "
            style={{width:level}}
            variants={variants}
            initial="initial"
            animate="animate"
            >

                <Icon className="mr-3"/>
                {name}

            </motion.div>
        </div>
    )
}

export default Bar

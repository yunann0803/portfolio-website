import { FunctionComponent, useEffect, useState } from "react"

import Link from 'next/link'
import { useRouter } from "next/dist/client/router"

const NavItem: FunctionComponent<{
    activeItem: string,
    setActiveItem: Function,
    name: string,
    route: string
}> =({activeItem,name,route,setActiveItem})=>{
    return(
        activeItem !== name ? (
            <Link href={route}>  
            <a> 
                 <span onClick={()=>setActiveItem(name)} className= 'hover:text-yellow-800'>{name}</span>
            </a>
            </Link>
            ): null
    )
}

const Navabar = () => {

const [activeItem, setActiveItem] = useState<string>('')

const{pathname}=useRouter()

    useEffect(() => {
        if(pathname ==="/")setActiveItem('About')
        if(pathname ==="/projects")setActiveItem('Projects & Articles') 
        if(pathname ==="/resume")setActiveItem('Resume') 
        },[])

    return (
        <div className="flex justify-between px-5 py-3 my-3">
            <span className="text-xl font-bold border-b-4 text-default-tan border-default-tan md:text-2xl dark:text-white dark:border-default-tan">{activeItem}</span>
            <div className="flex space-x-5 text-lg text-gray-400">
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='About' route='/' />
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Projects & Articles' route='/projects' />
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Resume' route='/resume' />
            </div>
        </div>
    )
}

export default Navabar

import { FunctionComponent } from "react"
import { Category } from "../type"

export const NavItem: FunctionComponent <{value:Category | "All"; 
handlerFilterCategory:Function;
active:string
 }> = ({
    value,
    handlerFilterCategory,
    active

}) => {

let className="capitalize cursor-pointer hover:text-default-tan";
if(active === value) className += "text-default-tan";

    return <li className={className} onClick={()=>handlerFilterCategory(value)}>
        {value}</li>;
};


const ProjectsNavbar: FunctionComponent<{handlerFilterCategory:Function, active:string}>= (props) => {
    return (
        <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
<NavItem value="All" {...props}/>
<NavItem value="Work Projects" {...props}/>
<NavItem value="Student Projects" {...props}/>
<NavItem value="Articles" {...props}/>
        </div>
    )
}

export default ProjectsNavbar

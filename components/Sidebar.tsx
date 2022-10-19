import {AiOutlineMedium, AiOutlineLinkedin, AiOutlineFacebook} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {RiFilePaperLine} from 'react-icons/ri'
import{useTheme} from 'next-themes'
import Image from 'next/image'
import profilepic from "../public/images/annann.png"


const Sidebar = () => {
const{theme,setTheme} = useTheme();

const changeTheme=()=>{
    setTheme(theme=== "light" ? "dark" : "light" );
};

    return (
        <div>
            <Image
            src={profilepic}
            alt="yun ann"
            className="mx-auto border rounded-full "
            width="144px"
            height="144px"
            layout="intrinsic"
            />

            <h1 className="my-4 text-2xl font-black tracking-wider font-Montserrat ">
                <span>
                Lee Yun Ann    
                </span>
            </h1>
            <p className="px-2 py-1 my-2 rounded-lg bg-default-ivory dark:bg-dark-200">Consultant in Infrastructure Advisory<br />Urban Planner<br />Heritage Conservation Advocate</p>
            <a 
            href="/images/YUN ANN cv-1.pdf" 
            download="Yun Ann CV.pdf"
            className="flex items-center justify-center px-2 py-1 my-2 space-x-2 rounded-lg bg-default-ivory dark:bg-dark-200"> 
            <RiFilePaperLine className="w-4 h-4 mx-2 text-yellow-800"/>
            <span> Download Curriculum Vitae</span>
            </a>

            {/* //social platforms icon */}
            <div className="flex justify-around w-9/12 mx-auto my-5 text-yellow-800 md:w-full">
                <a href="https://yunann0803.medium.com/">
                    <AiOutlineMedium className='w-6 h-6 cursor-pointer'/>
                </a>
                <a href="https://www.linkedin.com/in/yun-ann-lee/">
                    <AiOutlineLinkedin className='w-6 h-6 cursor-pointer'/>
                </a>
                <a href="https://www.facebook.com/leeyunann6868/">
                    <AiOutlineFacebook className='w-6 h-6 cursor-pointer'/>
                </a>
            </div>


            {/* address */}
            <div className="py-4 my-5 bg-default-ivory dark:bg-dark-200" 
            style={{marginLeft:"-1rem",marginRight:"-1rem"}}>
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation/>
                    <span> Taiwanese, currently in Singapore</span>
                </div>
                <p className= "my-2">jessica429285@gmail.com</p>
            </div>

            {/* Email button */}
            <button className="w-8/12 px-5 py-2 my-2 text-white rounded-lg bg-default-tan focus:outline-none dark:bg-dark-200"
            onClick={()=>window.open('mailto:jessica429285@gmail.com')}
            >Email Me</button>
            <button
            onClick={changeTheme}
            className="w-8/12 px-5 py-2 my-2 text-white rounded-lg bg-default-tan dark:bg-dark-200">Toggle Theme</button>
        </div>
    )
}

export default Sidebar

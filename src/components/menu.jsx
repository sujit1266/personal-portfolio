import {Link} from "react-scroll";



const Menu = (props) => {
     return (
          <div animate={{y: 0,opacity: 1}} initial={{y: 100, opacity: 0}} transition={{ease: "easeInOut", duration: 0.8, delay: 0.2}} className={`w-full h-auto ${props.value} absolute`}>
               <ul className="h-auto w-full bg-slate-950">
                    <li  className=" text-lg pt-5 text-center font-medium text-gray-600 hover:text-yellow-500 cursor-pointer"><button onClick={props.toggle}><Link to="home" spy={true} smooth={true} offset={50} duration={1000}>HOME</Link></button></li>
                    <li  className=" text-lg pt-5 text-center font-medium text-gray-600 hover:text-yellow-500 cursor-pointer"><button onClick={props.toggle}><Link to="about" spy={true} smooth={true} offset={-50} duration={1000}>ABOUT</Link></button></li>
                    <li  className=" text-lg pt-5 text-center font-medium text-gray-600 hover:text-yellow-500 cursor-pointer"><button onClick={props.toggle}><Link to="skills" spy={true} smooth={true} offset={50} duration={1000}>SKILLS</Link></button></li>
                    <li  className=" text-lg pt-5 text-center font-medium text-gray-600 hover:text-yellow-500 cursor-pointer"><button onClick={props.toggle}><Link to="resume" spy={true} smooth={true} offset={50} duration={1000}>RESUME</Link></button></li>
                    <li  className=" text-lg pt-5 pb-5 text-center font-medium text-gray-600 hover:text-yellow-500 cursor-pointer"><button onClick={props.toggle}><Link to="contact" spy={true} smooth={true} offset={50} duration={1000}>CONTACT</Link></button></li>
               </ul>
          </div>
     )
}

export default Menu;
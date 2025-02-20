import HeroImg from '../assets/Hero.png';
import {AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from 'react-icons/ai';
export default function Hero() {
    const config  = {
        subtitle: 'Im a Full-stack developer',
        social: {
            Github:'https://github.com/gayathrikavi',
            linkedin: 'http://www.linkedin.com/in/gayathrikavi'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center min-h-screen'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-Hero-font'>Hi, <br/> Im <span className='text-black'>M</span>Gayathri 
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.Github} className='hover:text-white'><AiOutlineGithub size={40}/></a>
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
       </div>
       <img className='md:w-1/2' src={HeroImg} />
    </section>
}
// import HeroImg from '../assets/Hero.png';
// import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

// export default function Hero() {
//     const config  = {
//         subtitle: 'Im a Full-stack Developer',
//         social: {
//             Github:'',
//             linkedin: 'www.linkedin.com/in/gayathrikavi'
//         }
//     }


//     return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center  min-h-screen'>
//        <div className='md:w-1/2 flex flex-col'>
//             <h1 className=' text-white text-6xl font-Hero-font'>Hi, <br/> Im <span className='text-black'>M</span> Gayathri 
//             <p className="text-lg font-Hero-font" >{config.subtitle}</p>
//                 {/* <p className='text-2xl'>{config.subtitle}</p> */}
//             </h1>
//             <div className='flex py-10'>
                
//                 <a href='#' className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
//                 <a
//                         href={config.social.linkedin}
//                         className="hover:text-white"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >/
//                         <AiOutlineLinkedin size={40} />
//                     </a>
//                 {/* <a href={config.social.linkedin}className='hover:text-white'><AiOutlineLinkedin size={40}/></a> */}
//             </div>
//        </div>
//        <img className='md:w-1/2' src={HeroImg} />
//     </section>
// }
// import Heroimg from '../assets/Hero.png';
// import { AiOutlineGithub,AiOutlineLinkedin } from "react-icons/ai";
// export default function Hero() {
//     return (
//         <section className="flex flex-wrap items-center bg-secondary min-h-screen text-white">
//             <div className="w-full md:w-1/2 p-8 ">
//                 <h1 className="text-4xl mb-4 font-hero-font">
//                     Hi, <br /> I'm Gayathri M
//                 </h1>
//                 <p className="text-lg font-hero-font" >I am a Full-Stack Developer</p>
//                 <div className='flex'>
//                     <a href='#'><AiOutlineGithub /></a>
//                     <a href='#'><AiOutlineLinkedin/></a>
//                 </div>
//             </div>
//             <div className="w-full md:w-1/2">
//                 <img className="w-full h-auto" src={Heroimg} alt="Hero" />
                
//             </div>
//         </section>
//     );
// }

// import Heroimg from '../assets/Hero.png';

// export default function Hero() {
//     return (
//         <section className='flex bg-secondary'>
//             <h1 className='w-full text-white ' >
//                 Hi, <br /> I'm Gayathri M
//                 <p>I am a Full-Stack Developer</p>
//             </h1>
//             <img className='w-1/2' src={Heroimg} />
//         </section>
//     );
// }

// const styles = {
//     container: {
//         position: 'relative',
//         width: '100%',
//         height: '100vh', // Full viewport height
//         overflow: 'hidden',
//     },
//     image: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         objectFit: 'cover', // Ensures the image covers the entire area without distortion
//     },
//     text: {
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         color: 'white',
//         textAlign: 'center',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: adds contrast behind the text
//         padding: '1rem',
//         borderRadius: '8px',
//     },
// };

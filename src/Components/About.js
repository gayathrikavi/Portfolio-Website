import Aboutimg from '../assets/About.png'
export default function About(){
    const config={
        line1:'Hi, Im Gayathri M ,I am a Full Stack Developer with expertise in Python and a background in Computer Science Engineering.',
        line2:'I specialize in building responsive web applications using technologies like HTML5, CSS3, Bootstrap,React.js and MySQL. Passionate about problem-solving and creating seamless user experiences.'
    }
    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'> 
        <div className='py-5 md:w-1/3'>
        <img src={Aboutimg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
           <div className='flex flex-col justify-center'>
           <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
           <p className='text-white pb-5'>{config.line1}</p> 
           <p className='text-white'>{config.line2}</p>
           </div>
        </div>
    </section>
}
import websiteImg1 from '../assets/login page.png';
import websiteImg2 from '../assets/netflix.png';
import websiteImg3 from '../assets/loan.png';

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'A Authentication Portal, Built using Python and MySql',
                link: 'https://github.com/gayathrikavi/Authentication-Portal.git'
            },
            {
                image: websiteImg2,
                description: 'Netflix Clone UI , built using HTML, and CSS',
                link: 'https://github.com/gayathrikavi/Netflix-clone-UI.git'
            },
            {
                image: websiteImg3,
                description: 'Loan Mangement System, Built using Workbench MySql Database server',
                link: 'https://github.com/gayathrikavi/MYSQL-PROJECTS'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with Python, HTML , CSS and MySQL. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}
// import websiteImg1 from '../assets/ecommerce-websites.jpg';
// import websiteImg2 from '../assets/food-ecommerce.jpg';
// import websiteImg3 from '../assets/website-blog.jpg'

// export default function Projects(){
//     const config = {
//         projects : [
//             {
//                 image: websiteImg1,
//                 description: 'A Ecommerce Website. Built with MERN Stack.',
//                 link: 'https://github.com/jvlcode/jvlcart'
//             },
//             {
//                 image: websiteImg2,
//                 description: 'Food Ecommerce website like Swiggy, Built with Angular & .Net',
//                 link: 'https://github.com/jvlcode/food'
//             },
//             {
//                 image: websiteImg3,
//                 description: 'Basic Blog Website . Built with Next JS and MongoDB',
//                 link: 'https://github.com/jvlcode/blog'
//             }
//         ]
//     }
//     return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
//     <div className="w-full">
//         <div className="flex flex-col px-10 py-5">
//             <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
//             <p>These are some of my best projects. I have built these with React.Check them out.</p>
//         </div>
//     </div>
//     <div className='w-full'>
//     <div className='flex flex-col md:flex-row px-10 gap-5'>
//         <div className='relative'>
//         <img className='h-[200px] w-[500px]' src={websiteImg1}/> 
//         <div className='project-desc'> 
//         <p className='text-center px-5 py-5'></p>
//         </div>
//         </div>  
//         <div className='relative'>
//         <img className='h-[200px] w-[500px]' src={websiteImg2}/>
//         <div className='project-desc'>
//         <p className='text-center px-5 py-5'></p>
//         </div>
//         </div>
//         <div className='relative'>
//         <img className='h-[200px] w-[500px]'src={websiteImg3}/>
//         <div className='project-desc'>
//         <p className='text-center px-5 py-5'></p>
//         </div>
//         </div>
//     </div>
//     </div>
//     </section>
// }
    // return <section className="flex py-20 px-5 justify-center bg-primary text-white">
    //     <div className="w-1/2">
    //     <div className="flex justify-center">
    //     <h1 className="text-4xl text-white border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
    //     </div>  
    //     </div>
    //     <div className="w-1/2">
    //         <img src="" />
    //     </div>
    // </section>

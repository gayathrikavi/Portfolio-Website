import ResumeImg from '../assets/resume.png';

export default function Resume () {
    const config = {
        link: 'https://drive.google.com/file/d/1JauZWLCs9Vu5UzD51eDz5UO35ezFrh0U/view?usp=drive_link'
    }

    return <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
                <p className='pb-5'>You can view my resume <a className='btn' href={config.link}> Download</a></p>
            </div>
        </div>
    </section>
}
// import resumeimg from '../assets/resume.png'
// export default function Resume(){
//     return <section className='flex flex-col md:flex-row bg-secondary px-5'> 
//         <div className='py-5 md:w-1/2 flex justify-center'>
//         <img className='w-[300px]'src={resumeimg} />
//         </div>
//         <div className='md:w-1/2 flex justify-center'>
//            <div className='flex flex-col justify-center'>
//            <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
//            <p className='text-white pb-5'>You can My Resume <a href='#'>Download</a></p>
//            </div>
//         </div>
//     </section>
// }
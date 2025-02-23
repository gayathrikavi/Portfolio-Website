

export default function Contact() {
     const config = {
        Email: 'gayathri30kavi@gmail.com'
     }

    return <section id='contact' className='flex flex-col bg-primary  px-5 py-32 text-white'>
        <div className='flex flex-col items-center'>
                <h1 className='text-4xl border-b-4 text-white border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
                <p className='pb-5'>If you want to discuss more in detail, please contact me</p>
                <p className="py-2"><span className="font-bold">Email : </span>{config.Email}</p>
            </div>
       
    </section>
}
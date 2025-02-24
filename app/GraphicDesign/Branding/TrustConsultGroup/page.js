import Image from 'next/image'
import Link from 'next/link'

const TrustConsultGroup = () => {

  return (
    <div className='mt-24 md:mt-[10vh] md:px-10 px-5'>
        <div className='flex flex-row items-center justify-start gap-4 my-4 py-2'>
            <span>
                <Image src='/Branding/trustconsultgroup/logo.png' width={500} height={500} alt='nirmala_logo' className='w-fit md:h-12 h-10'/>
            </span>
            <span>
                <h1 className='md:text-base text-sm font-medium'>Trust Consult Group</h1>
                <Link className='md:text-base text-sm font-medium' href='https://www.instagram.com/404creative.co.in'>@404creative.co.in</Link>
            </span>
        </div>

        <main>
        <Image priority src='/Branding/trustconsultgroup/01.png' width={4000} height={4000} alt='nirmala' className='w-full h-auto'/>
        <video src='/Branding/trustconsultgroup/03.mp4' playsInline autoPlay loop muted controls={false} className='w-full h-auto'></video> 
        <Image priority src='/Branding/trustconsultgroup/02.png' width={4000} height={4000} alt='nirmala' className='w-full h-auto'/>
        <Image priority src='/Branding/trustconsultgroup/04.png' width={4000} height={4000} alt='nirmala' className='w-full h-auto'/>
        <Image priority src='/Branding/trustconsultgroup/05.png' width={4000} height={4000} alt='nirmala' className='w-full h-auto'/>
        </main>
    </div>
  )
}

export default TrustConsultGroup
import { NextPage } from 'next'

const Contact: NextPage = () => {
    return (
        <div className='bg-background-violet relative'>
            <div className='flex flex-row justify-center items-center pt-8'>
                <i className='ri-discuss-line text-4xl'></i>
                <h1 className='ml-2 text-4xl font-bold'>Contact</h1>
            </div>
            <div className='flex justify-center items-center'>
                <h2 className='font-bold text-xl py-10'></h2>
            </div>
            <div className='flex justify-center items-center z-10'>
                <div className='w-80 h-3/4 p-2 mb-8 bg-white drop-shadow-2xl flex flex-col space-y-4 justify-center items-start'>
                    <div className='space-y-2'>
                        <p className='text-primary-violet font-bold'></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

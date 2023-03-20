import { NextPage } from 'next'

const Resume: NextPage = () => {
    return (
        <div className='bg-background-violet h-screen relative'>
            <div className='flex flex-row justify-center items-center pt-8'>
                <i className='ri-profile-line text-4xl'></i>
                <h1 className='ml-2 text-4xl font-bold'>CV</h1>
            </div>
            <div className='flex justify-center items-center'>
                <h2 className='font-bold text-xl py-10'>Expériences</h2>
            </div>
            <div className='flex justify-center items-center z-10'>
                <div className='w-80 h-3/4 p-2 bg-white drop-shadow-2xl flex flex-col space-y-4 justify-center items-start'>
                    <p className='text-primary-violet font-bold'>
                        2021 - maintenant
                    </p>
                    <p className='font-semibold'>
                        Consultante Cloud & DevOps chez Atos OneCloud -
                        Développeuse Fullstack
                    </p>
                    <p>Bezons, France</p>
                    <ul>
                        <li>
                            Projet HDH : Développement d’une application
                            utilisant ReactJS (NextJS), NestJS, PostgreSQL
                        </li>
                        <li>Programme Ignite - Atos France</li>
                    </ul>

                    <p className='text-primary-violet font-bold'>2020 - 2021</p>
                    <p className='font-semibold'>
                        Sales Excellence Analyst - Microsoft Azure
                    </p>
                    <p>Issy Les Moulineaux, France</p>
                    <p>Analyse et suivi de l’activité Azure en France</p>
                </div>
            </div>
        </div>
    )
}

export default Resume

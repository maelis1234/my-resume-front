import { NextPage } from 'next'

const Resume: NextPage = () => {
    return (
        <>
            <div className='bg-background-violet relative'>
                <div className='flex flex-row justify-center items-center pt-8'>
                    <i className='ri-profile-line text-4xl'></i>
                    <h1 className='ml-2 text-4xl font-bold'>CV</h1>
                </div>
                <div className='flex justify-center items-center'>
                    <h2 className='font-bold text-xl py-10'>Expériences</h2>
                </div>
                <div className='flex justify-center items-center z-10'>
                    <div className='w-80 h-3/4 p-2 bg-white drop-shadow-2xl flex flex-col space-y-4 justify-center items-start'>
                        <div className='space-y-2'>
                            <p className='text-primary-violet font-bold'>
                                septembre 2021 - maintenant
                            </p>
                            <p className='font-semibold'>
                                Consultante Cloud & DevOps - Atos
                            </p>
                            <p className='text-sm'>Bezons, France</p>
                            <ul className=' text-sm list-disc pl-4 space-y-2'>
                                <li className=''>
                                    <span className='font-semibold'>
                                        Projet HDH :
                                    </span>{' '}
                                    Développement d’une application utilisant
                                    ReactJS (NextJS), NestJS, PostgreSQL
                                </li>
                                <li>
                                    <span className='font-semibold'>
                                        Graduate Program Ignite - Atos France
                                    </span>
                                    <br />
                                    Programme de formation aux métiers du cloud
                                    et aux technologies DevOps (GCP, Azure, AWS,
                                    Docker, Terraform, Kubernetes, GitLab)
                                </li>
                            </ul>
                        </div>

                        <div className='space-y-2'>
                            <p className='text-primary-violet font-bold'>
                                janv 2020 - juil 2020
                            </p>
                            <p className='font-semibold'>
                                Sales Excellence Analyst - Microsoft
                            </p>
                            <p className='text-sm'>
                                Issy Les Moulineaux, France
                            </p>
                            <ul className='text-sm list-disc pl-4 space-y-2'>
                                <li>
                                    Analyse et suivi de l’activité Azure en
                                    France
                                </li>
                                <li>
                                    Analyses ponctuelles en fonction des besoins
                                    business : planification, analyse, exécution
                                    des initiatives permettant l’efficience des
                                    solutions cloud de Microsoft
                                </li>
                            </ul>
                        </div>
                        <div className='space-y-2'>
                            <p className='text-primary-violet font-bold'>
                                sept 2020 - sept 2021
                            </p>
                            <p className='font-semibold'>
                                Stagiaire - Assistante Sales Director, Yoobic
                            </p>
                            <p className='text-sm'>Paris, France</p>
                            <ul className='text-sm list-disc pl-4 space-y-2'></ul>
                        </div>
                        <div className='space-y-2'>
                            <p className='text-primary-violet font-bold'>
                                juin 2019 - nov 2019
                            </p>
                            <p className='font-semibold'>
                                Stagiaire - Resource Manager, Capgemini
                            </p>
                            <p className='text-sm'>
                                Issy Les Moulineaux, France
                            </p>
                            <ul className='text-sm list-disc pl-4 space-y-2'></ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume

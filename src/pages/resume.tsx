import { NextPage } from 'next'
import Card from '@/components/card'
import Head from 'next/head'

const Resume: NextPage = () => {
    return (
        <>
            <Head>
                <title>Maëlis Hammouche - Mon CV</title>
                <meta
                    name='description'
                    content='Description de mes expériences professionnelles et mes formations'
                />
            </Head>
            <div className='bg-background-violet relative'>
                <div className='flex flex-row justify-center items-center pt-8'>
                    <i className='ri-profile-line text-4xl'></i>
                    <h1>CV</h1>
                </div>
                <div className='flex justify-center items-center'>
                    <h2 className=' text-xl py-3'>Expériences</h2>
                </div>
                 <Card
                    date='juillet 2024 - maintenant'
                    jobTitle='Développeuse full stack - Visian'
                    location='Paris, France'
                    titleFirstMission='Crédit Agricole Technologies Services'
                    contentFirstMission='Développement d&apos;applications utilisant Angular et Node.js dans un environnement DevOps en méthode agile Scrum'
                />
                <Card
                    date='septembre 2021 - juillet 2024'
                    jobTitle='Consultante Cloud & DevOps - Atos'
                    location='Bezons, France'
                    titleFirstMission='Projet HDH'
                    contentFirstMission='Développement d’une application utilisant ReactJS (NextJS), NestJS, PostgreSQL'
                    titleSecondMission='Graduate Program Ignite'
                    contentSecondMission='Programme de formation aux métiers du
                                        cloud et aux technologies DevOps (GCP,
                                        Azure, AWS, Docker, Terraform,
                                        Kubernetes, GitLab)'
                />
                <Card
                    date='septembre 2020 - septembre 2021'
                    jobTitle='Sales Excellence Analyst - Microsoft'
                    location='Issy Les Moulineaux, France'
                    titleFirstMission='Azure'
                    contentFirstMission='Analyse et suivi de toute l’activité commerciale Azure en France'
                    titleSecondMission='Communication'
                    contentSecondMission='Newsletters internes et dashboards'
                />
                <div className='flex justify-center items-center'>
                    <h2 className='py-3'>Formation</h2>
                </div>
                <Card
                    date={'2017-2021'}
                    jobTitle={
                        'Programme Grande Ecole & Master Spécialisé Management des SI et du Numérique'
                    }
                    location={'Grenoble Ecole de Management, France'}
                />
                <div className='flex justify-center items-center'>
                    <h2 className='py-3'>Compétences</h2>
                </div>
                <Card>
                    <div className='flex flex-col lg:flex-row space-y-3'>
                        <div>
                            <h3 className='font-bold'>Développement</h3>
                            <ul className=' lg:px-8 lg:py-4 text-sm list-disc pl-4 space-y-1'>
                                <li className=''>
                                    <span className='font-semibold'>
                                        Frontend :{' '}
                                    </span>
                                    ReactJS, NextJS, Angular, Tailwind CSS
                                </li>
                                <li>
                                    <span className='font-semibold'>
                                        Backend :{' '}
                                    </span>
                                    NestJS, Firebase
                                </li>
                                <li>
                                    <span className='font-semibold'>
                                        Base de données :{' '}
                                    </span>
                                    PostgreSQL, Prisma, Firestore
                                </li>
                                <li>
                                    <span className='font-semibold'>
                                        Testing :{' '}
                                    </span>
                                    Cypress, Jest
                                </li>
                                <li>
                                    <span className='font-semibold'>
                                        Outils DevOps :{' '}
                                    </span>
                                    GitLab, Docker, Postman, Figma
                                </li>
                            </ul>
                            <h3 className='font-bold mt-3'>Langues</h3>
                            <ul className='lg:px-8 lg:py-4 text-sm list-disc pl-4 space-y-1'>
                                <li className='font-semibold'>
                                    Français (langue maternelle)
                                </li>
                                <li className='font-semibold'>
                                    Anglais (courant: lu, parlé, écrit)
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='font-bold'>Certifications</h3>
                            <ul className='lg:px-8 lg:py-4 text-sm list-disc pl-4 space-y-1'>
                                <li>Google Cloud Digital Leader (janv-2022)</li>
                                <li>Microsoft Azure AZ-900 (fev-2022)</li>
                                <li>Microsoft Azure AI-900 (mai-2022)</li>
                                <li>AWS Cloud Practitioner (mars-2022)</li>
                                <li>
                                    Professional Scrum Product Owner I
                                    (nov-2022)
                                </li>
                                <li>Professional Scrum Master I (dec-2022)</li>
                                <li>
                                    Hashicorp Terraform Associate 002 (dec-2022)
                                </li>
                            </ul>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Resume

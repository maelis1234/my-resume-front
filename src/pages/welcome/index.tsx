import Head from 'next/head'
import { NextPage } from 'next'
import Image from 'next/image'
import profilePicture from '../../assets/profilePicture.png'
import Link from 'next/link'
import router from 'next/router'

const Welcome: NextPage = () => {
    return (
        <>
            <Head>
                <title>Maëlis Hammouche - Website</title>
                <meta name='description' content='Curriculum Vitae' />
            </Head>
            <main className='h-screen relative'>
                <div
                    className='bg-white h-1/2 lg:h-0
                '
                ></div>
                <div
                    className='bg-secondary-violet h-1/2 lg:w-1/2 lg:h-full
                '
                ></div>
                {/* Card format mobile */}
                <div className='absolute inset-0 flex justify-center items-center z-10 lg:hidden'>
                    <div className='w-72 h-content bg-background-violet drop-shadow-2xl flex flex-col justify-center items-center space-y-4'>
                        <div className='pt-2'>
                            <Image
                                src={profilePicture}
                                alt=''
                                className='rounded-full bg-pink-100 w-40 h-40'
                            />
                        </div>
                        <p className='font-semibold'>Maëlis HAMMOUCHE</p>
                        <p className='px-4 text-sm'>
                            Bonjour et bienvenue sur mon site web !
                        </p>
                        <p className='px-4 text-sm'>
                            Passionnée par les nouvelles technologies, je me
                            suis orientée vers le cloud et le développement web
                            après un cursus orienté management.
                        </p>
                        <p className='px-4 text-sm'>
                            Je travaille aujourd&apos;hui en tant que
                            développeuse fullstack chez Atos OneCloud.
                        </p>

                        <div className='h-0.5 w-32 rounded-xl bg-primary-violet'></div>
                        <div className='flex flex-row space-x-8 pb-6'>
                            <button
                                onClick={() => {
                                    router.push('/resume')
                                }}
                                className='text-white h-8 bg-primary-violet hover:bg-violet-400 w-24 rounded-2xl'
                            >
                                Mon CV
                            </button>
                            {/* <button
                                onClick={() => {
                                    router.push('/projects')
                                }}
                                className='w-24 h-8 rounded-2xl border border-primary-violet hover:bg-violet-300 text-primary-violet font-semibold bg-white'
                            >
                                Projets
                            </button> */}
                        </div>
                        <div className='w-full bg-white h-14 flex justify-center space-x-6 items-center'>
                            <Link
                                href='https://www.linkedin.com/in/maelis-hammouche/'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <i className='ri-linkedin-fill text-2xl' />
                            </Link>
                            <Link
                                href='https://github.com/maelis1234'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <i className='ri-github-fill text-2xl' />
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Card format desktop */}
                <div className='lg:absolute lg:inset-0 lg:justify-center lg:items-center lg:z-10 lg:flex hidden'>
                    <div className='w-2/3 bg-background-violet drop-shadow-2xl flex flex-row justify-between'>
                        <div className='flex-col flex items-center py-8 space-y-4 w-1/2'>
                            <Image
                                src={profilePicture}
                                alt=''
                                className='rounded-full bg-pink-100 w-52 h-52'
                            />
                            <p className='font-semibold text-2xl'>
                                Maëlis HAMMOUCHE
                            </p>
                            <div className='h-0.5 w-32 rounded-xl bg-primary-violet'></div>
                            <p className='text-xl'>
                                Consultante Cloud & DevOps
                            </p>
                            <div className='w-full bg-white h-14 flex justify-center space-x-20 items-center'>
                                <Link
                                    href='https://www.linkedin.com/in/maelis-hammouche/'
                                    rel='noopener noreferrer'
                                    target='_blank'
                                >
                                    <i className='ri-linkedin-fill text-3xl' />
                                </Link>
                                <Link
                                    href='https://github.com/maelis1234'
                                    rel='noopener noreferrer'
                                    target='_blank'
                                >
                                    <i className='ri-github-fill text-3xl' />
                                </Link>
                            </div>
                        </div>
                        <div className='flex flex-col w-1/2 space-y-4 py-4 justify-center items-center'>
                            {/* <div className='space-x-8'>
                                {/* <button
                                    onClick={() => {
                                        router.push('/projects')
                                    }}
                                    className='w-36 h-8 rounded-2xl border border-primary-violet text-primary-violet font-semibold bg-white hover:bg-violet-300'
                                >
                                    Projets
                                </button> 
                            </div> */}
                            <p className='px-12'>
                                Bonjour et bienvenue sur mon site web !
                            </p>
                            <p className='px-12'>
                                Passionnée par les nouvelles technologies et les
                                Systèmes d&apos;Information, j&apos;ai réalisé
                                un double master à Grenoble Ecole de Management.
                            </p>
                            <p className='px-12'>
                                Mes différentes expériences professionnelles
                                m&apos;ont permis de me familiariser
                                progressivement au monde des SI et
                                d&apos;acquérir des compétences techniques dans
                                le domaine du cloud.
                            </p>
                            <p className='px-12'>
                                Je travaille aujourd&apos;hui en tant que
                                développeuse fullstack chez Atos OneCloud.
                            </p>
                            <button
                                onClick={() => {
                                    router.push('/resume')
                                }}
                                className='text-white h-8 bg-primary-violet w-36 rounded-2xl hover:bg-violet-500'
                            >
                                Mon CV
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Welcome

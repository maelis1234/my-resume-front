import Head from 'next/head'
import { Inter } from 'next/font/google'
import { NextPage } from 'next'
import Image from 'next/image'
import profilePicture from '../../assets/profilePicture.png'
import Link from 'next/link'
import router from 'next/router'

// const inter = Inter({ subsets: ['latin'] })

const Welcome: NextPage = () => {
    return (
        <>
            <Head>
                <title>Accueil</title>
                <meta name='description' content="Page d'accueil" />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className='h-screen relative'>
                <div
                    className='flex-col flex bg-white h-1/2
                '
                ></div>
                <div
                    className='flex-col flex bg-secondary-violet h-1/2
                '
                ></div>
                <div className='absolute inset-0  flex justify-center items-center z-10'>
                    <div className='w-72 h-3/4 bg-background-violet drop-shadow-2xl flex flex-col justify-center items-center space-y-8'>
                        <div>
                            <Image
                                src={profilePicture}
                                alt=''
                                className='rounded-full bg-pink-100 w-44 h-44'
                            />
                        </div>
                        <p className='font-semibold'>Maëlis HAMMOUCHE</p>
                        <div className='h-0.5 w-32 rounded-xl bg-primary-violet'></div>
                        <div className='flex flex-row space-x-8 pb-16'>
                            <button
                                onClick={() => {
                                    router.push('/resume')
                                }}
                                className='text-white h-8 bg-primary-violet w-24 rounded-xl'
                            >
                                CV
                            </button>
                            <button
                                onClick={() => {
                                    router.push('/projects')
                                }}
                                className='w-24 h-8 rounded-xl border border-black font-semibold bg-white'
                            >
                                Projets
                            </button>
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
            </main>
        </>
    )
}

export default Welcome

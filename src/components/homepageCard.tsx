import Link from 'next/link'
import Image from 'next/image'
import router from 'next/router'
import profilePicture from '@/assets/profilePicture.png'
import PurpleButton from './purpleButton'
import { motion } from 'framer-motion'

const HomePageCard = () => {
    return (
        <>
            {/* Card format mobile */}
            <div className='absolute inset-0 flex justify-center items-center z-10 lg:hidden'>
                <div className='w-72 h-content bg-background-violet drop-shadow-2xl flex flex-col justify-center items-center space-y-4'>
                    <div className='pt-2'>
                        <Image
                            src={profilePicture}
                            alt='profile picture of Maëlis Hammouche'
                            className='rounded-full bg-pink-100 w-40 h-40'
                        />
                    </div>
                    <p className='font-semibold'>Maëlis HAMMOUCHE</p>
                    <p className='px-4 text-sm'>
                        Bonjour et bienvenue sur mon site web !
                    </p>
                    <p className='px-4 text-sm'>
                        Passionnée par les nouvelles technologies, je me suis
                        orientée vers le cloud et le développement web après un
                        cursus orienté management.
                    </p>
                    <p className='px-4 text-sm'>
                        Je travaille aujourd&apos;hui en tant que développeuse
                        fullstack chez Visian.
                    </p>

                    <div className='h-0.5 w-32 rounded-xl bg-primary-violet'></div>
                    <div className='flex flex-row space-x-8 pb-6'>
                        <PurpleButton
                            route={'resume'}
                            type={'button'}
                            label={'Mon CV'}
                            width={'w-24'}
                            height={'h-8'}
                        />
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
                        <p className='text-xl'>Développeuse full stack</p>
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
                        <p className='px-12'>
                            Bonjour et bienvenue sur mon site web !
                        </p>
                        <p className='px-12'>
                            Passionnée par les nouvelles technologies et les
                            Systèmes d&apos;Information, j&apos;ai réalisé un
                            double master à Grenoble Ecole de Management.
                        </p>
                        <p className='px-12'>
                            Mes différentes expériences professionnelles
                            m&apos;ont permis de me familiariser progressivement
                            au monde des SI et d&apos;acquérir des compétences
                            techniques dans le domaine du cloud et du développement d'applications.
                        </p>
                        <p className='px-12'>
                            Je travaille aujourd&apos;hui en tant que
                            développeuse fullstack chez Eviden OneCloud.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.8 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => router.push('/resume')}
                            className='bg-primary-violet text-white font-bold py-2 px-4 rounded-xl'
                        >
                            Mon CV
                        </motion.button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePageCard

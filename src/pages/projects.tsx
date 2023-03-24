import Card from '@/components/card'
import { NextPage } from 'next'
import Head from 'next/head'

const Projects: NextPage = () => {
    return (
        <>
            <Head>
                <title>Maëlis Hammouche - Mes projets</title>
                <meta name='description' content='Description de mes projets' />
            </Head>
            <div className='bg-background-violet relative'>
                <div className='flex flex-row justify-center items-center pt-8'>
                    <i className='ri-code-box-line text-4xl'></i>
                    <h1>Projets</h1>
                </div>
                <div className='flex justify-center items-center'>
                    <h2 className=' text-xl py-3'> </h2>
                </div>{' '}
                <Card>
                    <div className='flex flex-col lg:flex-row space-y-3'>
                        <p className='text-primary-violet font-bold'>
                            Projet 1
                        </p>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Projects

import Head from 'next/head'
import { NextPage } from 'next'
import HomePageCard from '@/components/homepageCard'

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
                <HomePageCard />
            </main>
        </>
    )
}

export default Welcome

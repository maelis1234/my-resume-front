import Head from 'next/head'
import { Inter } from 'next/font/google'
import { NextPage } from 'next'

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
            <main>Welcome Page</main>
        </>
    )
}

export default Welcome

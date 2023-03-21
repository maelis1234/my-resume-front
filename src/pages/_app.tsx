import '@/styles/globals.css'
import 'remixicon/fonts/remixicon.css'
import type { AppProps } from 'next/app'
import Sidebar from '@/components/sidebar'
import Footer from '@/components/footer'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Sidebar />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

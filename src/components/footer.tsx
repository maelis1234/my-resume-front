import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='text-sm p-3 lg:p-8 border-t border-t-background-violet'>
            <div className='flex justify-between '>
                <div>
                    <p className='font-bold'>Tel</p>
                    <p>06 XX XX XX XX</p>
                </div>
                <Link
                    href='mailto:maelis.hammouche@gmail.com'
                    className='hover:text-primary-violet'
                >
                    <p className='font-bold'>Mail</p>
                    <p>maelis.hammouche@gmail.com</p>
                </Link>
            </div>
            <div className='space-x-4'>
                <Link
                    href='https://www.linkedin.com/in/maelis-hammouche/'
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    <i className='ri-linkedin-fill text-xl hover:text-primary-violet' />
                </Link>
                <Link
                    href='https://github.com/maelis1234'
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    <i className='ri-github-fill text-xl hover:text-primary-violet' />
                </Link>
            </div>
            <div className='flex pt-2'>
                <i className='ri-copyright-fill pr-1' />
                <p>2023 par Maëlis Hammouche</p>
            </div>
        </footer>
    )
}

export default Footer

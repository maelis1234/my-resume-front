import { NextPage } from 'next'

const Menu: NextPage = () => {
    return (
        <div className='bg-background-violet h-screen'>
            <div className='grid justify-items-stretch pt-12 pr-4 pb-12'>
                <i className='ri-close-fill text-4xl text-primary-violet justify-self-end' />
            </div>
            <ul className='font-bold text-2xl flex flex-col space-y-12 justify-center items-center'>
                <li>A PROPOS DE MOI</li>
                <li>CV</li>
                <li>PROJETS</li>
                <li>CONTACT</li>
            </ul>
        </div>
    )
}

export default Menu

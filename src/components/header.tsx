import router from 'next/router'

const Header = () => {
    return (
        <header className='flex flex-row justify-between ml-5 mr-5 mt-5 lg:mb-5'>
            <div
                className='cursor-pointer'
                onClick={() => {
                    router.push('/welcome')
                }}
            >
                <p className='text-lg font-bold'>Maëlis HAMMOUCHE</p>
                <p className='text-sm font-semibold'>
                    Consultante Cloud & DevOps
                </p>
            </div>
            <div>
                <i
                    // onClick={() => {
                    //     router.push('/menu')
                    // }}
                    className='ri-menu-fill text-primary-violet text-4xl cursor-pointer'
                />
            </div>
        </header>
    )
}

export default Header

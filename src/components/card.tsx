interface Props {
    date?: string
    jobTitle?: string
    location?: string
    titleFirstMission?: string
    contentFirstMission?: string
    titleSecondMission?: string
    contentSecondMission?: string
    children?: any
}

const Card = ({
    date,
    jobTitle,
    location,
    titleFirstMission,
    contentFirstMission,
    titleSecondMission,
    contentSecondMission,
    children,
}: Props) => {
    return (
        <>
            <div className='flex flex-col justify-center items-center z-10'>
                <div className='w-80 lg:w-2/3 h-3/4 p-2 lg:p-4 mb-8 bg-white rounded-sm drop-shadow-lg flex flex-col space-y-4 justify-center items-start'>
                    {children}
                    <div className='space-y-4 lg:space-x-40 flex flex-col lg:flex-row'>
                        <div className='space-y-1'>
                            <p className='text-primary-violet font-bold'>
                                {date}
                            </p>
                            <p className='font-semibold'>{jobTitle}</p>
                            <p className='text-sm'>{location}</p>
                        </div>

                        <div>
                            <ul className=' text-sm list-disc pl-4 space-y-2'>
                                {titleFirstMission && (
                                    <li className=''>
                                        <span className='font-semibold'>
                                            {titleFirstMission} :
                                        </span>{' '}
                                        {contentFirstMission}
                                    </li>
                                )}
                                {titleSecondMission && (
                                    <li>
                                        <span className='font-semibold'>
                                            {titleSecondMission} :
                                        </span>{' '}
                                        {contentSecondMission}
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card

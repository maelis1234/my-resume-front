import PurpleButton from '@/components/purpleButton'
import { NextPage } from 'next'

const MessageSent: NextPage = () => {
    return (
        <div className='bg-background-violet relative h-screen flex flex-col items-center justify-center space-y-4'>
            <p className='font-bold text-2xl'>Merci !</p>
            <p className='font-semibold text-xl'>
                Votre message a bien été envoyé.
            </p>
            <PurpleButton
                route={'/welcome'}
                label={"Retour à l'accueil"}
                type={'button'}
                width={'w-80'}
                height={'h-20'}
                otherProperties={'text-2xl'}
            />
        </div>
    )
}

export default MessageSent

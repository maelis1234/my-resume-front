import { NextPage } from 'next'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const ContactSchema = Yup.object().shape({
    firstname: Yup.string()
        .min(1, 'Le prénom doit avoir au moins 5 caractères')
        .max(20, 'Le prénom ne doit pas dépasser 20 caractères')
        .required('Veuillez entrer un prénom'),
    lastname: Yup.string()
        .min(1, 'Le nom doit avoir au moins 5 caractères')
        .max(20, 'Le nom ne doit pas dépasser 20 caractères')
        .required('Veuillez entrer un nom'),
    email: Yup.string()
        .email('Veuillez entrer une adresse email valide')
        .required('Veuillez entrer une adresse email'),
    message: Yup.string()
        .min(1, 'Le message doit avoir au moins 1 caractère')
        .max(500, 'Le message ne doit pas dépasser 500 caractères')
        .required('Veuillez entrer un message'),
})

const Contact: NextPage = () => {
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            message: '',
        },
        validationSchema: ContactSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
            console.log(values)
        },
    })
    return (
        <div className='bg-background-violet relative'>
            <div className='flex flex-row justify-center items-center pt-8'>
                <i className='ri-discuss-line text-4xl'></i>
                <h1 className='ml-2 text-4xl font-bold'>Contact</h1>
            </div>
            <div className='flex justify-center items-center'>
                <h2 className='font-bold text-xl py-10'></h2>
            </div>
            <div className='flex justify-center items-center z-10'>
                <div className='w-80 h-3/4 p-2 mb-8 bg-white drop-shadow-2xl flex flex-col space-y-2 justify-center items-center'>
                    <p className='text-primary-violet text-2xl font-bold'>
                        Formulaire de contact
                    </p>
                    <form onSubmit={formik.handleSubmit} className='space-y-4'>
                        <div className='flex flex-col'>
                            <label htmlFor='firstname'>Prénom</label>
                            <input
                                className='border-2 rounded-md border-primary-violet'
                                id='firstname'
                                name='firstname'
                                type='text'
                                onChange={formik.handleChange}
                                value={formik.values.firstname}
                                minLength={5}
                                maxLength={45}
                            />
                            {formik.touched.firstname &&
                                formik.errors.firstname && (
                                    <div className='text-red-500'>
                                        {formik.errors.firstname}
                                    </div>
                                )}
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor='lastname'>Nom</label>
                            <input
                                className='border-2 rounded-md border-primary-violet'
                                id='lastname'
                                name='lastname'
                                type='text'
                                onChange={formik.handleChange}
                                value={formik.values.lastname}
                                minLength={5}
                                maxLength={45}
                            />
                            {formik.touched.lastname &&
                                formik.errors.lastname && (
                                    <div className='text-red-500'>
                                        {formik.errors.lastname}
                                    </div>
                                )}
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='email'>Adresse email</label>
                            <input
                                className='border-2 rounded-md border-primary-violet'
                                id='email'
                                name='email'
                                type='email'
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <div className='text-red-500'>
                                    {formik.errors.email}
                                </div>
                            )}{' '}
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='message'>Message</label>
                            <textarea
                                className='border-2 rounded-md h-16 border-primary-violet'
                                id='message'
                                name='message'
                                onChange={formik.handleChange}
                                value={formik.values.message}
                                minLength={1}
                                maxLength={500}
                            />
                            {formik.touched.message &&
                                formik.errors.message && (
                                    <div className='text-red-500'>
                                        {formik.errors.message}
                                    </div>
                                )}
                        </div>
                        <button
                            className='text-white h-8 bg-primary-violet w-36 rounded-2xl hover:bg-violet-500'
                            type='submit'
                        >
                            Envoyer
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact

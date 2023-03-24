import { NextPage } from 'next'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { onSendContact } from './api/contact'
import router from 'next/router'
import Card from '@/components/card'
import InputComponent from '@/components/input'
import PurpleButton from '@/components/purpleButton'
import { useState } from 'react'

const ContactSchema = Yup.object().shape({
    firstname: Yup.string()
        .min(1, 'Le prénom doit avoir au moins 1 caractère')
        .max(40, 'Le prénom ne doit pas dépasser 40 caractères')
        .required('Veuillez entrer un prénom'),
    lastname: Yup.string()
        .min(1, 'Le nom doit avoir au moins 1 caractère')
        .max(40, 'Le nom ne doit pas dépasser 40 caractères')
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
            onSendContact(values)
        },
    })

    const isFormFilled = Object.values(formik.values).every((value) =>
        Boolean(value)
    )

    return (
        <div className='bg-background-violet relative'>
            <div className='flex flex-row justify-center items-center pt-8'>
                <i className='ri-discuss-line text-4xl'></i>
                <h1 className='ml-2 text-4xl font-bold'>Contact</h1>
            </div>
            <div className='flex justify-center items-center'>
                <h2 className='font-bold text-xl py-10'></h2>
            </div>
            <div className='flex flex-col justify-center items-center z-10'>
                <div className='w-80 lg:w-1/3 h-3/4 p-2 lg:p-4 mb-8 bg-white rounded-sm drop-shadow-lg flex flex-col space-y-4 justify-center items-center'>
                    <form
                        onSubmit={formik.handleSubmit}
                        className='flex flex-col justify-center items-center space-y-2'
                    >
                        <p className='text-primary-violet text-xl pt-3 font-bold'>
                            Formulaire de contact
                        </p>
                        <div className='flex flex-col'>
                            <InputComponent
                                id={'firstname'}
                                label={'Prénom'}
                                placeholder={'Jean'}
                                type={'text'}
                                onChange={formik.handleChange}
                                value={formik.values.firstname}
                                minLength={1}
                                maxLength={40}
                            />
                            {formik.touched.firstname &&
                                formik.errors.firstname && (
                                    <div className='text-red-500'>
                                        {formik.errors.firstname}
                                    </div>
                                )}
                        </div>

                        <div className='flex flex-col'>
                            <InputComponent
                                id={'lastname'}
                                label={'Nom'}
                                placeholder={'Dupont'}
                                type={'text'}
                                onChange={formik.handleChange}
                                value={formik.values.lastname}
                                minLength={1}
                                maxLength={40}
                            />
                            {formik.touched.lastname &&
                                formik.errors.lastname && (
                                    <div className='text-red-500'>
                                        {formik.errors.lastname}
                                    </div>
                                )}
                        </div>

                        <div className='flex flex-col'>
                            <InputComponent
                                id={'email'}
                                label={'Adresse email'}
                                placeholder={'jean.dupont@mail.com'}
                                type={'email'}
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
                                className='border-2 rounded-md h-16 border-primary-violet placeholder:pl-1 placeholder:text-sm'
                                id='message'
                                name='message'
                                placeholder='Veuillez entrer votre message'
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
                        <div>
                            <PurpleButton
                                route={'message-sent'}
                                label={'Envoyer'}
                                type={'submit'}
                                width={'w-36'}
                                height={'h-8'}
                                disabled={!isFormFilled}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact

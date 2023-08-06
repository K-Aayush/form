'use client'

import React from 'react'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    gender: Yup.string().required('Please select a gender'),
    interests: Yup.array().min(1, 'Select at least one interest'),
    securityQuestion: Yup.string().oneOf(['place', 'friend', 'date'], 'Choose a security question').required('Choose a security question'),
    securityAnswer: Yup.string().required('Security answer is required').max(100, "Too long"),
});

const form = () => {
    return (
        <div className='container mx-auto py-32'>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    gender: '',
                    interests: [],
                    securityQuestion: '',
                    securityAnswer: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    resetForm();
                }}
            >
                <div className='flex flex-wrap w-4/12 mx-auto mb-6 bg-gray-100 rounded-xl shadow-lg overflow-hidden '>
                    <div className='w-full py-4 px-4'>
                        <h1 className='text-lg font-semibold'>Form</h1>
                        <Form className='mt-2'>
                            <div className='flex gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <label className="text-gray-900 text-sm font-medium">
                                        First Name
                                    </label>
                                    <Field className="w-full bg-gray-100 text-gray-900 border border-gray-400 rounded p-2.5" name="firstName" type="text" placeholder="FirstName" />
                                    <ErrorMessage name='firstName' component='div' className='text-red-600' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className="text-gray-900 text-sm font-medium">
                                        Last Name
                                    </label>
                                    <Field className="w-full bg-gray-100 text-gray-900 border border-gray-400 rounded p-2.5" name="lastName" type="text" placeholder="LastName" />
                                    <ErrorMessage name='lastName' component='div' className='text-red-600' />
                                </div>
                            </div>

                            <div className='mt-4'>
                                <h1 className='text-sm font-medium mb-1'>Gender</h1>
                                <div className='flex items-center'>
                                    <Field id="radio" type="radio" value="Male" name="gender" className="w-4 h-4 text-gray-900 bg-gray-100 border-gray-300" />
                                    <label className="ml-1 mr-2 text-sm font-medium text-gray-900">Male</label>

                                    <Field id="radio" type="radio" value="Female" name="gender" className="w-4 h-4 text-gray-900 bg-gray-100 border-gray-300" />
                                    <label className="ml-1 mr-2 text-sm font-medium text-gray-900">Female</label>

                                    <Field id="radio" type="radio" value="Others" name="gender" className="w-4 h-4 text-gray-900 bg-gray-100 border-gray-300" />
                                    <label className="ml-1 mr-2 text-sm font-medium text-gray-900">Others</label>
                                </div>
                                <ErrorMessage name='gender' component='div' className='text-red-600' />
                            </div>

                            <div className='mt-4'>
                                <h1 className='text-sm font-medium mb-1'>Intrests</h1>
                                <div className='flex items-center'>
                                    <Field id="checkbox" type="checkbox" name="interests" value="Coding" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                                    <label className="mx-2 text-sm font-medium text-gray-900">Coding</label>

                                    <Field id="checkbox" type="checkbox" name="interests" value="Boxing" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                                    <label className="mx-2 text-sm font-medium text-gray-900">Boxing</label>

                                    <Field id="checkbox" type="checkbox" name="interests" value="Animation" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                                    <label className="mx-2 text-sm font-medium text-gray-900">Animation</label>

                                    <Field id="checkbox" type="checkbox" name="interests" value="gaming" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                                    <label className="mx-2 text-sm font-medium text-gray-900">Gaming</label>
                                </div>
                                <ErrorMessage name='interests' component='div' className='text-red-600' />
                            </div>

                            <div className='mt-4'>
                                <h1 className='text-sm font-medium mb-1'>Security Questions</h1>
                                <div>
                                    <Field as='select' name='securityQuestion' className="w-full bg-gray-100 border border-gray-400 hover:border-gray-700 p-2.5 rounded shadow-lg">
                                        <option value='place'>What is your birth place?</option>
                                        <option value='friend'>Who is your bestfriend?</option>
                                        <option value='date'>What is your birthdate?</option>
                                    </Field>
                                    <ErrorMessage name='securityQuestion' component='div' className='text-red-600' />
                                    <div className='mt-2'>
                                        <Field className="w-full bg-gray-100 text-gray-900 border border-gray-400 rounded p-2.5" name="securityAnswer" type="text" placeholder="Write your answer" />
                                        <ErrorMessage name='securityAnswer' component='div' className='text-red-600' />
                                    </div>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <button type='submit' className='w-fit bg-blue-600 rounded-2xl hover:bg-blue-700 text-white p-2.5'>
                                    Submit
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
            </Formik>
        </div>

    )
}

export default form
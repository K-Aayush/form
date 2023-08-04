import React from 'react'

const Form = () => {
    return (
        <div className='container mx-auto py-40'>
            <div className='flex flex-wrap w-4/12 mx-auto mb-6 bg-gray-100 rounded-xl shadow-lg overflow-hidden '>
                <div className='w-full py-4 px-3'>
                    <h1 className='text-lg font-semibold'>Form</h1>
                    <form action="#" className='mt-2'>
                        <div className='flex gap-2'>
                            <div className='flex flex-col gap-2'>
                                <label className="text-gray-900 text-sm font-medium">
                                    First Name
                                </label>
                                <input className="bg-gray-100 text-gray-900 border border-gray-400 rounded p-2.5" type="text" placeholder="FirstName" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className="text-gray-900 text-sm font-medium">
                                    Last Name
                                </label>
                                <input className="bg-gray-100 text-gray-900 border border-gray-400 rounded p-2.5" type="text" placeholder="LastName" />
                            </div>
                        </div>

                        <div className='mt-4'>
                            <h1 className='text-sm font-medium mb-1'>Gender</h1>
                            <div className='flex items-center'>
                                <input id="radio" type="radio" value="" name="radio" className="w-4 h-4 text-gray-900 bg-gray-100 border-gray-300" />
                                <label className="ml-1 mr-2 text-sm font-medium text-gray-900">Male</label>

                                <input id="radio" type="radio" value="" name="radio" className="w-4 h-4 text-gray-900 bg-gray-100 border-gray-300" />
                                <label className="ml-1 mr-2 text-sm font-medium text-gray-900">Female</label>

                                <input id="radio" type="radio" value="" name="radio" className="w-4 h-4 text-gray-900 bg-gray-100 border-gray-300" />
                                <label className="ml-1 mr-2 text-sm font-medium text-gray-900">Others</label>
                            </div>
                        </div>

                        <div className='mt-4'>
                            <h1 className='text-sm font-medium mb-1'>Intrested</h1>
                            <div className='flex items-center'>
                                <input id="checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                                <label className="mx-2 text-sm font-medium text-gray-900">Coding</label>

                                <input id="checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                                <label className="mx-2 text-sm font-medium text-gray-900">Boxing</label>

                                <input id="checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                                <label className="mx-2 text-sm font-medium text-gray-900">Animation</label>

                                <input id="checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                                <label className="mx-2 text-sm font-medium text-gray-900">Gaming</label>
                            </div>
                        </div>

                        <div className='mt-4'>
                            <h1 className='text-sm font-medium mb-1'>Security Questions</h1>
                            <div>
                                <select className="w-full bg-gray-100 border border-gray-400 hover:border-gray-700 p-2.5 rounded shadow-lg">
                                    <option>What is your birth place?</option>
                                    <option>Who is your bestfriend?</option>
                                    <option>What is your birthdate?</option>
                                </select>
                                <div className='mt-2'>
                                    <input className="w-full bg-gray-100 text-gray-900 border border-gray-400 rounded p-2.5" type="text" placeholder="Write your answer" />
                                </div>
                            </div>
                        </div>

                        <div className='mt-4'>
                        <button className='w-fit bg-blue-600 rounded-2xl hover:bg-blue-700 text-white p-2.5'>
                            Submit
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Form
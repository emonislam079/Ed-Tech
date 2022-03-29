import React from 'react';
import { useForm } from 'react-hook-form';

const Admission = () => {
    const { register, handleSubmit } = useForm();
    return (
        <div className="d-flex justify-content-center align-items-center m-3 w-50 mx-auto">
            <div className="container row">

                <div className='mt-5 col-md-12 col-sm-12'>

                    <div className='row'>
                        <div className='col-md-12 mt-5'>
                            <form
                                onSubmit={handleSubmit()}
                                className='login-form shadow bg-white rounded text-left p-3'
                            >
                                <h2 className='font-weight-bold mb-3'>Apply for Admission</h2>
                                <div className='form-group mt-5'>
                                    <input
                                        className='form-control'
                                        name='name'
                                        type='text'
                                        placeholder='Student Name'
                                        {...register('name', { required: true })}
                                        required
                                    />
                                </div>

                                <div className='form-group mt-3'>
                                    <input
                                        className='form-control'
                                        name='parent_name'
                                        type='text'
                                        placeholder='Parent Name'
                                        {...register('parent_name', { required: true })}
                                        required
                                    />

                                </div>

                                <div className='form-group mt-3'>
                                    <input
                                        className='form-control'
                                        name='class'
                                        type='text'
                                        placeholder='Class'
                                        {...register('class', { required: true })}
                                        required
                                    />
                                </div>


                                <div className='form-group mt-3'>
                                    <input
                                        className='form-control'
                                        name='address'
                                        type='text'
                                        placeholder='Address'
                                        {...register('address', { required: true })}
                                        required
                                    />
                                </div>


                                <div className='form-group mt-3'>

                                    <input
                                        className='form-control'
                                        name='email'
                                        placeholder='Email'
                                        type='text'
                                        {...register('email', { required: true })}
                                        required
                                    />
                                </div>

                                <div className='form-group mt-3'>
                                    <button
                                        style={{ width: '100%' }}
                                        className='btn btn-primary'
                                        type='submit'
                                    >
                                        Apply for Admission
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>


        </div>
    );
};

export default Admission;
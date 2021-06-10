import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import validator from 'validator'
import { startRegisterWithEmailPasswordName } from '../../actions/auth'
import { setError, removeError } from '../../actions/ui'
import { useForm } from '../../hooks/useForms'

export const RegisterScreen = () => {


    const dispatch = useDispatch();
    const {msgError} = useSelector(st => st.ui);

    const [formValues, handleInputChange] = useForm(
        {
            name: 'rafael',
            email: 'ralf_raid@yopmail.com',
            password: '123456',
            confirmpassword: '123456',
        }
    )

    const { name, email, password, confirmpassword } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name));
        }
    }

    const isFormValid = () => {

        if (name.trim().length === 0) {

            dispatch(setError('name is required'))
            return false;

        } else if (!validator.isEmail(email)) {

            dispatch(setError('email is not valid'))
            return false;

        } else if (password !== confirmpassword || password.length < 5) {

            dispatch(setError('password should be at least 6 characters an match each other'))
            return false;

        }

        dispatch(removeError())
        return true;
    }


    return (
        <>
            <h3 className="auth__title"> Register Screen </h3>
            <form onSubmit={handleRegister} className="animate__animated animate__fadeIn  animate__faster  ">
                {
                    msgError &&
                    (
                        <div className="auth__alert-error">
                            {msgError}
                        </div>
                    )
                }
                <label htmlFor='name'>Name</label>
                <input className="auth__input" name='name' value={name} type='text' autoComplete='off' onChange={handleInputChange} />

                <label htmlFor='email'>Email</label>
                <input className="auth__input" name='email' value={email} type='text' autoComplete='off' onChange={handleInputChange} />

                <label htmlFor='password'>Password</label>
                <input className="auth__input" name='password' value={password} type='password' autoComplete='off' onChange={handleInputChange} />

                <label htmlFor='password'>Confirm password</label>
                <input className="auth__input" name='confirmpassword' value={confirmpassword} type='password' autoComplete='off' onChange={handleInputChange} />
                <br />
                <button className="btn btn-primary btn-block mb-5 mt-5">
                    Register
            </button>




                <Link className="link " to="/auth/login">
                    Already register?
            </Link>
            </form>
        </>
    )
}

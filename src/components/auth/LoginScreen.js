import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import validator from 'validator'


import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'
import { removeError, setError } from '../../actions/ui'
import { useForm } from '../../hooks/useForms'

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { msgError, loading } = useSelector(state => state.ui)
    

    const [formValues, handleInputChange] = useForm({ email: 'ralf_raid@yopmail.com', password: '123456' })
    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startLoginEmailPassword(email, password))
        }
    }

    const isFormValid = () => {
        if (!validator.isEmail(email)) {
            dispatch(setError('email is not valid'))
            return false
        } else if (password.length < 5) {

            dispatch(setError('password should be at least 6 characters'))
            return false;
        }

        dispatch(removeError())
        return true;

    }


    const handleGoogleLogin = () => { dispatch(startGoogleLogin()) }


    return (
        <>
            <h3 className="auth__title"> Login Screen </h3>
            <form onSubmit={handleLogin} className="animate__animated animate__fadeIn  animate__faster  ">
                {
                    msgError &&
                    (
                        <div className="auth__alert-error">
                            {msgError}
                        </div>
                    )
                }
                <label htmlFor='email'>Email</label>
                <input className="auth__input" name='email' type='text' autoComplete='off' value={email} onChange={handleInputChange} />

                <label htmlFor='password'>Password</label>
                <input className="auth__input" name='password' type='password' autoComplete='off' value={password} onChange={handleInputChange} />
                <br />
                <button className="btn btn-primary btn-block" disabled={loading}>
                    SigIn
                </button>



                <div className="auth__social-networks">
                    <p>Login with social netwoks</p>
                    <div className="google-btn" onClick={handleGoogleLogin}>
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link className="link" to="/auth/register">
                    Crate new acount
                </Link>
            </form>
        </>
    )
}

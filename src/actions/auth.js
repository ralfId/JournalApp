import { firebase, googleAuthProvider } from '../firebase/firebaseConfig'
import Swal from 'sweetalert2'

import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';
import { notesLogout } from './notes';


export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        dispatch(startLoading());

        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {

                dispatch(login(user.uid, user.displayName));

                dispatch(finishLoading());

            })
            .catch(e => {
                
                dispatch(finishLoading());

                Swal.fire({
                    icon: 'error',
                    title: '',
                    text: e.message,
                  })
            })
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {

        firebase.auth().createUserWithEmailAndPassword(email, password)
        
            .then(async ({ user }) => {

                await user.updateProfile({ displayName: name })
                dispatch(login(user.uid, user.displayName))

            }).catch(error =>{
                 Swal.fire('Error', error.message, 'error')
                })
    }
}


export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => { dispatch(login(user.uid, user.displayName)) })
    }
}


export const login = (uid, displayName) => (
    {
        type: types.login,
        payload: { uid, displayName }
    })

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout())
        dispatch(notesLogout());
    }
}
export const logout = (params) => ({ type: types.logout})


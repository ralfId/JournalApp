import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { useDispatch } from 'react-redux';

import { AuthRouter } from './AuthRouter'
import { JournalScreen } from '../components/journal/JournalScreen'
import { firebase } from '../firebase/firebaseConfig'
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';


export const AppRouter = () => {

    const dispatch = useDispatch()
    const [checking, setchecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {

                dispatch(login(user.uid, user.displayName))
                setIsLoggedIn(true);
                
                dispatch(startLoadingNotes(user.uid));

            } else { setIsLoggedIn(false) }
            setchecking(false)
        })

    }, [dispatch, setchecking, isLoggedIn])


    if (checking) {
        return (
            <h2>Wait...</h2>
        )
    }
    return (
        <>
            <Router>
                <div>
                    <Switch>
                        <PublicRoute path='/auth' isAuthenticated={isLoggedIn} component={AuthRouter} />
                        <PrivateRoute exact path='/' isAuthenticated={isLoggedIn} component={JournalScreen} />

                        <Redirect to='/auth/login' />

                    </Switch>
                </div>
            </Router>
        </>
    )
}

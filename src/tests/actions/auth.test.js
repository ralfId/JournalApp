import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk'

import { login, logout, startLoginEmailPassword, startLogout, startRegisterWithEmailPasswordName } from "../../actions/auth";
import { types } from "../../types/types";

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {};

let store = mockStore(initState)

describe('pruebas en actions/auth.js', () => {

    beforeEach(() => {
        store = mockStore(initState)
    })

    test('login y logout deben realizar las acciones', () => {

        const uid = 'sdsdwh65j65';
        const displayName = 'Rafael';

        const loginAction = login(uid, displayName);
        const logoutAction = logout()

        expect(loginAction.payload).toEqual({
            uid: uid,
            displayName: displayName
        })
        expect(logoutAction.type).toEqual(types.logout)
    })

    test('debe de realizar el logout', async () => {

        await store.dispatch(startLogout());
        const actions = store.getActions()

        expect(actions[0].type).toEqual(types.logout);
        expect(actions[1].type).toEqual(types.notesLogoutCleaningNotes);
    })

    test('debe de iniciar el startLoginEmailPassword', async () => {

        await store.dispatch(startLoginEmailPassword('ralf_raid@yopmail.com', '123456'))
        const actions = store.getActions();
        
        expect(actions[1]).toEqual({
            type: types.login,
            payload: {
                uid: '8SuboWOB76d2mzxRvJKyfJ7oa0l1',
                displayName: null
            }
        })
    })


});
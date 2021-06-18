import React from 'react';
import { mount } from "enzyme";
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

import '@testing-library/jest-dom';

import { firebase } from '../../firebase/firebaseConfig'

import { login } from '../../actions/auth';
import { AppRouter } from '../../routers/AppRouter';
import { act } from '@testing-library/react'




jest.mock('../../actions/auth', () => ({
    login: jest.fn()
}))

const middlewares = [thunk]
const mockStore = configureStore(middlewares)


const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        notes: [],
        active: null
    }

};

let store = mockStore(initState)
store.dispatch = jest.fn();



describe('pruebas en AppRouters.js ', () => {

    test('debe de llamar login() si estoy autenticado ', async () => {

        await act(async () => {

            const userCred = await firebase.auth().signInWithEmailAndPassword('ralf_raid@yopmail.com', '123456');
            console.log(userCred)
            const wrapper = mount(
                <Provider store={store}>
                    <MemoryRouter>
                        <AppRouter />
                    </MemoryRouter>
                </Provider>
            )
        })

        expect(login).toHaveBeenCalled()
        expect(login).toHaveBeenCalledWith("8SuboWOB76d2mzxRvJKyfJ7oa0l1", null)
    })


});
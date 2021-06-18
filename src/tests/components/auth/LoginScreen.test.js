import React from 'react';
import { Provider } from 'react-redux';
import { mount } from "enzyme";
import { MemoryRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import '@testing-library/jest-dom';

import { LoginScreen } from "../../../components/auth/LoginScreen";
import { startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth';

jest.mock('../../../actions/auth', () => ({
    startGoogleLogin: jest.fn(),
    startLoginEmailPassword: jest.fn()
}))

const middlewares = [thunk]
const mockStore = configureStore(middlewares)



const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    }

};

let store = mockStore(initState)
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <LoginScreen />
        </MemoryRouter>
    </Provider>
)

describe('puebas en LoginScreen.js', () => {

    beforeEach(() => {
        store = mockStore(initState)
        jest.clearAllMocks();
    })


    test('debe hacer match con el snapshop', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe disparar la accion de handleGoogleLogin', () => {

        wrapper.find('.google-btn').prop('onClick')();
        expect(startGoogleLogin).toHaveBeenCalled()
    });

    test('debe disparar el handleLogin con los argumentos y ejecutar startLoginEmailPassword()', () => {

        wrapper.find('form').prop('onSubmit')({ preventDefault() { } });
        expect(startLoginEmailPassword).toHaveBeenCalled()
        expect(startLoginEmailPassword).toHaveBeenCalledWith('ralf_raid@yopmail.com', '123456' )

    })



});
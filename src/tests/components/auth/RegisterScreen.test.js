import React from 'react';
import { Provider } from 'react-redux';
import { mount } from "enzyme";
import { MemoryRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import '@testing-library/jest-dom';
import { RegisterScreen } from '../../../components/auth/RegisterScreen';
import { types } from '../../../types/types';

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

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <RegisterScreen />
        </MemoryRouter>
    </Provider>
)
describe('pruebas en RegisterScreen.js', () => {

    test('debe hacer match con el snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });

    test('debe hacer el dispatch de la accion respectiva', () => {

        //get input value
        const emailField = wrapper.find('input[name="email"]');

        //simulate onChange event
        emailField.simulate('change', {
            target: {
                value: '',
                name: 'email'
            }
        });

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        const actions = store.getActions()
        
        expect(actions[0]).toEqual( { type: types.uiSetError, payload: 'email is not valid' })

    });

    test('debe de mostrar la caja de texto con el error ', () => {
        const initState = {
            auth: {},
            ui: {
                loading: false,
                msgError: 'email is not valid'
            }
        
        };
        
        let store = mockStore(initState)
        
        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <RegisterScreen />
                </MemoryRouter>
            </Provider>
            )

           const errorBoxExist = wrapper.find('.auth__alert-error').exists();
           const errorBoxText = wrapper.find('.auth__alert-error').text().trim()

           expect(errorBoxExist).toBe(true);
           expect(errorBoxText).toBe('email is not valid');
    })
    


});
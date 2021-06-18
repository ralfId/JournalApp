import React from 'react';
import { mount } from "enzyme";
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

import '@testing-library/jest-dom';

import { startLogout } from '../../../actions/auth';
import { startNewNote } from '../../../actions/notes';
import { SideBar } from '../../../components/journal/SideBar';


jest.mock('../../../actions/auth', () => (({
    startLogout: jest.fn()
})))
jest.mock('../../../actions/notes', () => ({
    startNewNote: jest.fn()
}))

const middlewares = [thunk]
const mockStore = configureStore(middlewares)


const initState = {
    auth: {
        uid: '1',
        displayName: 'Rafael'
    },
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

const wrapper = mount(
    <Provider store={store}>
        <SideBar />
    </Provider>
)


describe('pruebas en SideBar.js', () => {

    test('debe de mostrarse correctamente <SideBar/> ', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de llamar el startLogout()', () => {
       
        wrapper.find('button').prop('onClick')();
        expect(wrapper.find('button').exists()).toBe(true)

    })

    test('debe de llamar el startNewNote()', () => {

        wrapper.find('.journal__new-entry').prop('onClick')();
        expect(startNewNote).toHaveBeenCalled()
    })



});
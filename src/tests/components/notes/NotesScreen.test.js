import React from 'react';
import { mount } from "enzyme";
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

import '@testing-library/jest-dom';
import { NoteScreen } from '../../../components/notes/NoteScreen';
import { activeNote } from '../../../actions/notes';


jest.mock('../../../actions/notes', () => (({
    activeNote: jest.fn()
})));

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
        active: {
            id: 1,
            title: 'asd',
            body: '123'
        }
    }

};

let store = mockStore(initState)
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <NoteScreen />
    </Provider>
)


describe('pruebas en NotesScreen.js', () => {
    
    test('debe hacer match con el snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
    
    test('debe de llamarse activeNote', () => {
        
        wrapper.find('input[name="title"]').simulate('change',{
            target:{
                name: 'title',
                value:'new title'
            }
        })

        expect(activeNote).toHaveBeenCalled();
        expect(activeNote).toHaveBeenCalledWith(
            1,{
                body:'123',
                id:1,
                title:'new title'
            }
        );
    })
    
});
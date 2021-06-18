import React from 'react';
import { mount } from "enzyme";
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

import '@testing-library/jest-dom';
import { JournalEntry } from '../../../components/journal/JournalEntry';
import { activeNote } from '../../../actions/notes';


// jest.mock('.', () => (({
//     : jest.fn()
// })))


const middlewares = [thunk]
const mockStore = configureStore(middlewares)


const initState = {};

let store = mockStore(initState)
store.dispatch = jest.fn();

const note = {
    id:1,
    title: 'note title',
    body: 'note body',
    date: 0,
    imageUrl: 'https://someplace/image.png'
}

const wrapper = mount(
    <Provider store={store}>
        <JournalEntry {...note} />
    </Provider>
)


describe('pruebas en JournalEntry.js', () => {
    
    test('debe hacer match con el snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de activar la nota ', () => {
        
        wrapper.find('.journal__entry').prop('onClick')();

        expect(store.dispatch).toHaveBeenCalled()
        expect(store.dispatch).toHaveBeenCalledTimes(1)
        expect(store.dispatch).toHaveBeenCalledWith(activeNote(note.id, {...note}))
    })
    
    
});
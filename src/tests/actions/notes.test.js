import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk'


import { startLoadingNotes, startNewNote, startSavingNote, startUploadingImage } from '../../actions/notes'
import { db } from '../../firebase/firebaseConfig'
import { uploadImage } from '../../helpers/uploadImage'
import { types } from '../../types/types'

jest.mock('../../helpers/uploadImage', () => ({
    uploadImage: jest.fn(() => { return 'htttps://www.cloudinary.com/imageID/photo.png'; })
}));

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState =
{
    auth:
    {
        uid: 'TESTING',
    },
    notes: {
        active: {
            id: 'KWqFhJAMwhJ6UNtP0o6o',
            title: 'holwww',
            body: 'mundo'
        }
    }
}

let store = mockStore(initState)

describe('pruebas en notes.js', () => {

    beforeEach(() => {
        store = mockStore(initState);
    })

    test('debe de crear una nueva nota startNewNote()', async () => {

        await store.dispatch(startNewNote());
        const actions = store.getActions();

        expect(actions[0]).toEqual(
            {
                type: types.notesSetActiveNote,
                payload: {
                    "id": expect.any(String),
                    "date": expect.any(Number),
                    "title": "",
                    "body": "",
                }
            })

        expect(actions[1]).toEqual({
            type: types.notesAddNewNote,
            payload: {
                "id": expect.any(String),
                "date": expect.any(Number),
                "title": "",
                "body": "",
            }
        })

        //delete the new note created for testing
        // /TESTING/journal/notes/0dN3fhwhPWnpA5Zht5jp
        const noteId = actions[1].payload.id;
        await db.doc(`/TESTING/journal/notes/${noteId}`).delete();



    });

    // test('startSavingNote debe actualizar la nota', async () => {
    //     jest.setTimeout(10000)
    //     const note = {
    //         id: 'MDfYE1iKUAFpUcS2vNN8',
    //         title: 'ti..............................',
    //         body: 'body'
    //     }

    //     await store.dispatch(startSavingNote(note));

    //     const actions = store.getActions();

    //     expect(actions[0].type).toBe(types.notesRefrshUpdatedNote)

    //     const docRef = await db.doc(`/TESTING/journal/notes/${note.id}`).get();

    //     expect(docRef.data().title).toBe('ti..............................')

    // });


    // test('startLoadingNotes(uid) debe cargar las notas', async() => {


    //     jest.setTimeout(12000)
    //     await store.dispatch(startLoadingNotes())

    //     const df = await db.collection(`${initState.auth.uid}/journal/notes`).get();
    //     console.log(df)
    //     const actions = store.getActions();

    // });


    // test('startUploadingImage debe cargar un archivo ', async () => {

    //     const file = new File([], 'foto.png');
    //     await store.dispatch(startUploadingImage(file));
    //     // console.log(store.getState())

    //     const actions = store.getActions();

    //     const docRef  = await db.doc('/TESTING/journal/notes/KWqFhJAMwhJ6UNtP0o6o').get();
    //     expect(docRef.data().imageUrl).toBe('htttps://www.cloudinary.com/imageID/photo.png')

    // });


});
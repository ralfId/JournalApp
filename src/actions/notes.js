import Swal from "sweetalert2";


import { db } from "../firebase/firebaseConfig";
import { loadNotes } from "../helpers/loadNotes";
import { uploadImage } from "../helpers/uploadImage";
import { types } from "../types/types";

export const startNewNote = () => {

    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        console.log(uid)
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const docRef = await db.collection(`${uid}/journal/notes`).add(newNote)
        .catch(e=>{
            console.log(e.message)
            Swal.fire('Saved', e.message, 'success');
        });
        dispatch(activeNote(docRef.id, newNote));
        dispatch(addNewNote(docRef.id, newNote));
    }
}

export const activeNote = (id, note) => ({
    type: types.notesSetActiveNote,
    payload: { id, ...note }
})

export const addNewNote = (id, note) => ({
    type: types.notesAddNewNote,
    payload: {id, ...note}
})


export const startLoadingNotes = (id) => {
    return async (dispatch) => {
        const notes = await loadNotes(id);
        dispatch(setNotes(notes));
    }
}

export const setNotes = (notes) => ({
    type: types.notesLoadNotes,
    payload: notes
})

export const startSavingNote = (note) => {

    return async (dispatch, getState) => {

        const { uid } = getState().auth;

        if (!note.imageUrl) {
            delete note.imageUrl
        }

        const noteToFireStore = { ...note };
        delete noteToFireStore.id;

        await db.doc(`/${uid}/journal/notes/${note.id}`).update(noteToFireStore)
        .catch(e=>{
            console.log(e.message)
            Swal.fire('Saved', e.message, 'success');
        });
        dispatch(refreshUpdatedNote(note.id, noteToFireStore));


        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your note has been saved',
            text: `${note.title}`,
            showConfirmButton: false,
            timer: 1500
        })
    }
}

export const refreshUpdatedNote = (id, note) => ({
    type: types.notesRefrshUpdatedNote,
    payload: { id: id, note: { id, ...note } }
})

export const startUploadingImage = (file) => {
    return async (dispatch, getState) => {

        const activeNote = getState().notes.active;

        Swal.fire({
            title: 'Loading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            showConfirmButton: false,
            didOpen: () => { Swal.showLoading() }
        })
        const imageFileUrl = await uploadImage(file);

        activeNote.imageUrl = imageFileUrl;

        dispatch(startSavingNote(activeNote));

        Swal.close();

    }
}

export const startDeleteNote = (id) => {
    return async(dispath, getState)=>{
        
        const uid = getState().auth.uid;

        Swal.fire({
            title: 'Loading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            showConfirmButton: false,
            didOpen: () => { Swal.showLoading() }
        })
        await db.doc(`${uid}/journal/notes/${id}`).delete();
        
        dispath(deleteNote(id));
        
        Swal.close()
      
    }
}

export const deleteNote = (id) => ({
    type: types.notesDeleteNote,
    payload: {id}
})

export const notesLogout = () => ({
    type: types.notesLogoutCleaningNotes
})

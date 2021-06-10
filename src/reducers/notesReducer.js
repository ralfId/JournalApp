import { types } from "../types/types";

/*

const initialState = {
    notes: [],
    active: null
    --------------------------------------------
    active: {
        id: firebase-uid,
        title: '',
        body: '',
        imageUrl: '',
        date: 00/00/0000
    }

}
*/
const initialState = {
    notes: [],
    active: null
}
export const notesReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.notesSetActiveNote:
            return { ...state, active: { ...action.payload } }

        case types.notesAddNewNote:
            return { ...state, notes:[ action.payload, ...state.notes]}
            
        case types.notesLoadNotes:
            return { ...state, notes: [...action.payload] }
 
        case types.notesRefrshUpdatedNote:
            return { ...state, notes: state.notes.map(note => note.id === action.payload.id ? action.payload.note : note) }
    
        case types.notesDeleteNote:
            return{...state, active: null, notes: state.notes.filter(note => note.id !== action.payload.id)} ;
        case types.notesLogoutCleaningNotes:
            return {...state, active: null, notes: []}
        default:
            return state;
    }
}

import { types } from "../../types/types";

describe('pruebas en types.js', () => {
    const typesClone =  {
    
        //authReducer
        login: '[Auth] Login',
        logout: '[Auth] Logout',
    
        //uiReducer
        uiSetError: '[UI] Set Error',
        uiRemoveError: '[UI] Remove Error',
        uiStartLoading: '[UI] Start Loading',
        uiFinishLoading: '[UI] Finish Loading',
    
        //notesReducer
        notesAddNewNote: '[Notes] Add New Note',
        notesSetActiveNote: '[Notes] Set Active Note',
        notesLoadNotes: '[Notes] Load Notes',
        notesRefrshUpdatedNote: '[Notes] Refresh Updated Note',
        notesUpdateImageNote: '[Notes] Update Image Note',
        notesDeleteNote: '[Notes] Delete Note',
        notesLogoutCleaningNotes: '[Notes] Logout Cleaning Notes',
    }
    test('los types deben ser iguales', () => {
        
        expect(types).toEqual(typesClone)
    });
});
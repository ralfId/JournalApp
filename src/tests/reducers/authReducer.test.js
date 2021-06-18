import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe('pruebas en authReducer.js', () => {
    
    test('debe de hacer login correctamente', () => {
        const initialSate = {}
        const action = 
        {
            type: types.login, 
            payload: 
            { 
                uid: 123, 
                displayName: 'Rafael'
            }
        }

        const authR = authReducer(initialSate, action);

        expect(authR).toEqual( { 
            uid: 123, 
            name: 'Rafael'
        })

    });

    test('debe hacer logout correctamente', () => {
        
        const initialSate = 
        { 
            uid: 123, 
            name: 'Rafael'
        }
        const action =  { type: types.logout }

        const authR = authReducer(initialSate, action);

        expect(authR).toEqual({})
    });

    test('no debe realizar cambios en el state, auntReducer debe retornar su valor por defecto', () => {
        const initialSate = 
        { 
            uid: 123, 
            name: 'Rafael'
        }
        const action =  { type: 'dfdf' }

        const authR = authReducer(initialSate, action);

        expect(authR).toEqual(initialSate)
    });
});
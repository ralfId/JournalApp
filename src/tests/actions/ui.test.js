import { finishLoading, removeError, setError, startLoading } from "../../actions/ui";
import { types } from "../../types/types";

describe('pruebas en ui.js', () => {

    test('todas las acciones deben de funcionar', () => {

        const setErrorAction = setError('help')
        expect(setErrorAction).toEqual({
            type: types.uiSetError,
            payload: 'help'
        })

        const removeErrorAction = removeError();
        expect(removeErrorAction).toEqual({ type: types.uiRemoveError });

        const startLoadingAction = startLoading();
        expect(startLoadingAction).toEqual({ type: types.uiStartLoading });

        const finishLoadingAction = finishLoading();
        expect(finishLoadingAction).toEqual({type: types.uiFinishLoading});

    });
});
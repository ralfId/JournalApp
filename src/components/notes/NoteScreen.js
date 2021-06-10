import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleteNote } from '../../actions/notes'
import { useForm } from '../../hooks/useForms'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active: note } = useSelector(state => state.notes)
    const [formValues, handleInputChange, reset] = useForm(note);
    const { id, title, body } = formValues;

    const activeId = useRef(note.id);

    useEffect(() => {

        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id
        }
    }, [note, reset]);

    useEffect(() => {
        dispatch(activeNote(formValues.id, { ...formValues }))
    }, [formValues, dispatch]);

    const handleDeleteNote = () => {
        dispatch(startDeleteNote(id));
    }
    
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">

                <label className="mt-5 mb-1" htmlFor="title">Title</label>
                <input type="text"
                    placeholder="Title" name="title"
                    className="notes__title-input" value={title} onChange={handleInputChange} />

                <label className="mt-5 mb-1" htmlFor="body">Description</label>
                <textarea className="notes__textarea " name="body"
                    placeholder="What happened today?"
                    value={body} onChange={handleInputChange}></textarea>

                <div className="notes__image">
                    {
                        (note.imageUrl)
                        &&
                        (
                            <img src={note.imageUrl} alt="fantastic" />
                        )
                    }
                </div>
            </div>

            <button className="btn btn-danger" onClick={handleDeleteNote}>
                 Delete
            </button>

        </div>

    )
}

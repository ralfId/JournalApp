import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSavingNote, startUploadingImage } from '../../actions/notes';

export const NotesAppBar = () => {


    const dispatch = useDispatch();

    const { active } = useSelector(state => state.notes)

    const handleSaveNote = () => {
        // console.log(active)
        dispatch(startSavingNote(active));
    }

    const handleSelectImage = () => {
        document.querySelector('#fileSelector').click()
    }
    
    const handleOpenFileSelector = (e) => {
        const file  = e.target.files[0]
        dispatch(startUploadingImage(file));
    }
    

    return (
        <div className="notes__appbar ">
            <span> 28 de agosto de 2021</span>
            <input id='fileSelector' type="file" onChange={handleOpenFileSelector} style={{display: 'none'}}/>
            <div>
                <button className="btn" onClick={handleSelectImage}>
                    Picture
                </button>
                <button className="btn" onClick={handleSaveNote}>
                    Save
                </button>
            </div>
        </div>
    )
}

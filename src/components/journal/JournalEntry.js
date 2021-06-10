import React from 'react';
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const JournalEntry = ({ id, title, body, date, imageUrl }) => {

    const dispatch = useDispatch();
    const noteDate = moment(date);
    
    const handleSelectNote = () => {
        dispatch(activeNote(id, {title, body, date, imageUrl}))
    }
    

    return (
        <div className="journal__entry pointer animate__animated animate__fadeIn  animate__faster  " onClick={ handleSelectNote }>
            {
                (imageUrl) &&
                <div className="journal__entry-picture"
                    style={{
                        backgroundImage: `url(${imageUrl})`,
                        backgroundSize: 'cover'
                    }}>

                </div>
            }
            <div className="journal__entry-body">
                <div className="journal__entry-title">
                    {title}
                </div>
                <div className="journal__entry-content">
                    {body}
                </div>
            </div>
            <div className="journal__date">
                <span>{noteDate.format('dddd')}</span>
                <h4>{ noteDate.format('Do')}</h4>
            </div>
        </div>
    )
}

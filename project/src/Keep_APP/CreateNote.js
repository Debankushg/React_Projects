import React, { useState } from 'react';
// import Stack from '@mui/material/Stack';/
// import Button from '@material-ui/core/Button';
// import AddIcon from '@material-ui/core/Add';

const CreateNote = (props) => {

    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title: " ",
        content: " ",
    });

    const InputEvent = (event) => {

        // const value = event.target.value;
        // const name = event.target.name;

        const { name, value } = event.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,

            };
        });
    };

    const addEvent = (e) => {
        e.preventDefault();
        props.passNote(note);
        setNote({
            title: "",
            content: "",
        });
    };

    const expandIt = () =>{
        setExpand(true);
    };

    const btoNormal = () =>{
        setExpand(false);
    };

    return (
        <>
            <div className="main_note"  onDoubleClick={btoNormal} >
                <form>
                {expand? (<input type="text" name="title" value={note.title} onChange={InputEvent} placeholder = "Title" autoComplete='off' /> ): null}

                    <textarea cols="" rows="" name="content" value={note.content} onChange={InputEvent} placeholder="Write a note"  onClick={expandIt}  ></textarea>

                    {expand? (
                    <button onClick={addEvent} >
                        <span className='plus_sign'>+</span>
                    </button>) : null}

                </form>
            </div>
        </>
    )
}

export default CreateNote;


import React, { useState } from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState('');


    const handleUpClick = () => {
        console.log(text);
        let new_text = text.toUpperCase();
        setText(new_text);
    }

    const handleLoClick = () => {
        console.log(text.split(' ').length);
        let new_text = text.toLowerCase();
        setText(new_text);
    }
    const handleOnChange = (event) => {

        setText(event.target.value);
    }

    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <h1>{props.heading} </h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="5"></textarea>
                    <button className="btn btn-primary mt-3 mx-2" onClick={handleUpClick}>Convert to Upper</button>
                    <button className="btn btn-primary mt-3 mx-2" onClick={handleLoClick}>Convert to Lower</button>
                </div>
            </div>

            <div className="container my-2">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length - 1} words {text.length} characters </p>
            </div>

        </>
    )
}   

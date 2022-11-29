import React, { useState } from 'react'
// import PropTypes from 'prop-types'
// import axios from 'axios'


export default function TextForm(props) {
    const [text, setText] = useState('');    
    // const getAPI = ()  =>{

    //     fetch('http://127.0.0.1:8000/', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             data:text
    //         }),
    //         headers: {
    //             'Content-type': 'application/json; charset=UTF-8',
    //         },
    //     })
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));
    // }

    const handleChange = (event) => {       
        setText(event.target.value)
    }

    const handleUpClick = () => {
        let new_text = text.toUpperCase();
        setText(new_text);
    }

    const handleLoClick = () => {        
        let new_text = text.toLowerCase();
        setText(new_text);
    }
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // getAPI();
    //     axios.post('http://127.0.0.1:8000',text)
    //     .then(response =>{
    //         console.log(response)
    //     })
    //     .catch(error=>{
    //         console.log(error)
    //     })

    //     console.log(text)
    // }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark'?'white':'black'}}>
                <div className="mb-3">
                    <h1>{props.heading} </h1>
                    <textarea className="form-control" name='textdata'  value={text} style={{ backgroundColor: props.mode === 'dark'?'#020008':'white', color:props.mode === 'dark'?'white':'black'}} onChange={handleChange} id="exampleFormControlTextarea1" rows="5"></textarea>
                    <button className="btn btn-primary mt-3 mx-2" onClick={handleUpClick}>Convert to Upper</button>
                    <button className="btn btn-primary mt-3 mx-2" onClick={handleLoClick}>Convert to Lower</button>
                </div>
            </div>

            <div className="container my-2" style={{ color: props.mode === 'dark'?'white':'#020008'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length - 1} words {text.length} characters </p>
            </div>

            {/* <div className="container my-2" >
                <button className="btn btn-success" onSubmit={handleSubmit} onClick={getAPI}>
                    Fetch API
                </button>

            </div> */}
        </>
    )
}

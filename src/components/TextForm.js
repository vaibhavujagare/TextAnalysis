import React, { useState } from 'react'



export default function TextForm(props) {
    const [text, setText] = useState('');  

    const  getAPI = async () =>{ 
       const res = await fetch('http://127.0.0.1:8000/', {
            method: 'POST',
            body: JSON.stringify({
                data:text
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        return await res.json()
    }

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = await getAPI();
        setRes(data['handleUpClick'])
    }


    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
    }

    const handleExtraSpaces=()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(' '))
    }

    const [res, setRes] = useState('')
   
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark'?'white':'black'}}>
                <div className="mb-3">
                    <h1>{props.heading} </h1>
                    <textarea className="form-control" id='textdata'  value={text} style={{ backgroundColor: props.mode === 'dark'?'#020008':'white', color:props.mode === 'dark'?'white':'black'}} onChange={handleChange} rows="5"></textarea>
                    <button disabled={text.length===0} className="btn btn-primary mt-3 " onClick={handleUpClick}>Convert to Upper</button>
                    <button disabled={text.length===0} className="btn btn-primary mt-3 mx-2" onClick={handleLoClick}>Convert to Lower</button>
                    <button disabled={text.length===0} className="btn btn-primary mt-3 mx-2" onClick={handleCopy}>Copy Text</button>
                    <button disabled={text.length===0} className="btn btn-primary mt-3 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                </div>
            </div>

            <div className="container my-2" style={{ color: props.mode === 'dark'?'white':'#020008'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters </p>
            </div>

            <div className="container my-2" >
                <button className="btn btn-success" onClick={handleSubmit}>
                    Fetch API
                </button>

            </div>
            <h1>{res}</h1>
        </>
    )
}

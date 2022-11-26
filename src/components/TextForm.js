import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick= ()=>{
        console.log(text);
        let new_text=text.toUpperCase();
        setText( new_text);
    }
    const handleOnChange= (event)=>{
        console.log("onchanged");
        setText(event.target.value);
    }

    const [text,setText]=useState();
    return (
        <div className="container">
        <div className="mb-3">
            <h1>{props.heading} </h1>            
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="5"></textarea>
            <button className="btn btn-primary mt-3" onClick={handleUpClick}>Analyse</button>
        </div>
        </div>
    )
}   

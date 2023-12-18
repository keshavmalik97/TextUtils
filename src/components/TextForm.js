import { useState } from "react";
import React from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Capitlaized" ,"success")
    }
    const handleLowerClick =()=>{
        const newText = text.toLowerCase();
        setText(newText);
        
        props.showAlert("Text Lowerized" ,"success")
    }
    const handleClearClick =()=>{
        const newText = "";
        setText(newText);
        props.showAlert("Text Cleared" ,"success")
    }
    const handleCopyClick =()=>{
        console.log(document.getElementById("myBox"));
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied" ,"success")
        
    }

    const handleOnChange =(event)=>{
        setText(event.target.value);
    }

    const [text,setText] = useState('Enter your text here');



    return (

        <>
        <div className={`text-${props.theme === 'dark' ? 'dark' : 'light'} `} style={{height: "92vh" , backgroundColor:props.theme === 'dark'?'white':props.theme==='light'?'black':props.theme}} >
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control  border border-secondary"  style={{color:props.theme === 'dark'?'white':'black', backgroundColor:props.theme === 'dark'?'#394029':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
            </div>
            <div className="container my-3 " >
                <h1>Your Text Summary</h1>
                <p>{(text.length===0)?0:text.split(' ').length} words,{text.length} charcaters</p>
                <p>{.008*text.split(' ').length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
        
        </>
    );
}

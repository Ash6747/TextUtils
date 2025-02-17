import React, { useState } from 'react'

export default function Textarea(props) {
    const [text, setText] = useState('');
    // const [count, setCount] = useState(0);


    const handleClearText = (event) =>{
        setText('');
        props.showAlert("Text is cleared", "info");
    }

    const handleSpacesText = (event) =>{
        let newText = text.split(/[ ]+/);
        newText = newText.join(" ");
        setText(newText);
        props.showAlert("Extra spaces removed from the text", "info");
    }

    const handleCopyText = (event) =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text is copied to clipboard", "info");
    }

    const handleUpText = (event) =>{
        // let newText = text.toUpperCase();
        setText(text.toUpperCase());
        props.showAlert("Text is converted to uppercase", "info");
    }

    const handleLoText = (event) =>{
        setText(text.toLowerCase());
        props.showAlert("Text is converted to lowercase", "info");
    }

    const handleText = (event) =>{
        const inputText = event.target.value;

        // Allow input only if it's within the 100-character limit
        if (inputText.length <= 100) {
            setText(inputText);
            // setCount(inputText.length);
        }
    }
  return (
    <>
        <h1 className="my-2">Limit Text in box</h1>
        <div className="form-floating">
            <textarea 
            className={`form-control text-bg-${props.mode}`}
            placeholder="Leave a comment here" 
            id="floatingTextarea2 textBox" 
            value={text}
            onChange={handleText}
            style={{height: "100px"}}
            ></textarea>
            <label className={`${props.mode}`} htmlFor="floatingTextarea2">Comments</label>
            {/* .split(" ") it will work for spaces but not for new line(Enter) Instead of this use 
            regex(regular expresion) (/\s+/)  \s this is for both new line and spaces, + is for more than one 
            and to use this expresion use //*/}
            <p>{text.length}/100, Words count = {text.split(/\s+/).filter((element)=>{
                return element.length !== 0}).length}</p>

            <button disabled={text.length === 0} className="button-85 m-3" onClick={handleUpText} >Make Uppercase</button>
            <button disabled={text.length === 0} className="button-85 m-3" onClick={handleLoText} >Make Lowercase</button>
            <button disabled={text.length === 0} className="button-85 m-3" onClick={handleCopyText} >Copy Text</button>
            <button disabled={text.length === 0} className="button-85 m-3" onClick={handleSpacesText} >Remove Extra Spaces</button>
            <button disabled={text.length === 0} className="button-85 m-3" onClick={handleClearText} >Clear Text</button>
        </div>
        <h2>Preview</h2>
        <p>{text.length === 0 ? "Nothing to Preview" : text}</p>
    </>
  )
}

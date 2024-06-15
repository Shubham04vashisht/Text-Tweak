import React, { useState } from "react";

export default function Txtform(props) {

  const [text, setText] = useState("");

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied ","Success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    
    setText(newText);
    props.showAlert("Text converted to uppercase ","Success");
  };
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to lowercase ","Success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed","Success"); 
  };
  return (
    <div className="container my-3"> 
      <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
      <div className="form-floating my-3" 
       >
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          onChange={handleOnChange}
          style={{ height: "250px",
        color:props.mode==='dark'?'white':'black' ,backgroundColor:props.mode==='dark'?'#252732c4':'white'}} 
        ></textarea>
        <label htmlFor="floatingInput">Write your text here</label>
      </div>
      <button type="button" className={`btn btn-${props.mode} mx-1 my-2` } onClick={handleUpClick}>
        Convert To UpperCase
      </button>
      <button className= {`btn btn-${props.mode} mx-1 my-2`} onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>
      <button
        type="button"
        className={`btn btn-${props.mode} mx-1 my-2`} 
        onClick={handleDownClick}
      >
        Convert To LowerCase
      </button>
      <button className={`btn btn-${props.mode} mx-1 my-2`}  onClick={handleCopy}>
        Copy Above Text 
      </button>
      <div className="my-4" style={{color:props.mode==='dark'?'white':'black'}} >
        <h3>Your Text Summary</h3>
        <div>
          {text.split(" ").length} Words and {text.length} characters.
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import React from "react";

function TextForm() {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleUpperCaseClick = () => {
    setText(text.toUpperCase());
  };

  const handleLowerCaseClick = () => {
    setText(text.toLowerCase());
    };
    
  const handleInverseClick = () => {
      let newText = text.split('')
      for (let letter = 0; letter < newText.length; letter++) {
          if (newText[letter].toUpperCase() === newText[letter]) {
            newText[letter] = newText[letter].toLowerCase()
        } else {
              newText[letter] = newText[letter].toUpperCase()
          }
      }
      setText(newText.join(''))
  };

  return (
    <>
      <div className="mb-3">
        <h1>Enter Text to Analyze</h1>
        <textarea
          className="form-control"
          placeholder="Enter Text Here"
          id="myBox"
          value={text}
          onChange={handleOnChange}
          rows="8"
        ></textarea>
      </div>
      <div className="container">
        <button className="btn btn-primary" onClick={handleUpperCaseClick}>
          UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowerCaseClick}>
          LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleInverseClick}>
          Inverse
        </button>
          </div>
          <div className="container my-1">
              <h2>Text Summary</h2>
              <p>
                  {text.split(" ").length} words and {text.length} characters
              </p>
              <p>
                  {text.split(" ").length * 0.008} minutes read
              </p>
          </div>
    </>
  );
}

export default TextForm;

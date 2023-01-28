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
          Change to UpperCase
        </button>
      </div>
    </>
  );
}

export default TextForm;

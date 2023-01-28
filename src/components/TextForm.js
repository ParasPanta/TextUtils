import { useState } from "react";
import React from "react";

function TextForm() {
  const [text, setText] = useState("");

    const handleOnChange = (e) => {
        setText(e.target.value);
  };

  return (
    <>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Enter Text Here"
          id="myBox"
          value={text}
          onChange={handleOnChange}
          rows="8"
        ></textarea>
      </div>
    </>
  );
}

export default TextForm;

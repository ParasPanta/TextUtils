import React from "react";

function TextForm() {
  return (
    <>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Enter Text Here"
          id="myBox"
          rows="8"
        ></textarea>
      </div>
    </>
  );
}

export default TextForm;

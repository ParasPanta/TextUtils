import { useState } from "react";
import React from "react";

function TextForm() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [countVowCons, setCountVowCons] = useState([0, 0]);

  const handleOnChange = (e) => {
    setText(e.target.value);
    countWords(e.target.value);
    setCountVowCons(handleCountVowCons(e.target.value));
  };

  const countWords = (text) => {
    let newText = text.split(" ").filter(removeSpaces);
    setWordCount(newText.length);
  };

  const removeSpaces = (word) => {
    if (word !== "") {
      return word;
    }
  };

  const handleUpperCaseClick = () => {
    setText(text.toUpperCase());
  };

  const handleLowerCaseClick = () => {
    setText(text.toLowerCase());
  };

  const handleInverseClick = () => {
    let newText = text.split("");
    for (let letter = 0; letter < newText.length; letter++) {
      if (newText[letter].toUpperCase() === newText[letter]) {
        newText[letter] = newText[letter].toLowerCase();
      } else {
        newText[letter] = newText[letter].toUpperCase();
      }
    }
    setText(newText.join(""));
  };

  const handleFirstCapsClick = () => {
    let newText = text.split(" ");
    for (let letter = 0; letter < newText.length; letter++) {
      newText[letter] =
        newText[letter].charAt(0).toUpperCase() + newText[letter].slice(1);
    }
    setText(newText.join(" "));
  };

  const handleGetParaClick = () => {
    const para =
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti aspernatur reprehenderit ratione amet illum non praesentium, quos inventore quia eligendi ad cum nemo voluptatum nihil sapiente distinctio? Possimus voluptates aliquam quasi ullam dolor facere atque facilis quod eum! Ipsam blanditiis voluptatibus, in hic dolorum quam praesentium magni tempore magnam aspernatur.";

    setText(para);
    setWordCount(50);
    setCountVowCons([142, 177]);
  };

  const handleClearTextClick = () => {
    setText("");
    setWordCount(0);
    setCountVowCons([0, 0]);
  };

  const handleCountVowCons = (text) => {
    let newText = text.replace(/[^a-z]/g, "");
    let arrVowels = newText.replace(/[^aeiou]/g, "");
    let arrConsonants = newText.replace(/[aeiou]/g, "");
    return [arrVowels.length, arrConsonants.length];
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
        <button className="btn btn-primary mx-1" onClick={handleGetParaClick}>
          Get Para
        </button>
        <button className="btn btn-primary mx-1" onClick={handleUpperCaseClick}>
          UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowerCaseClick}>
          LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleInverseClick}>
          Inverse
        </button>
        <button className="btn btn-primary mx-1" onClick={handleFirstCapsClick}>
          First Caps
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearTextClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-1">
        <h2>Text Summary</h2>
        <p>
          {wordCount} words and {text.length} characters
        </p>
        <p>
          {Math.floor((wordCount * 0.48) / 60)} minutes and{" "}
          {Math.floor((wordCount * 0.48) % 60)} seconds read
        </p>
        <p>
          {countVowCons[0]} vowels and {countVowCons[1]} consonants
        </p>
      </div>
    </>
  );
}

export default TextForm;

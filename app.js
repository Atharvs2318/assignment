import React, { useState, useEffect } from 'react';
import './App.css'; // import your css here


function App() {
  const [data, setData] = useState({});
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [leftsideText, setleftsideText] = useState("");
  const [rightsideText, setrightsideText] = useState("");

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response =>response.json()).then(xx => setData(xx[0]))}, []);


  const handleTopText = () => {
    setTopText(prompt("Enter text for top of image: "));
  }

  const handleBottomText = () => {
    setBottomText(prompt("Enter text for bottom of image: "));
  }

  const handleleftsideText = () => {
    setleftsideText(prompt("Enter text for left side of image: "));
  }
  const handlerightsideText = () => {
    setrightsideText(prompt("Enter text for right side of image: "));
  }

  return (
    <div className="container">
    <div className="post-container">
      <img src={data.url} alt="Image from API" className="post-image" width="500" height="300" />
      {/* write the custom text on image */}

      {topText && <p className="top-text">{topText}</p>}
      {bottomText && <p className="bottom-text">{bottomText}</p>}
      {leftsideText && <p className="left-side">{leftsideText}</p>}
      {rightsideText && <p className="right-side">{rightsideText}</p>}

      <div className = "text-display-container">
        <p className = "comment-container"> {data.id} </p>
    </div>
  
    </div>  
   
    <div className="button=container">
    
      <div className="text-input-container">
        <button onClick={handleTopText}>Add Top Text</button>
        <button onClick={handleBottomText}>Add Bottom Text</button>
        <button onClick={handlerightsideText}>Add right Text</button>
        <button onClick={handleleftsideText}>Add left Text</button>

       
      </div>
    </div>
    </div>
    
  );
}

export default App;

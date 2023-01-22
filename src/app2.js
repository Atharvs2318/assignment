import React, { useState, useEffect } from 'react';
import './App.css'; // import your own css here
import 'bootstrap/dist/css/bootstrap.css'; 

function App() {
  const [data, setData] = useState({});
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [sideText, setSideText] = useState("");
  const [side, setSide] = useState("left");

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response =>response.json()).then(xx => setData(xx[0].url))}, []);

  const handleTopText = () => {
    setTopText(prompt("Enter text for top of image: "));
  }

  const handleBottomText = () => {
    setBottomText(prompt("Enter text for bottom of image: "));
  }

  const handleSideText = () => {
    setSideText(prompt("Enter text for side of image: "));
  }

  return (
    <div className="container">
      <div className="card post-container">
        <img src={data} alt="Image from API" className="card-img-top post-image" />
        <div className="card-body">
          {topText && <p className="card-text top-text">{topText}</p>}
          {bottomText && <p className="card-text bottom-text">{bottomText}</p>}
          {sideText && side === "left" && <p className="card-text side-text left-side">{sideText}</p>}
          {sideText && side === "right" && <p className="card-text side-text right-side">{sideText}</p>}
          <div className="text-input-container">
            <button onClick={handleTopText} className="btn btn-primary">Add Top Text</button>
            <button onClick={handleBottomText} className="btn btn-primary">Add Bottom Text</button>
            <button onClick={handleSideText} className="btn btn-primary">Add Side Text</button>
            <select className="form-control" onChange={(e) => setSide(e.target.value)}>
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './RoomMaker.css';

const RoomMaker = () => {
  const navigate = useNavigate();
  const [width, setWidth] = useState<number>(Math.round(window.innerWidth * 0.75));
  const [height, setHeight] = useState<number>(Math.round(window.innerHeight * 0.75));

  const [singlePlayer, setSinglePlayer] = useState<boolean>(false);

  const backToLogin = () => {
    navigate("/login");
  };

  const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(Number(event.target.value));
  };

  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(Number(event.target.value));
  }

  const createRoom = () => {
    const str1 = (width*4).toString().padStart(4, '0');
    const str2 = (height*4).toString().padStart(4, '0');


    const random = Math.floor(1000 + Math.random() * 9000).toString();

    navigate(`/game?room=${window.btoa(str1).replace(/=+$/, '')}-${window.btoa(str2).replace(/=+$/, '')}-${window.btoa(random).replace(/=+$/, '')}`)
  }
  return (
    <div>
      <h1>Room creator</h1>

      <div className="slider-container">
        <span className="slider-value">Single Player: {singlePlayer ? 'On' : 'Off'}</span>
        <label className="switch">
          <input
        type="checkbox"
        checked={singlePlayer}
        onChange={(e) => setSinglePlayer(e.target.checked)}
          />
          <span className="switch-slider"></span>
        </label>

        <span className="slider-value">Width: {width}</span>

        <input
          type="range"
          id="slider"
          min={Math.round(window.innerWidth * 0.5)}
          max={Math.round(window.innerWidth)}
          value={width}
          onChange={handleWidthChange}
          className="slider"
        />

        <span className="slider-value">Height: {height}</span>

        <input
          type="range"
          id="slider"
          min={Math.round(window.innerHeight * 0.5)}
          max={Math.round(window.innerHeight)}
          value={height}
          onChange={handleHeightChange}
          className="slider"
        />
      </div>
      <div className="button-container">
        <button onClick={createRoom}>Create Room</button>
        <button onClick={backToLogin}>Back to room login</button>
      </div>
    </div>
  );
};

export default RoomMaker;

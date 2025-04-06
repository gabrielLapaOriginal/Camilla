import { useState } from 'react';
import '../App.css';

export default function FirstPage({ onSimClick }) {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const fugir = () => {
    const randomTop = Math.floor(Math.random() * 400) - 200;
    const randomLeft = Math.floor(Math.random() * 400) - 200;
    setPosition({ top: randomTop, left: randomLeft });
  };

  return (
    <>
      <div className="content">
        <div className="box">
          <h1>Primeiro o mais importante</h1>
          <p>Você ainda me ama ?</p>

          <div className="button-group">
            <button id="sim" onClick={onSimClick}>Sim</button>
            <button
              style={{ transform: `translate(${position.left}px, ${position.top}px)` }}
              onMouseOver={fugir}
              id="nao"
            >
              Não
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

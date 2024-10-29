
import './App.css'
import {useEffect, useRef, useState} from "react";


function App() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isMuted, setIsMuted] = useState(false);

    const handleMuteToggle = () => {
        if (audioRef.current) {
            audioRef.current.muted = !audioRef.current.muted;
            setIsMuted(audioRef.current.muted);
        }
    };
    useEffect(() => {
        const handleUserInteraction = () => {
            if (audioRef.current) {
                audioRef.current.play().catch(error => {
                    console.error('Error attempting to play audio:', error);
                });
            }
            // Remove the event listener once interaction occurs
            window.removeEventListener('click', handleUserInteraction);
        };

        // Add an event listener to play audio after the first user interaction
        window.addEventListener('click', handleUserInteraction);

        return () => {
            window.removeEventListener('click', handleUserInteraction);
        };
    }, []);
  return (
      <>
          <button onClick={handleMuteToggle} className={"halloween-button"}>
              {isMuted ? '🔇': '🔊'}
          </button>
          <div className="card">
              <div className="outside">
                  <div className="front">
                      <div className="content">
                          <p className="animatedText">Happy Halloween</p>
                          <img src="./assets1.png" alt="Halloween image"/>
                      </div>
                  </div>
                  <div className="back"></div>
              </div>
              <div className="inside">
                  <div className={"content"}>
                      <p>
                          <span>🦇 Jules,</span> <br/>
                          🎃 I hope you have a spook-tacular Halloween and an amazing weekend in Sevilla! 🧙‍♀️ <br/>
                          Can’t wait to explore your neighborhood and see your life in Madrid very soon! Love,<br/>
                          <span>Emma 😘💀👻</span>
                      </p>

                  </div>
              </div>
          </div>
          <audio ref={audioRef} src="./spooky.mp3" preload="auto"/>
      </>
  )
}

export default App

import React, { useState, useEffect } from 'react';
import './welcome.css'
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const [showMessage, setShowMessage] = useState(true);
  const messageParts = [
    { text: "Welcome", className: "food" },
    { text: "to", className: "to" },
    { text: "FoodMood World!😋"}
  ];
  const navigate = useNavigate();

  // Speech synthesis effect
  useEffect(() => {
    if (showMessage) {
      messageParts.forEach((part, index) => {
        const utterance = new SpeechSynthesisUtterance(part.text);
        speechSynthesis.speak(utterance);
      });
    }
  }, [showMessage, messageParts]);

  // Hide the message and redirect after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
     navigate('/home');
    }, 7000);

    return () => clearTimeout(timer);
  }, [navigate]);


  return (
        <div className="welcome-container">
          {showMessage && <h1 className="welcome-message">
            {messageParts.map((part,index)=>(
              <span key={index} className={part.className}>
              {part.text}
              {index < messageParts.length - 1 && <br />}
            </span>
            ))}</h1>}
          <div className="fruits" aria-hidden="true">
            {Array.from({ length: 50 }).map((_, index) => (
              <div key={index} className="fruit">
                {['🫧','🫧','🤍','🫧','🫧','🤍'][index % 5]} {/* Multiple fruits */}
              </div>
            ))}
          </div>
        </div>
      );
    };
export default WelcomePage;












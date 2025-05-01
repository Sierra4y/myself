import React, { useEffect, useState } from 'react';
import bubbleImg from '../images/bubble.png';
import '../App.css';
import './bubble.css';

const Bubble = ({ className }) => {
  const [isRemoved, setIsRemoved] = useState(false);
  const [popStyle, setPopStyle] = useState(null);
  const [bubbleVisible, setBubbleVisible] = useState(true);

  const handleClick = (e) => {
    if (isRemoved) return;

    const x = e.clientX;
    const y = e.clientY;

    setBubbleVisible(false);
    setPopStyle({ left: x, top: y });

    setTimeout(() => {
      setIsRemoved(true);
      setPopStyle(null);
    }, 400);
  };

  useEffect(() => {
    if (isRemoved) {
      const timer = setTimeout(() => {
        setIsRemoved(false);
        setBubbleVisible(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isRemoved]);

  const handleAnimationEnd = () => {
    if (!isRemoved) {
      setIsRemoved(true);
    }
  };

  if (isRemoved) return null;

  return (
    <>
      <img
        src={bubbleImg}
        className={`${className}`}
        alt="bubble"
        onClick={handleClick}
        onAnimationEnd={handleAnimationEnd}
        style={{
          pointerEvents: "auto",
          opacity: bubbleVisible ? 1 : 0,
          transition: "opacity 0s",
        }}
      />
      {popStyle && (
        <span className="pop-effect" style={popStyle}></span>
      )}
    </>
  );
};

export default Bubble;

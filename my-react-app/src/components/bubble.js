import React, { useEffect, useState } from "react";
import bubbleImg from "../images/bubble.png";
import "../App.css";

const Bubble = ({ className }) => {
  const [isRemoved, setIsRemoved] = useState(false);
  const [popStyle, setPopStyle] = useState(null);
  const [show, setShow] = useState(true);
  const [bubbleVisible, setBubbleVisible] = useState(true);

  const handleClick = (e) => {
    if (isRemoved) return;

    const x = e.clientX;
    const y = e.clientY;

    setBubbleVisible(false);

    setPopStyle({
      left: x,
      top: y,
    });

    setTimeout(() => {
      setIsRemoved(true);
      setShow(false);
      setPopStyle(null);
    }, 400);
  };

    useEffect(() => {
      if (!show) {
        const timer = setTimeout(() => {
          setIsRemoved(false);
          setShow(true);
          setBubbleVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
      }
    }, [show]);

  if (isRemoved) return null;

  return (
    <>
      <img
        src={bubbleImg}
        className={`${className}`}
        alt="bubble"
        onClick={handleClick}
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

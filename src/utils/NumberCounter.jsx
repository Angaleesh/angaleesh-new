import React, { useEffect, useRef } from "react";

export function NumberCounter({ endNumber, speed = 10 }) {
  const numberRef = useRef(null);
  function increaseNumberAnimation(element, endNumber, speed = 10) {
    if (!element) return;

    const animationRunning = JSON.parse(
      element.dataset.animationRunning ?? false
    );

    if (animationRunning) return;

    element.dataset.animationRunning = true;

    incNbrRec(0, endNumber, element, speed);
  }

  function incNbrRec(currentNumber, endNumber, element, speed) {
    if (currentNumber <= endNumber) {
      element.innerHTML = currentNumber;
      setTimeout(function () {
        incNbrRec(currentNumber + 1, endNumber, element, speed);
      }, speed);
    } else {
      element.dataset.animationRunning = false;
    }
  }

  useEffect(() => {
    if (numberRef.current) {
      increaseNumberAnimation(numberRef.current, endNumber, speed);
    }
  }, [endNumber, speed]); 
  return (
    <span ref={numberRef} data-animation-running="false">
      0
    </span>
  );
}

export default NumberCounter;

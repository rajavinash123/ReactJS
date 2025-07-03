import React, { useState, useEffect } from 'react';

const TimerComp = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("setIntervival execute ")
      setTimer(prevSecond => prevSecond + 1);
    }, 1000);

    // Cleanup function to clear interval on unmount
    return () => {
      console.log("time to stop ")
      clearInterval(intervalId);
    };
  }, []);
  //run only 1st intervial

  return (
    <div>
      <h1>Second: {timer}</h1>
    </div>
  );
};

export default TimerComp;

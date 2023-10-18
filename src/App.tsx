import { useState } from 'react';
import './App.css';
import LotteryBall from '../LotteryBall/LotteryBall.tsx';

function App() {
  const [lotteryBall, setLotteryBall] = useState([
    { number: 5 },
    { number: 11 },
    { number: 16 },
    { number: 23 },
    { number: 32 },
  ]);

  const generateNumbers = () => {
    const numbersStorage: [number] = [];
    while (numbersStorage.length < 5) {
      const randomNumber: number = Math.floor(Math.random() * 28) + 5;
      if (numbersStorage.indexOf(randomNumber) === -1) {
        numbersStorage.push(randomNumber);
      }
    }
    console.log(numbersStorage);
    setLotteryBall([
      { number: numbersStorage[0] },
      { number: numbersStorage[1] },
      { number: numbersStorage[2] },
      { number: numbersStorage[3] },
      { number: numbersStorage[4] },
    ]);
  };

  return (
    <div className="lottery">
      <div className="balls">
        <LotteryBall number={lotteryBall[0].number}></LotteryBall>
        <LotteryBall number={lotteryBall[1].number}></LotteryBall>
        <LotteryBall number={lotteryBall[2].number}></LotteryBall>
        <LotteryBall number={lotteryBall[3].number}></LotteryBall>
        <LotteryBall number={lotteryBall[4].number}></LotteryBall>
      </div>
      <button onClick={generateNumbers}>Try!</button>
    </div>
  );
}

export default App;

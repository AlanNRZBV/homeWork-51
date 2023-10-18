import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LotteryBall from "../LotteryBall/LotteryBall.tsx";

function App() {

  return (
    <div className="lottery">
      <div className="balls">
        <LotteryBall number={5}></LotteryBall>
        <LotteryBall number={11}></LotteryBall>
        <LotteryBall number={16}></LotteryBall>
        <LotteryBall number={23}></LotteryBall>
        <LotteryBall number={32}></LotteryBall>
      </div>
      <button>Try!</button>
    </div>
  )
}

export default App

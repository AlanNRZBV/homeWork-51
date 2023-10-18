import { useState } from 'react'
import './App.css'
import LotteryBall from "../LotteryBall/LotteryBall.tsx";

function App() {
  const [lotteryBall, setLotteryBall] = useState([
    {number: 5},
    {number: 11},
    {number: 16},
    {number: 23},
    {number: 32}
  ])

  const generateNumbers = ()=>{
    console.log('Test')
  }

  return (
    <div className="lottery">
      <div className="balls">
        <LotteryBall number={5}></LotteryBall>
        <LotteryBall number={11}></LotteryBall>
        <LotteryBall number={16}></LotteryBall>
        <LotteryBall number={23}></LotteryBall>
        <LotteryBall number={32}></LotteryBall>
      </div>
      <button onClick={generateNumbers}>Try!</button>
    </div>
  )
}

export default App

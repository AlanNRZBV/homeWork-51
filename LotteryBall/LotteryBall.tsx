interface Props {
    number: number;
}

const LotteryBall: React.FC<Props> = ({number}) => {
  return (
    <div className="ball">
      <span className="number">{number}</span>
    </div>
  );
  
};
export default LotteryBall
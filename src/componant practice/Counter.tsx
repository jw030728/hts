import { useState, MouseEvent } from 'react';
//+누르면 숫자 +되는거

type CounterType = {
  defaultCount: number;
};

const Counter = () => {
  //const { defaultCount } = props; //디스트럭처링 defaultCount란 변수에담김
  const [count, setCount] = useState<number>(0); //useState 변수값반환과 함수반환
  //setCount 값 바꿔주는거  const 괄호안에 이름만든거임
  //클릭하면 count+1
  const increaseCount = (event: MouseEvent<HTMLButtonElement>) => {
    setCount(count + 1);
  };
  const decreaseCount = (event: MouseEvent<HTMLButtonElement>) => {
    setCount(count - 1);
  };
  return (
    <section>
      <section>{count}</section>
      <section>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
      </section>
    </section>
  );
};

export default Counter;

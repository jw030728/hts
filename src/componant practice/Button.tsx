type ButtonType = {
  name: string;
  callback: (name: string) => void;
};

const Button = (props: ButtonType) => {
  const { name, callback } = props; //디스트럭처링
  return <button onClick={() => callback(name)}>{name}</button>; //callback 함수만 쓰면 바로실행되서 빈함수로 감싸줌()=>
};

export default Button;

type PadType = {
  keyName: string;
  callback: (keyName: string) => void;
};

const Pad = (props: PadType) => {
  const { keyName, callback } = props;
  return (
    <button
      style={{
        width: '50px',
        height: '50px',
        fontSize: '15px',
        borderRadius: '10px',
      }}
      onClick={() => callback(keyName)}
      //callback 함수만 쓰면 바로실행되서 빈함수로 감싸줌()=>
    >
      {keyName}
    </button>
  );
};

export default Pad;

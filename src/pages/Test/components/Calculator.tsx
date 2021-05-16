import React, { ChangeEvent, useState } from 'react';
import Pad from './Pad';

const Calculator = () => {
  const [key, setKey] = useState('');
  const [expression, setExpression] = useState('');

  const updateKey = (newKey: string) => {
    if (newKey === 'reset') {
      setExpression('');
    } else if (newKey != '=') {
      setExpression(expression + newKey);
    } else if (newKey === '=') {
      //eslint -disable-next-line no-eval
      setExpression(eval(expression));
    }
    setKey(newKey);
  };

  return (
    <section>
      <section>
        <input type="text" value={expression} />
      </section>
      <section>
        <Pad keyName="7" callback={updateKey} />
        <Pad keyName="8" callback={updateKey} />
        <Pad keyName="9" callback={updateKey} />
      </section>
      <section>
        <Pad keyName="4" callback={updateKey} />
        <Pad keyName="5" callback={updateKey} />
        <Pad keyName="6" callback={updateKey} />
      </section>
      <section>
        <Pad keyName="1" callback={updateKey} />
        <Pad keyName="2" callback={updateKey} />
        <Pad keyName="3" callback={updateKey} />
      </section>
      <section>
        <Pad keyName="reset" callback={updateKey} />
        <Pad keyName="0" callback={updateKey} />
      </section>
      <section>
        <Pad keyName="+" callback={updateKey} />
        <Pad keyName="-" callback={updateKey} />
        <Pad keyName="*" callback={updateKey} />
        <Pad keyName="/" callback={updateKey} />
        <Pad keyName="=" callback={updateKey} />
      </section>
    </section>
  );
};

export default Calculator;

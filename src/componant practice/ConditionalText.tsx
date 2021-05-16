import { useState, ChangeEvent, ChangeEventHandler } from 'react';

const ConditionalText = () => {
  const [text, setText] = useState<string>('');

  const updateText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);

    // if (newText.length > 5) {
    //   setText(newText);
    // } else {
    //   setText('');
    // }
  };

  return (
    <section>
      <input type="text" onChange={updateText} />
      <article> {text.length > 5 && text}</article>
    </section>
  );
};

export default ConditionalText;

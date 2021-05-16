import { useState, ChangeEvent } from 'react';

const HiddenName = () => {
  const [hiddenName, setName] = useState<string>('');

  const updateHiddenName = (event: ChangeEvent<HTMLInputElement>) => {
    const newName = event.currentTarget.value;
    let cnt = 0;
    if (!newName) {
      setName('');
    } else if (newName.length >= 3) {
      cnt = newName.length - 2;
      setName(newName[0] + '*'.repeat(cnt) + newName[newName.length - 1]);
    }
  };

  return (
    <>
      <input type="text" onChange={updateHiddenName} />
      <article>{hiddenName}</article>
    </>
  );
};

export default HiddenName;

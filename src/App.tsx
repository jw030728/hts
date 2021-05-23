import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Photo from './componant practice/Photo';
import { KeyboardEvent } from 'react';
import WelcomeName from './componant practice/WelcomeName';
import ConditionalText from './componant practice/ConditionalText';
import HiddenName from './componant practice/HiddenName';
import Test from './pages/Test';
import Trade from './pages/Trade';

// //함수 컴포넌트
// function App() {
//   return (
//     <div className="App">
//       {/* 컴포넌트 쓰는법 */}
//       <Title title="Title" subTitle="sub" />
//       <Photo
//         adress="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.98zI18C5RgYxJ3yt0yySNgHaE7%26pid%3DApi&f=1"
//         description="explanation"
//       />
//     </div>
//   );
// }

// const App = () => {
//   return (
//     <>
//       <input type="text" onChange={(event: ChangeEvent<HTMLInputElement>) => console.log(event.currentTarget.value)} />
//     </>
//   );
// };

// const App = () => {
//   return (
//     <>
//       <input
//         type="text"
//         onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
//           console.log(event.key);
//           if (event.key === 'h') {
//             event.preventDefault();
//             event.stopPropagation();
//           }
//         }}
//       />
//     </>
//   );
// };

// //바로위에거 onkeydown에잇던거 return 밖에다가
// const App = () => {
//   const preventKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
//     console.log(event.key);
//     if (event.key === 'h') {
//       event.preventDefault();
//       event.stopPropagation();
//     }
//   };

//   return (
//     <>
//       <input type="text" onKeyDown={preventKeyDown} />
//     </>
//   );
// };

// function App() {
//   return (
//     <div className="App">
//       <HiddenName />
//     </div>
//   );
// }

// const App = () => {
//   const [latestName, setLatestName] = useState('');
//   const updateLatestName = (name: string) => {
//     setLatestName(name);
//   };

//   return (
//     <>
//       <Button name="hello" callback={updateLatestName} />
//       <Button name="world" callback={updateLatestName} />
//       <Button name="nextop" callback={updateLatestName} />
//       <article>{latestName} is cliked</article>
//     </>
//   );
// };

const App = () => {
  return (
    <div className="App">
      <Trade />
    </div>
  );
};

export default App;

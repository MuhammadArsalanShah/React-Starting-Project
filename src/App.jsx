// import reactImg from "./assets/react-core-concepts.png";

// console.log('this is img: ',reactImg);

// const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

// function genRandomNum(max) {
//   return Math.floor(Math.random() * (max + 1));
// }
// function Header() {
//   const description = reactDescriptions[genRandomNum(reactDescriptions.length - 1)];

//   return (
//     <header>
//       <img src={reactImg} alt="Stylized atom" />
//       <h1>React Essentials</h1>
//       <p>
//         {description} React concepts you will need for almost any app you are
//         going to build!
//       </p>
//     </header>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Header />
//       <main>
//         <h2>Time to get started!</h2>
//       </main>
//     </div>
//   );
// }

// export default App;










/**** Coding Exercise 4 ****/

import React from 'react';

export const userData = {
  firstName: 'Arsalan', // feel free to replace the name value
  lastName: 'Shah', // feel free to replace the name value
  title: 'Intern', // feel free to replace the title value
};

// Edit the User component code to output the userData data
export function User() {

  return (
    <div id="user" data-testid="user">
      <h2>
        {userData.firstName} {userData.lastName}
      </h2>
      <p>{userData.title}</p>
    </div>
  );
}

// DON'T edit the App component code
function App() {
  return (
    <div id="app">
      <h1>Time to Practice</h1>
      <p>Welcome on board of this course! You got this 💪</p>
      <User />
    </div>
  );
}

export default App;

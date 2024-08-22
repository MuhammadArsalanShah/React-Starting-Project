/**** Coding Exercise 5 ****/
/*
import Card from './Card';

function App() {
  return (
    <div id="app">
      <h1>Available Experts</h1>
      <Card name="Anthony Blake">
        <p>
          Blake is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="mailto:blake@example.com">Email Anthony</a>
        </p>
      </Card>

      <Card name="Maria Miles">
        <p>
          Maria is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="mailto:blake@example.com">Email Maria</a>
        </p>
      </Card>
    </div>
  );
}

export default App;
*/




/**** Coding Exercise 4 ****/
/*
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
*/

/**** Coding Exercise 5 ****/
/*
export function CourseGoal({title, description}) {
  return (
    <li>
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div id="app" data-testid="app">
      <h1>Time to Practice</h1>
      <p>One course, many goals! 🎯</p>
      <ul>
        <CourseGoal 
          title="Learn React"
          description="In-depth"
        />
        <CourseGoal 
          title="Learn Next.js"
          description="In-depth for future"
        />
        <CourseGoal 
          title="Learn TypeScript"
          description="In-depth and for Next.js"
        />
      </ul>
    </div>
  );
}

export default App;
*/
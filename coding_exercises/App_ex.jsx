/**** Coding Exercise 15 ****/
// import Button from './Button.jsx';
// import { PlusIcon, HomeIcon } from './Icons.jsx';

// function App() {
//   return (
//      <div id="app">
//       <section>
//         <h2>Filled Button (Default)</h2>
//         <p>
//           <Button>Default</Button>
//         </p>
//         <p>
//           <Button mode="filled">Filled (Default)</Button>
//         </p>
//       </section>
//       <section>
//         <h2>Button with Outline</h2>
//         <p>
//           <Button mode="outline">Outline</Button>
//         </p>
//       </section>
//       <section>
//         <h2>Text-only Button</h2>
//         <p>
//           <Button mode="text">Text</Button>
//         </p>
//       </section>
//       <section>
//         <h2>Button with Icon</h2>
//         <p>
//           <Button Icon={HomeIcon}>Home</Button>
//         </p>
//         <p>
//           <Button Icon={PlusIcon} mode="text">
//             Add
//           </Button>
//         </p>
//       </section>
//       <section>
//         <h2>Buttons Should Support Any Props</h2>
//         <p>
//           <Button mode="filled" disabled>
//             Disabled
//           </Button>
//         </p>
//         <p>
//           <Button onClick={() => console.log('Clicked!')}>Click me</Button>
//         </p>
//       </section>
//     </div>
//   );
// }

// export default App;




/**** Coding Exercise 14 ****/
// import Input from './Input';

// function App() {
//   return (
//     <div id="content">
//       <Input type="text" placeholder="Your name" />
//       <Input richText placeholder="Your message" />
//     </div>
//   );
// }

// export default App;

/*=== input.jsx ===*/
// export default function Input({ richText, ...props }) {
//   // return a <textarea> if a richText prop is true
//   // return an <input> otherwise
//   // forward / set the received props on the returned elements
//   console.log(props)
//   let inputField = <input {...props} />
  
//   if (richText) {
//       inputField = <textarea {...props}></textarea>
//   }
//   return inputField;
// }




/**** Coding Exercise 13 ****/
// function Summary({ text }) {
//   return (
//      <>
//         <h1>Summary</h1>
//         <p>{text}</p>
//      </>
//     )
// }

// function App() {
//   return (
//     <div id="app" data-testid="app">
//       <Summary text="Fragments help you avoid unnecessary HTML elements." />
//     </div>
//   );
// }

// export default App;



/**** Coding Exercise 12 ****/
// import React from 'react';

// import Todo from './Todo'

// // don't remove the export keyword here!
// export const DUMMY_TODOS = [
//     'Learn React',
//     'Practice React',
//     'Profit!'
// ];

// // don't change the Component name "App"
// export default function App() {
//   return (
//     <div>
//         {DUMMY_TODOS.map((listItem) => <Todo text={listItem}/> )}
//     </div>
//   );
// }



/**** Coding Exercise 11 ****/
// import React from 'react';

// // don't change the Component name "App"
// export default function App() {
    
//     const [isActive, setIsActive] = React.useState(false)
    
//     function handleClick () {
//         if (isActive === false) {
//           setIsActive(true)  
//         } else {
//             setIsActive(false)
//         }
//     }
    
//     return (
//         <div>
//             <p className={isActive ? 'active' : undefined}>Style me!</p>
//             <button onClick={handleClick}>Toggle style</button>
//         </div>
//     );
// }



/**** Coding Exercise 10 ****/
/*
import React from 'react';

// don't change the Component name "App"
export default function App() {
    
    const [showAlert, setShowAlert] = React.useState(false)
    
    function handleClick (value) {
        value ? setShowAlert(true) : setShowAlert(false);
    }
  
    
    return (
      <div>
        
        {showAlert && ( 
            <div data-testid="alert" id="alert">
              <h2>Are you sure?</h2>
              <p>These changes can't be reverted!</p>
              <button onClick={() => handleClick(false)}>Proceed</button>
            </div>
        )}
        
        <button onClick={() => handleClick(true)}>Delete</button>
      </div>    
    );
}
*/


/**** Coding Exercise 9 ****/
/*
// IMPORTANT: You CAN'T import & use useState like this in this Udemy environment
// import { useState } from 'react'
// Instead, import & use it like this:
import React from 'react';


export default function App() {
    const [discountPrice, setDiscountPrice] = React.useState('$100');
    
    function clickHandle () {
        setDiscountPrice('$75');
    }
    
    return (
        <div>
            <p data-testid="price">{discountPrice}</p>
            <button onClick={clickHandle}>Apply Discount</button>
        </div>
    );
}
*/





/**** Coding Exercise 8 ****/
/*
export const user = {
  name: '',
};

function App() {
  // Your goal: This function should be called WITH A VALUE for name when the <button> is clicked
  function handleCreateUser(name) {
    user.name = name;
  }

  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Name</label>
                <input type="text" />
      </p>

      <p id="actions">
        <button onClick={() => handleCreateUser("userName")}>Create User</button>
      </p>
    </div>
  );
}

export default App;
*/



/**** Coding Exercise 7 ****/
/*
// Your goal is to change the email, password and loggedIn values when the button in the App component is pressed
// Change them to any values of your choice (except loggedIn => that should be changed to true)
// You DON'T need to fetch the values entered into the <input /> fields
// You'll learn about that later in the course - for the moment, those fields are just there to look good :-)
import {useState} from 'react'
export const user = {
  email: '',
  password: '',
  loggedIn: false,
};



// Please note: The login does not actually work!
// This exercise is just about practicing event handling
// You'll learn how to add user authentication to React apps later in the course!
function App() {

  function handleLogin() {
    user.email = 'xyztest@mail.com';
    user.password = '12345';
    user.loggedIn = true;

    console.log(user);
  }
  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Email</label>
        <input type="email" />
      </p>

      <p>
        <label>Password</label>
                <input type="password" />
      </p>

      <p id="actions">
        <button onClick={handleLogin} >Login</button>
      </p>
    </div>
  );
}

export default App;
*/



/**** Coding Exercise 6 ****/
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
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    //We can use react's built in Frangment
    //component to get rid of unneccesary parent
    //elements like <div></div>
    //<Fragment></Fragment>
    // OR
    //Use empty tag. its new element so we don't
    //need <Fragment> component
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;

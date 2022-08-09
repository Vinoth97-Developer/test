import './App.css';
import Todo from './Components/Todo/Todo';
// import Main from './Components/Lifecycle/Main';
// import {createContext} from 'react'
// import Greet from './Components/Greet';

// export const CollageContext=createContext(null);

function App() {
  return (
    <div className="App">
      <Todo/>
      {/* <CollageContext.Provider>
      <Main/>
      </CollageContext.Provider> */}
      {/* <Greet name="Vinoth" course="WebDesigner"/>
      <Greet name="Nisha" course="Java"/>
      <Greet name="Umar" course="Python"/>
      <Greet name="Mani" course=".Net"/> */}
    </div>
  );
}

export default App;

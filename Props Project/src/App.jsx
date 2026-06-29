import { useState } from "react";
import {EXAMPLES, CORE_CONCEPTS} from "./data.js"
import Header from "./Header.jsx";
import CoreConcepts from "./CoreConcepts.jsx";
import TabButton from "./TabButton.jsx";
import CoreConepts from "./components/CoreConepts.jsx";
import Examples from "./components/Examples.jsx";


function App() {
  const [selectedTopic, setSelectedTopic] = useState(undefined)

  function handleClick(tabName){
    setSelectedTopic(tabName)
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
       <CoreConepts />
        <Examples />
      </main>
    </div>
  );
}

export default App; 
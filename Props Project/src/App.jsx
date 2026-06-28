import { useState } from "react";
import {EXAMPLES, CORE_CONCEPTS} from "./data.js"
import Header from "./Header.jsx";
import CoreConcepts from "./CoreConcepts.jsx";
import TabButton from "./TabButton.jsx";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function App() {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("Please Click on a Button")

  function handleClick(tabName){
    setIsSelected(true)
    setSelectedTopic(<div>
      <h3>{EXAMPLES[tabName].title} </h3>
      <p>{EXAMPLES[tabName].description}</p>
      <pre>
        <code>
        {EXAMPLES[tabName].code}
      </code>
      </pre>
    </div>)
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleClick("components")} isSelected={isSelected}>components</TabButton>
            <TabButton onSelect={() => handleClick("jsx")} isSelected={isSelected}>jsx</TabButton>
            <TabButton onSelect={() => handleClick("props")} isSelected={isSelected}>props</TabButton>
            <TabButton onSelect={() => handleClick("state")} isSelected={isSelected}>state</TabButton>
          </menu>
        </section>

        <div id="tab-content">
          {selectedTopic}
        </div>
      </main>
    </div>
  );
}

export default App; 
import { useState } from "react";
import {EXAMPLES, CORE_CONCEPTS} from "./data.js"
import Header from "./Header.jsx";
import CoreConcepts from "./CoreConcepts.jsx";
import TabButton from "./TabButton.jsx";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

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
        <section id="core-concepts">
          <ul>
            {/* <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
            {
              CORE_CONCEPTS.map((concept) => {
                return <CoreConcepts key={concept.title} {...concept}/>
                })
            }
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleClick("components")} selectedTopic={selectedTopic === "components"}>components</TabButton>
            <TabButton onSelect={() => handleClick("jsx")} selectedTopic={selectedTopic === "jsx"}>jsx</TabButton>
            <TabButton onSelect={() => handleClick("props")} selectedTopic={selectedTopic === "props"}>props</TabButton>
            <TabButton onSelect={() => handleClick("state")} selectedTopic={selectedTopic === "state"}>state</TabButton>
          </menu>
        </section>

        <div id="tab-content">    
          {selectedTopic ? <> 
            <h2>{EXAMPLES[selectedTopic].title}</h2>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
          </> : "Please Click on a Button"}      
        
        </div>
      </main>
    </div>
  );
}

export default App; 
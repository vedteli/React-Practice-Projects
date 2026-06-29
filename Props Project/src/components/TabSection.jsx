import React from 'react'

const TabSection = () => {
  return (
    <>
    <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleClick("components")} selectedTopic={selectedTopic === "components"}>components</TabButton>
            <TabButton onSelect={() => handleClick("jsx")} selectedTopic={selectedTopic === "jsx"}>jsx</TabButton>
            <TabButton onSelect={() => handleClick("props")} selectedTopic={selectedTopic === "props"}>props</TabButton>
            <TabButton onSelect={() => handleClick("state")} selectedTopic={selectedTopic === "state"}>state</TabButton>
          </menu>
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
    </>
  )
}

export default TabSection
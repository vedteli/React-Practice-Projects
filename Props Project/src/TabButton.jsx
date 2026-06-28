export default function TabButton({onSelect, selectedTopic, children}){
  return <button 
              onClick={onSelect} 
              className={selectedTopic ? "active" : ""}
            >
              {children}
         </button>
}
export default function TabButton({onSelect, isSelected, children}){
  return <button onClick={onSelect} className={isSelected ? "active" : ""}>{children}</button>
}
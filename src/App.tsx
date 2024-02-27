import { useState } from "react"

function App() {

  const [list, setList] = useState(['Java', 'C++', 'C#', 'Ruby'])

  function addToList(){
    setList(state => [...state, 'Python'])
  }

  function removeFromList(item: string){
    setTimeout(() => {
      setList(state => state.filter(i => i !== item))
    }, 500)
  }
  return (
    <>
     <button onClick={addToList}>Add to list</button>
     <input placeholder="Novo item" type="text" />
     <ul>
      {list.map(item => (
        <li key={item}>
          {item}
          <button onClick={() => removeFromList(item)}>Remover</button>
        </li>
      ))}
     </ul>
    </>
  )
}

export default App

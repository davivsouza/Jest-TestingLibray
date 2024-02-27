import { useState } from "react"

function App() {

  const [list, setList] = useState(['Java', 'C++', 'C#', 'Ruby'])

  function addToList(){
    setList(state => [...state, 'Python'])
  }

  return (
    <>
     <button onClick={addToList}>Add to list</button>
     <ul>
      {list.map(item => (
        <li key={item}>{item}</li>
      ))}
     </ul>
    </>
  )
}

export default App

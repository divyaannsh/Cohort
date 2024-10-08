import { useState } from 'react'
import axios from 'axios'; // Importing axios

import './App.css'
import { useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() =>{
     axios.get("https://sum-server.100xdevs.com/todos")
     .then(function(response) {
      setTodos(response.data.todos)
     })
  },[]);

  return (
    <>
     {todos.map(todo => <Todo title={todo.title} description={todo.description}/> )}
    </>
  )
}



 
export default App




// import { useState } from 'react'
// import axios from 'axios'; // Importing axios

// import './App.css'
// import { useEffect } from 'react';

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() =>{
//      axios.get("https://sum-server.100xdevs.com/todos")
//      .then(function(response) {
//       setTodos(response.data.todos)
//      })
//   },[]);

//   return (
//     <>
//      {todos.map(todo => <Todo title={todo.title} description={todo.description}/> )}
//     </>
//   )
// }

// function Todo(
//   {
//       title , description
//   }
// )
// {
//   return <div>
//     {title}
//     {description}
//   </div>
// }
 
// export default App



// import React from "react";
// import { useState } from "react";

// function App() {
//   const [title, setTitle] = useState("my name is harkirat");

//   return (
//     <div>
//       <Header title={title} setTitle={setTitle} />
//       <Header title={title} setTitle={setTitle} />
//       <Header title="harkirat ww" setTitle={setTitle} />
//       <Header title="harkirat ww" setTitle={setTitle} />
//     </div>
//   );
// }

// const Header = React.memo(function Header({ title, setTitle }) {
//   return (
//     <div>
//       {title}
//       <button onClick={() => setTitle("New Title")}>Change Title</button>
//     </div>
//   );
// });

// export default App;



import React from 'react'
import { useState } from 'react'
function App() {

 const [todos, setTodos] = usestate([{
  id:1,
  title: "Go to gym today",
  description: "go to gym"

 },{

  id:1,
  title: "Go to gym today",
  description: "go to gym"
 },
 {

  id:1,
  title: "Go to gym today",
  description: "go to gym"
 }

])
  return (
    <div>
      {todos.map(todo => <Todo title={todo.title} description={todo.description} />)}
    </div>
  )
}
function Todo({title, description}){
  return <div>
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
}

export default App

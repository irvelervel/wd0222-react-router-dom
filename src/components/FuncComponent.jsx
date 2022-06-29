import { useState } from 'react'

const FuncComponent = () => {
  // opening the body of the function with the curly brackets {}
  // allow you to perform logic in your functional component
  console.log('hello!')

  const [name, setName] = useState('')

  // remember to explicitely put a return statement for outputting your JSX
  return (
    <div>
      <h2>HELLO WORLD</h2>
      <h3>My name is Stefano</h3>
    </div>
  )
}

// if you instead don't have to put any logic into your functional component
// (or anything apart the return statement in a JS function)
// you can safely omit the return statement AND the curly brackets!
const FuncComponent2 = () => (
  <div>
    <h2>HELLO WORLD</h2>
    <h3>My name is Stefano</h3>
  </div>
)

export { FuncComponent, FuncComponent2 }

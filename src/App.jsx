
import './App.css'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Quality></Quality>
    </>
  )
}

function Person() {
  const name = "Fahim";
  const age = 27;
  return (
    <p>I am {name} and I am {age} years old.</p>
  )
}

function Quality() {
  const lang1 = "Python";
  const lang2 = "JavaScript";
  return(
    <div>
      <h2>The qualities I have:</h2>
      <p>I know {lang1}. I have also learned {lang2}.</p>
    </div>
  ) 
}

export default App

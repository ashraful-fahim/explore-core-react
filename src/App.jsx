
import './App.css'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Quality></Quality>
      <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name="Mozumder" tech="JS"></Developer>
      <Developer name="Rajon" tech="python"></Developer>
      <Developer name="Shabana" tech="Java"></Developer>
      <Player name="Tamim" runs="5000"></Player>
      <Player name="Mushi" runs="5000"></Player>
      <Salami event="Eid" amount="4000"></Salami>
      <Salami event="Graduation"></Salami>
    </>
  )
}

// const {name, runs} = {name: 'Tamim', runs: '5000'}
function Player({name, runs}) {
  return (
    <div className='student'>
      <h3>Name: {name}</h3>
      <p>Runs: {runs}</p>
    </div>
  )
}

function Salami({event, amount=0}) {
  return (
    <div className='student'>
      <p>Salami For: {event}</p>
      <p>Amount: {amount}</p>
    </div>
  )
}

function Developer(props) {
  return (
    <div style={{
      border: "2px solid green",
      borderRadius: "20px"
    }}>
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  )
}

function Person() {
  const name = "Fahim";
  const age = 27;
  const personStyle = {
    color: "lightGreen",
    textAlign: "center",
  }
  return (
    <p style={personStyle}>I am {name} and I am {age} years old.</p>
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

function Student() {
  return (
    <div className='student '>
      <p>Name: </p>
      <p>Dept.: </p>
    </div>
  )  
}

export default App

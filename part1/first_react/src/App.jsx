import "./App.css";
import Actor from "./ConditionalRendaring/Actor";
import Part1 from "./ConditionalRendaring/Part1";
import Todolist from "./Todolist";
function App() {

  const actors = [ 'Sadia', 'Afrin','Maria']
  return (
    <>
      <h1></h1>
      <Person grade="3" result="A+"></Person>
      <Person grade="4" result="A"></Person>
      <Person grade="5" result="Fail"></Person>
      <Person></Person>
      <Devoloper></Devoloper>
      <Device name="laptop" price="500"></Device>
      <Device name="Mobile" price="200"></Device>
      <Device name="Radio" price="120"></Device>
      <Device name="Camera" price="600"></Device>
      <Todolist task = "Learn react" position = "first" isDone={true} ></Todolist>
      <Todolist task = "Explore core Concept" position = "secondly" isDone={false} ></Todolist>
      <Todolist task = "try core concept" position = "third" isDone={true} ></Todolist>

      <Part1 task="Learn react" position = "first" isDone={true} ></Part1>
      <Part1 task = "Explore core Concept" position = "secondly" isDone={false} ></Part1>
      <Part1 task = "try core concept" position = "third" isDone={true}></Part1>


      <Actor name = {"Sadia Afrin Maria"}></Actor>

      {
        actors.map(actorName => <Actor name={actorName}></Actor>)
      }
    </>
  );
}
function Person({grade = 0, result = 'not aplicable'}) {
  console.assert(grade, result)
  return (
    <div className="ok">
      <h3>I am a Student of {grade}</h3>
      <h3>Name: Fahad Hossen</h3>
      <h3>My result is  : {result}</h3>
    </div>
  );
}
function Devoloper() {
  const developerStyle = {
    margin: '20px',
    border: '3px solid green',
    padding: '5px',
    borderRadius: '20px'
  }
  return (
    <div style={developerStyle}>
      <h5>Devo devo</h5>
      <p>coding:</p>
      <h2>la lala la</h2>
    </div>
  );
}

function Device(props){
  // console.log(props);
  // console.log(props.name);
  // console.log(props.price);
  return <h2>This is a {props.name} and price of this device is {props.price}</h2>
}
export default App;

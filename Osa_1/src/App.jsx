const App = () => {
  return (
    <div>
      <Header course='Half Stack application development'/>
      <Content />
      <Total exercises1={10} exercises2={7} exercises3={14}/>
    </div>
  )
}


const Header = (props) => {
  return (
  <>
    <h1>{props.course}</h1>
  </>
  )
}

const Content = (props) => {
  return (
  <>
    <Part name='Fundamentals of React' excercise={10}/>
    <Part name='Using props to pass data' excercise={7}/>
    <Part name='State of a component' excercise={14}/>
  </>
  )
}

const Part = (props) => {
  return (
    <>
    <p>
      {props.name} {props.excercise}
    </p>
    </>
  )
}

const Total = (props) => {
  return (
  <>
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  </>
  )
}

export default App
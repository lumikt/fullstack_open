const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </div>
  )
}

const Header = ({name}) => {
  console.log(name)
  return (
  <>
    <h1>{name}</h1>
  </>
  )
}

const Content = ({parts}) => {
  console.log(parts)
  return (
  <>
    <Part name={parts[0].name} exercise={parts[0].exercises}/>
    <Part name={parts[1].name} exercise={parts[1].exercises}/>
    <Part name={parts[2].name} exercise={parts[2].exercises}/>
  </>
  )
}

const Part = ({name, exercise}) => {
  console.log(name,exercise)
  return (
    <>
    <p>
      {name} {exercise}
    </p>
    </>
  )
}

const Total = ({parts}) => {
  console.log(parts)
  return (
  <>
    <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  </>
  )
}

export default App
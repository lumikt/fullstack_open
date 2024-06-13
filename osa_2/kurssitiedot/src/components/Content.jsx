import Part from "./Part"

const Content = ({ parts }) => {
    console.log(parts)
    return (
        parts.map( part =>
            <Part key={part.name} name={part.name} exercise={part.exercises} />
        )
    )
  }

export default Content
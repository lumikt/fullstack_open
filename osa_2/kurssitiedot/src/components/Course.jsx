import Header from  './Header'
import Content from './Content'

const Course = ({ course }) => {
    console.log('I got here')
    console.log(course)
    const parts = course.parts
    console.log('parts',parts)

    const total = parts.reduce( (sum, part) => {
      console.log('wtf?',sum,part.exercises)
      return sum += part.exercises
    },0)

    console.log('total',total)
    return (
        <div>
          <Header name={course.name}/>
          <Content parts={course.parts} />
          <b>Total of {total} exercises</b>
        </div>
      )
    }

export default Course
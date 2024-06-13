const Part = ( {name, exercise }) => {
  console.log(name,exercise)
  return (
    <>
    <p>
      {name} {exercise}
    </p>
    </>
  )
}

export default Part
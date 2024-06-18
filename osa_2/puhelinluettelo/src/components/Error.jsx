const Error = ({ message }) => {
    const errorStyle = {
        borderStyle:'solid',
        borderRadius:'5px',
        borderColor:'red',
        backgroundColor:'lightgray',
        color:'red',
        fontSize:'20px',
        padding:'10px',
        margin:'5px'
    }
    if (message === null) {
      return null
    }
    return (
      <div style={errorStyle}>
        {message}
      </div>
    )
}

export default Error
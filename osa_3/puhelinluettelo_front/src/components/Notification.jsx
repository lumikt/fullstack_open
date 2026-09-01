const Notification = ({ message }) => {
    const notificationStyle = {
        borderStyle:'solid',
        borderRadius:'5px',
        borderColor:'green',
        backgroundColor:'lightgray',
        color:'green',
        fontSize:'20px',
        padding:'10px',
        margin:'5px'
    }
    if (message === null) {
      return null
    }
    return (
      <div style={notificationStyle}>
        {message}
      </div>
    )
}

export default Notification
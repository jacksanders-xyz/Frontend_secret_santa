function IndexButtons(props) {

  return (
    <div>
      <button onClick={props.makeUserButtons}>create user</button>
      <button onClick={props.makeGroupButtons}>create group</button>
    </div>
  )
}

export default IndexButtons;

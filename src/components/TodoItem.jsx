import Card from 'react-bootstrap/Card';

function TodoItem(props) {

  return (
    <Card className="cardTODO">

      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}>
        √
      </span>
      
        <Card.Text className={`TodoItem-CardTitle ${props.completed && 'TodoItem-CardTitle--complete'}`}>{props.text}</Card.Text>

        <span
          className={'Icon Icon-delete'}
          onClick={props.onDelete}>
          X
        </span>

    </Card>

  )
}

export { TodoItem };
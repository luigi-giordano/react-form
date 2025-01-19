const listForm = [
  'Buy groceries',
  'Walk the dog',
  'Finish React project',
  'Read a book'
];

const TodoListForm = () => {

  return (
    <>
      <ul className="list-group">
        {listForm.map((item, index) => (
          <li key={index} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  )

  export default TodoListForm;
import { useState } from 'react';

const initialList = [
  'Buy groceries',
  'Walk the dog',
  'Finish React project',
  'Read a book'
];

const TodoListForm = () => {

  const [todoList, setTodoList] = useState(initialList);
  const [newTodoList, setNewTodoList] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Creazione clone todolist e aggiungo il nuovo elemento
    const newList = [...todoList, newTodoList];
    // Aggiorno la todolist
    setTodoList(newList);
  }

  const handleRemoveList = (index) => {
    // Creazione clone todolist
    const newListList = todoList.filter(item => item.index !== index);
    // Aggiorno la todolist
    setTodoList(newListList);
  }



  return (
    <div className="container my-5">

      <form action="#" onSubmit={handleSubmit}>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={newTodoList}
            onChange={(e) => setNewTodoList(e.target.value)}
            placeholder="Recipient's username"
          />
          <button
            className="btn btn-outline-secondary"
            type="submit"
          >Vai</button>
        </div>

      </form>

      <>
        <ul className="list-group">
          {todoList.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{item}</span>
              <i
                className="fa-solid fa-trash pointer"
                onClick={() => handleRemoveList(index)}>

              </i>
            </li>
          ))}
        </ul>
      </>

    </div>
  )
}
export default TodoListForm;
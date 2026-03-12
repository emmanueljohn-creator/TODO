function TodoItem({ item, index, editTodo, deleteTodo }) {
  return (
    <li>
      {item}
      <div>
        <button className="edit-btn" onClick={() => editTodo(index)}>Edit</button>
        <button className="delete-btn" onClick={() => deleteTodo(index)}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
import React from 'react';
import { Todo, useTodos } from '../../context/TodoContext';


type TodoItemProps = {
  todo: Todo;
  setTodoToEdit: (todo: Todo) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, setTodoToEdit }) => {
  const { deleteTodo, toggleTodo } = useTodos();

  return (
    <div
      className={`p-4 mb-2 border rounded ${
        todo.completed ? 'bg-blue-300' : 'bg-white'
      }`}
    >
      <h3 className="text-lg font-bold">{todo.title}</h3>
      <p className="text-gray-600">{todo.description}</p>
      <div className="flex justify-between mt-2">
        <button
          className={`px-4 py-2 rounded ${
            todo.completed ? 'bg-yellow-500' : 'bg-green-500'
          } text-white`}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
        </button>
        <button
          className="px-4 py-2 bg-blue-150 text-white rounded"
          onClick={() => setTodoToEdit(todo)}
        >
          Edit
        </button>
        <button
          className="px-4 py-2 bg-red-100 text-white rounded"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;

import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { Todo, useTodos } from '../../context/TodoContext';

const TodoList: React.FC = () => {
  const { todos } = useTodos();
  const [todoToEdit, setTodoToEdit] = useState<Todo | null>(null);

  const clearEditMode = () => {
    setTodoToEdit(null);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Todo List</h2>
      <TodoForm todoToEdit={todoToEdit} clearEditMode={clearEditMode} />
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} setTodoToEdit={setTodoToEdit} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;

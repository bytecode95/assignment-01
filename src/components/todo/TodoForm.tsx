import React, { useState, useEffect } from 'react';
import { Todo, useTodos } from '../../context/TodoContext';


type TodoFormProps = {
  todoToEdit?: Todo | null;
  clearEditMode: () => void;
};

const TodoForm: React.FC<TodoFormProps> = ({ todoToEdit, clearEditMode }) => {
  const { addTodo, editTodo } = useTodos();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  useEffect(() => {
    if (todoToEdit) {
      setTitle(todoToEdit.title);
      setDescription(todoToEdit.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [todoToEdit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todoToEdit) {
      editTodo(todoToEdit.id, title, description);
      clearEditMode();
    } else {
      addTodo(title, description);
    }
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-gradient-to-r from-blue-500 to-blue-150 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        {todoToEdit ? 'Update Todo' : 'Add Todo'}
      </button>
    </form>
  );
};

export default TodoForm;

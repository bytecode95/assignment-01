import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

// Define types for the TodoContext
type TodoContextType = {
  todos: Todo[];
  addTodo: (title: string, description: string) => void;
  editTodo: (id: number, title: string, description: string) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

// Create the TodoContext
const TodoContext = createContext<TodoContextType | undefined>(undefined);

// Custom hook to use the TodoContext
export const useTodos = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
};

// Define props for the TodoProvider
type TodoProviderProps = {
  children: ReactNode;
};

// TodoProvider component
export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string, description: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const editTodo = (id: number, title: string, description: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, title, description } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, editTodo, deleteTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

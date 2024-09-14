import React from 'react';
import { TodoProvider } from '../../context/TodoContext';
import TodoList from '../../components/todo/TodoList';
import { useAuth } from '../../context/AuthContext';


const HomePage: React.FC = () => {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-2xl font-bold">Todo App</h1>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-100 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </header>
      <main className="p-4">
        <TodoProvider>
          <TodoList />
        </TodoProvider>
      </main>
    </div>
  );
};

export default HomePage;

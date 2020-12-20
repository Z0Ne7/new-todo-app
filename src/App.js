import React from 'react';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='shadow-md w-128 bg-white my-44 mx-auto relative'>
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import { Header, TodoList, Footer } from './components';

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

import React from 'react';

function Footer(props) {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>1</strong>
        <span> </span>
        <span>items</span>
        <span> left</span>
      </span>

      <ul className='filters'>
        <li>
          <a href='#/'>All</a>
        </li>
        <li>
          <a href='#/'>Active</a>
        </li>
        <li>
          <a href='#/'>Completed</a>
        </li>
      </ul>

      <button className='clear-completed'>Clear completed</button>
    </footer>
  );
}

export default Footer;

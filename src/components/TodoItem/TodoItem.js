

import React, { useState } from 'react';

import "./TodoItem.css";

const Todo = ({ todo }) => {
  const [isDone, setIsDone] = useState(false);

  return (
    <div
      onClick={() => setIsDone(!isDone)}
      className={isDone ? 'done' : 'not-done'}
    >
      {todo}
    </div>
  );
};

export default Todo;

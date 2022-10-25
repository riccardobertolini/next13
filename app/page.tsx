import React, { use } from 'react';
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const data: string = await res.json();
  return data;
}

export default function Page() {
  // This value is fully typed
  // The return value is *not* serialized
  // so you can return Date, Map, Set, etc.
  const data = use(getData());

  return <>
    {
      data?.map(todo => {
        return <div key={todo.id}> 
          <h4>{todo.title}</h4>
          <p>Status: {todo.completed ? 'Completed' : 'Not Completed'}</p>
        </div>
      })
    } 
  </>;
}
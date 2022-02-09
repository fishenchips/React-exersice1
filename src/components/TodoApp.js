//rfce
import React from 'react';
import Todo from './Todo';

/**
 * Part 1: Generate list (See Lists and keys lecture)
 * - Create a function component here, may call it 'TodoApp'
 * - generats a list from the array below, with the array-method .map()
 * - Place the code for listItems, into a new child (function) component, may call it 'Todo'
 * - Add a key to every listItem
 *
 * Part 2: Add an event to the listItems (See Conditional Rendering lecture)
 * - Begin by creating a new function 'handleClick' in 'TodoApp' component
 * - The method will add a class .done, to the target element (e.target)
 * - Pass down the method as a prop, to the child component 'Todo'
 * - Make sure every listItem has the onClick eventhandler, that calls the method 'handleClick'
 * 
 * Part 3 (hard): Conditional rendering (google how to use conditions with .map() )
 * - Make sure every other listItem has the className="odd"
 * 
 * 
 * NOTE! Dont forget to add 'TodoApp' to App.js
 */


const todos = [
    {id: 1, task: 'Syssla 1'},
    {id: 2, task: 'Syssla 2'},
    {id: 3, task: 'Syssla 3'},
    {id: 4, task: 'Syssla 4'},
    {id: 5, task: 'Syssla 5'}
];

function TodoApp() {
   
  return (
    <div>
        {//Declare the map function in the parent and obtain the code through the child component, <Todo />
            todos.map( (todo) => <Todo key={todo.id} todo={todo}/>)   
        } 
    </div>
  )
}

export default TodoApp
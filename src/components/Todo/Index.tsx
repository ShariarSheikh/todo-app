import React, { FC, useState, FormEvent } from 'react';
import { PersonObject } from './interface';
import TodoForm from './TodoForm';
import TodoListFeed from './TodoListFeed';

interface Todo {
  name: string;
  age: number | string;
}

const TodoContainer: FC = () => {
  const [todo, setTodo] = useState<Todo>({ name: '', age: 0 });
  const [todos, setTodos] = useState<PersonObject[]>([]);

  //add todo func
  const handleAdd = (e: FormEvent) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: Date.now(), name: todo.name, age: todo.age },
    ]);
    localStorage.setItem(
      'todos',
      JSON.stringify([
        ...todos,
        { id: Date.now(), name: todo.name, age: todo.age },
      ])
    );

    setTodo({ name: '', age: 0 });
  };

  //remove todo func
  const removeTodoHandler = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    localStorage.setItem(
      'todos',
      JSON.stringify(todos.filter((todo) => todo.id !== id))
    );
  };

  return (
    <div className="w-[768px] m-auto mt-20 min-h-[400px] bg-[#c3bc6d] rounded-xl py-4">
      <h1 className="text-center font-semibold text-4xl uppercase">
        Todo-Person
      </h1>
      <TodoForm todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoListFeed
        todos={todos}
        removeTodoHandler={removeTodoHandler}
      />
    </div>
  );
};

export default TodoContainer;

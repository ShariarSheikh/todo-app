import React, { FC, useEffect, useState } from 'react';
import { PersonObject } from './interface';

interface Props {
  todos: PersonObject[];
  removeTodoHandler: (id: number) => void;
}

const TodoListFeed: FC<Props> = ({ todos, removeTodoHandler }) => {
  const [todoList, setTodoList] = useState<PersonObject[]>([]);

  useEffect(() => {
    const getTodos = JSON.parse(
      `${localStorage.getItem('todos')}` || ''
    );
    setTodoList(getTodos);
  }, [todos]);


  return (
    <div className="w-[610px] m-auto mt-20 min-h-[100px] bg-[#ffffff] rounded-xl py-4">
      <div className="px-4">
        {todoList?.map(({ id, name, age }) => (
          <div
            className="h-10 bg-gray-100 mb-3 py-2 px-4 flex justify-between"
            key={id}
          >
            <div className="flex space-x-6">
              <span className="text-gray-500 mr-20">
                Name: <b>{name}</b>
              </span>
              <span className="text-gray-500">
                Age: <b>{age}</b>
              </span>
            </div>
            <div>
              <svg
                onClick={() => removeTodoHandler(id)}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer active:scale-90 duration-150 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoListFeed;

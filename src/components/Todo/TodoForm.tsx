import React, { FC } from 'react';

interface Todo {
  name: string;
  age: number | string;
}

interface Props {
  todo: Todo;
  setTodo: (todo: Todo) => void;
  handleAdd: (e: React.FormEvent) => void;
}

const TodoForm: FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form
      onSubmit={handleAdd}
      className="w-full flex justify-center space-x-4 pt-8"
    >
      <input
        className="h-10 px-3 rounded-md outline-none border-none"
        type="text"
        placeholder="Enter Your Name"
        required
        value={todo?.name}
        onChange={(e) => setTodo({ ...todo, name: e.target.value })}
      />
      <input
        className="h-10 px-3 rounded-md outline-none border-none"
        type="number"
        placeholder="Enter Your Age"
        min="0"
        step="0"
        required
        value={todo?.age}
        onChange={(e) => setTodo({ ...todo, age: e.target.value })}
      />
      <button
        type="submit"
        className="bg-[#5d9b9d] text-white px-4 h-10 rounded-md  border-none active:scale-95 duration-200"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;

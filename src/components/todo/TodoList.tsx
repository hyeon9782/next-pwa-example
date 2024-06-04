"use client";
import { useState } from "react";
import TodoItem, { Item } from "./TodoItem";

const ITEMS: Item[] = [
  {
    id: 0,
    title: "",
    content: "",
    status: "진행 전",
    startData: "",
    deadline: "",
    createdAt: "",
    updatedAt: "",
  },
  {
    id: 1,
    title: "",
    content: "",
    status: "진행 전",
    startData: "",
    deadline: "",
    createdAt: "",
    updatedAt: "",
  },
  {
    id: 2,
    title: "",
    content: "",
    status: "진행 전",
    startData: "",
    deadline: "",
    createdAt: "",
    updatedAt: "",
  },
];

const TodoList = () => {
  const [items, setItems] = useState<Item[]>(ITEMS);
  return (
    <div>
      {items.map((item) => (
        <TodoItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default TodoList;

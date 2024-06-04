"use client";
import { useState } from "react";
import TodoItem, { Item } from "./TodoItem";

const ITEMS: Item[] = [
  {
    id: 0,
    title: "빨래하기",
    content: "섬유 유연제 꼭 넣기",
    status: "진행 전",
    startData: "",
    deadline: "",
    createdAt: "",
    updatedAt: "",
  },
  {
    id: 1,
    title: "설거지하기",
    content: "뽀득뽀득 소리나게",
    status: "진행 전",
    startData: "",
    deadline: "",
    createdAt: "",
    updatedAt: "",
  },
  {
    id: 2,
    title: "코딩하기",
    content: "1일 1커밋 해보자",
    status: "진행 전",
    startData: "",
    deadline: "",
    createdAt: "",
    updatedAt: "",
  },
];

const TodoList = () => {
  const [items, setItems] = useState<Item[]>(ITEMS);

  const appendItem = (item: Item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const removeItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((prevItem) => prevItem.id !== id));
  };

  const updateItem = () => {};

  return (
    <div>
      {items.map((item) => (
        <TodoItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default TodoList;

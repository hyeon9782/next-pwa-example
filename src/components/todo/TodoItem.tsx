"use client";
import React, { useState } from "react";
export type Item = {
  id: number;
  title: string;
  content: string;
  status: "진행 전" | "진행 중" | "완료";
  startData: string;
  deadline: string;
  createdAt: string;
  updatedAt: string;
};

type Props = {
  item: Item;
};
const TodoItem = ({ item }: Props) => {
  const [itemData, setItemData] = useState(item);
  return (
    <div>
      <input type="checkbox" />
      <input type="text" value={item.title} />
    </div>
  );
};

export default TodoItem;

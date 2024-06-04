"use client";
import React, { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
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
    <li className="flex items-center gap-2">
      <Checkbox className="w-[35px] h-[35px]" />
      <Input value={item.title} />
    </li>
  );
};

export default TodoItem;

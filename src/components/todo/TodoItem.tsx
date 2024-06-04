import React from "react";
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
  return (
    <div>
      <input type="checkbox" />
      <input type="text" />
    </div>
  );
};

export default TodoItem;
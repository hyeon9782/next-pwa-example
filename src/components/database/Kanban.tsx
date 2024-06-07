"use client";
import React, { useState } from "react";
interface Task {
  id: number;
  title: string;
  status: "todo" | "in-progress" | "done";
}
const Kanban = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Task 1", status: "todo" },
    { id: 2, title: "Task 2", status: "in-progress" },
    { id: 3, title: "Task 3", status: "done" },
  ]);

  const handleDragStart = (e: React.DragEvent, taskId: number) => {
    e.dataTransfer.setData("taskId", taskId.toString());
  };

  const handleDrop = (e: React.DragEvent, newStatus: Task["status"]) => {
    const taskId = e.dataTransfer.getData("taskId");
    setTasks(
      tasks.map((task) =>
        task.id === parseInt(taskId) ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Kanban Board</h1>
      <div className="grid grid-cols-3 gap-4">
        {["todo", "in-progress", "done"].map((status) => (
          <div
            key={status}
            className="bg-gray-200 p-4 rounded"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, status as Task["status"])}
          >
            <h2 className="text-xl font-semibold mb-2 capitalize">
              {status.replace("-", " ")}
            </h2>
            {tasks
              .filter((task) => task.status === status)
              .map((task) => (
                <div
                  key={task.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task.id)}
                  className="bg-white p-2 mb-2 rounded shadow"
                >
                  {task.title}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kanban;

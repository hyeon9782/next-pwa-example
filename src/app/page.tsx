import Kanban from "@/components/database/Kanban";
import Table from "@/components/database/Table";
import TodoList from "@/components/todo/TodoList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TodoList />
      <Kanban />
      <Table />
    </main>
  );
}

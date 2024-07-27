"use client";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

export default function Tasks() {
  const { tasks } = useSelector((state) => state.tasks);
  return (
    <section className="py-10 container w-full px-5">
      <div className="flex">
        {tasks.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-5">
            {tasks.map(({ id, todoName, todoBody, completed }) => {
              return (
                <li key={id}>
                  <TodoCard
                    todoName={todoName}
                    todoBody={todoBody}
                    completed={completed}
                    id={id}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <span className="mx-auto pt-10">Topshiriqlar mavjud emas !</span>
        )}
      </div>
    </section>
  );
}

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = {
  tasks: [
    {
      todoBody: "Finish this task",
      todoName: "Task 1",
      completed: false,
      id: "1",
    },
    {
      todoBody: "Learn JavaScript",
      todoName: "Task 2",
      completed: false,
      id: "2",
    },
    {
      todoBody: "Go for a run",
      todoName: "Task 3",
      completed: true,
      id: "3",
    },
    {
      todoBody: "Cook dinner",
      todoName: "Task 4",
      completed: false,
      id: "4",
    },
    {
      todoBody: "",
      todoName: "Task 5",
      completed: true,
      id: "5",
    },
    {
      todoBody: "Clean the house",
      todoName: "Task 6",
      completed: false,
      id: "6",
    },
    {
      todoBody: "",
      todoName: "Task 7",
      completed: false,
      id: "7",
    },
    {
      todoBody: "Pay bills",
      todoName: "Task 8",
      completed: false,
      id: "8",
    },
    {
      todoBody: "Watch a movie",
      todoName: "Task 9",
      completed: true,
      id: "9",
    },
    {
      todoBody: "Go to sleep",
      todoName: "Task 10",
      completed: false,
      id: "10",
    },
  ],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTodo({ tasks }, { payload }) {
      tasks.push(payload);
    },
    removeTodo(state, { payload }) {
      const result = state.tasks.filter((task) => task.id !== payload);
      const deletedTask = state.tasks.find((task) => task.id === payload);
      state.tasks = result;
      toast.success(
        `${deletedTask.todoName} topshirig'i muvaffaqiyatli o'chirildi`
      );
    },
  },
});

export const { addTodo, removeTodo } = tasksSlice.actions;

export default tasksSlice.reducer;

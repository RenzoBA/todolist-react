import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: [
        {
            id: "1",
            title: "Welcome!",
            content: "Here you can save some of your tasks :)",
            owner: "Team",
            date: "-",
            completed: false,
        },
        {
            id: "2",
            title: "Task 1",
            content: "Description of your task",
            owner: "Team",
            date: "-",
            completed: false,
        },
        {
            id: "3",
            title: "Task 2",
            content: "Description of your task",
            owner: "Team",
            date: "-",
            completed: false,
        }],
    reducers: {
        taskAdded: (state, action) => {
            state.push(action.payload)
        },

        taskCompleted: (state, action) => {
            const { completed, id } = action.payload;
            const existingTask = state.find((task) => task.id === id);
            if (existingTask) {
                existingTask.completed = !completed;
            }
        },

        taskDeleted: (state, action) => {
            const { id } = action.payload;
            return state.filter((task) => task.id !== id);
        },

        taskUpdated: (state, action) => {
            const { title, content, owner, date, id } = action.payload;
            const existingTask = state.find((task) => task.id === id);
            if (existingTask) {
                existingTask.title = title;
                existingTask.content = content;
                existingTask.owner = owner;
                existingTask.completed = false;
                existingTask.date = date;
            }
        }
    }
})

export const { taskAdded, taskCompleted, taskDeleted, taskUpdated } = tasksSlice.actions

export default tasksSlice.reducer
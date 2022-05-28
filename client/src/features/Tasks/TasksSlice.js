import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: [
        {
            id: "1",
            title: "Bienvenido/a!",
            content: "Aquí podrás guardar algunas de tus tareas :)", 
        },
        {
            id: "2",
            title: "Segundo task",
            content: "Descripción de la task",
        },],
    reducers: {
        taskAdded: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { taskAdded } = tasksSlice.actions

export default tasksSlice.reducer
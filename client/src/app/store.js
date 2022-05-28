import { configureStore } from "@reduxjs/toolkit";

import tasksReducer from "../features/Tasks/TasksSlice";

export default configureStore({
    reducer: {
        tasks: tasksReducer,
    }
})
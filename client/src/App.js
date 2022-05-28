import React from "react";

import Tasks from "./features/Tasks/Tasks";
import TasksForm from "./features/Tasks/TasksForm";

import { Container, Typography } from "@mui/material";

const App = () => {
  return (
    <Container className="app">
      <Typography variant="h5">New Task:</Typography>
      <TasksForm />
      <Typography variant="h3">Tasks:</Typography>
      <Tasks />
    </Container>
  )
}

export default App
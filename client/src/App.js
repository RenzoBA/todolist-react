import React from "react";

import Navbar from "./features/Navbar/Navbar";
import Tasks from "./features/Tasks/Tasks";
import TasksForm from "./features/Tasks/TasksForm";

import { Container, Typography } from "@mui/material";

const App = () => {

  const [ title, setTitle ] = React.useState("");
  const [ content, setContent ] = React.useState("");
  const [ currentId, setCurrentId ] = React.useState("");

  return (
    <Container className="app">
      <Navbar />
      <Typography variant="h5">New Task:</Typography>
      <TasksForm 
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        currentId={currentId}
        setCurrentId={setCurrentId}
        />
      <Typography variant="h3">Tasks:</Typography>
      <Tasks 
        setTitle={setTitle}
        setContent={setContent}
        setCurrentId={setCurrentId}
      />
    </Container>
  )
}

export default App
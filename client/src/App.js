import React from "react";

import Navbar from "./features/Navbar/Navbar";
import Tasks from "./features/Tasks/Tasks";
import TasksForm from "./features/Tasks/TasksForm";

import { useSelector } from "react-redux";

import { Container, Typography } from "@mui/material";

const App = () => {

  const tasks = useSelector((state) => state.tasks);

  const [ title, setTitle ] = React.useState("");
  const [ content, setContent ] = React.useState("");
  const [ owner, setOwner ] = React.useState("");
  const [ currentId, setCurrentId ] = React.useState("");

  return (
    <Container>
      <Navbar />
      <Typography variant="h6" sx={{fontFamily: "Nunito"}}>New Task:</Typography>
      <TasksForm 
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        currentId={currentId}
        setCurrentId={setCurrentId}
        owner={owner}
        setOwner={setOwner}
      />
      <Typography variant="h4" sx={{fontFamily: "Nunito"}} className="title">Tasks ({tasks.length}):</Typography>
      <Tasks 
        setTitle={setTitle}
        setContent={setContent}
        setCurrentId={setCurrentId}
        setOwner={setOwner}
      />
    </Container>
  )
}

export default App
import React from "react";

import Navbar from "./features/Navbar/Navbar";
import Tasks from "./features/Tasks/Tasks";
import TasksForm from "./features/Tasks/TasksForm";

import { Container } from "@mui/material";

const App = () => {

  const [ title, setTitle ] = React.useState("");
  const [ content, setContent ] = React.useState("");
  const [ owner, setOwner ] = React.useState("");
  const [ currentId, setCurrentId ] = React.useState("");

  return (
    <Container className="app">
      <Navbar />
      <Container sx= {{display: "flex", justifyContent: "center", gap: 2}}>
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
        <Tasks 
          setTitle={setTitle}
          setContent={setContent}
          setCurrentId={setCurrentId}
          setOwner={setOwner}
          />
      </Container>
    </Container>
  )
}

export default App
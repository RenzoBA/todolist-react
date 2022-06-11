import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  taskCompleted,
  taskDeleted,
} from "./TasksSlice";

import { Typography, Container, Accordion, AccordionSummary, AccordionDetails, Checkbox, IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const Tasks = ({ setTitle, setContent, setOwner, setCurrentId }) => {

  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const renderTasks = tasks.map((task) => (
    <Accordion preventDefault key={task.id}>
      
      <AccordionSummary>
        <Typography variant="h5" className={task.completed ? "tachado" : null}>{task.title}</Typography>

        <Checkbox 
          color="default"
          onChange={() => dispatch(taskCompleted({ id: task.id, completed: task.completed }))}
          checked={task.completed}
        />

        <IconButton onClick={() => dispatch(taskDeleted({ id: task.id }))}>
          <Delete />
        </IconButton>

        <IconButton onClick={() => {
          setTitle(task.title);
          setContent(task.content);
          setCurrentId(task.id);
          setOwner(task.owner);
        }}>
          <Edit />
        </IconButton>

      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="h6" className="contenido">By:</Typography>
        <Typography variant="h5" className={task.completed ? "tachado" : null}>{task.owner}</Typography>
        <Typography variant="h6" className="contenido">Description:</Typography>
        <Typography variant="h5" className={task.completed ? "tachado" : null}>{task.content}</Typography>
      </AccordionDetails>
    </Accordion>
  ))

  return (
    <Container>
      {renderTasks}
    </Container>
  )
}

export default Tasks
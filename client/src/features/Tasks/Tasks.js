import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  taskCompleted,
  taskDeleted,
} from "./TasksSlice";

import { Typography, Button, Container, Card, CardContent, ButtonGroup } from "@mui/material";

import "./styles.css";

const Tasks = ({ setTitle, setContent, setOwner, setCurrentId}) => {

  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const renderTasks = tasks.map((task) => (

    <Card sx={{ width: 300, bgcolor: "#F0F0F0"}} key={task.id}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">{task.owner}</Typography>
        <Typography variant="h5" component="div">{task.title}</Typography>
        {(task.completed) ?
        <Typography sx={{ mb: 3.5, width: 74, pl: 1, fontSize: 15, color: "white", borderRadius: 50, background: "#aed581" }}>Complete</Typography> :
        <Typography sx={{ mb: 3.5, fontSize: 15 }} color="text.secondary">
          {task.date}
        </Typography>
        }
        <Typography variant="body2">{task.content}</Typography>
        <ButtonGroup variant="text" sx={{ mt: 2, display: "flex", justifyContent: "center"}}>
          <Button sx={{fontSize: 13}} onClick={() => dispatch(taskCompleted({ id: task.id, completed: task.completed }))}>{task.completed ? "INCOMPLETE" : "COMPLETE"}</Button>
          <Button sx={{fontSize: 13}} onClick={() => {
            setTitle(task.title);
            setContent(task.content);
            setCurrentId(task.id);
            setOwner(task.owner);
          }}>EDIT</Button>
          <Button sx={{fontSize: 13}} onClick={() => dispatch(taskDeleted({ id: task.id }))}>DELETE</Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  ))

  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="h4" sx={{fontFamily: "Nunito"}}>Tasks ({tasks.length}):</Typography>
      <Container className="taskes" sx={{ display: "grid"}}>
        {renderTasks}
      </Container>
    </Container>
  )
}

export default Tasks
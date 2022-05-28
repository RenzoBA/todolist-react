import React from "react";
import { useSelector } from "react-redux";
import { Typography, Container, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const Tasks = () => {

  const tasks = useSelector((state) => state.tasks);

  const renderTasks = tasks.map((task) => (
    <Accordion>
      <AccordionSummary>
        <Typography variant="h5">{task.title}</Typography>
        <ExpandMore />
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="h6">{task.content}</Typography>
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
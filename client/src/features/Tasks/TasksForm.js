import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    taskAdded,
} from "./TasksSlice";
import { nanoid } from "@reduxjs/toolkit";

import { TextField, Button, Box } from "@mui/material";

import "./styles.css";


const TasksForm = () => {

    const [ title, setTitle ] = React.useState("")
    const [ content, setContent ] = React.useState("")
    
    const tasks = useSelector((state) => state.tasks) 
    //useSelector puede utilizarse si se quiere agregar otras caracteristicas a la app como editor de task.
    const dispatch = useDispatch()

    const addNewtask = () => {
        if ( title && content ) {
            dispatch(taskAdded({ title, content, id: nanoid() }));
            setTitle("");
            setContent("");
        }
    }

    return (
        <Box className="box" sx={{ width: 300 }}>
            <TextField 
                label="Título:"
                value={title}
                onChange={e => setTitle(e.target.value)}
                fullWidth    
            />
            <br />
            <TextField 
                label="Contenido:"
                value={content}
                onChange={e => setContent(e.target.value)}
                multiline    
                rows={4}
                fullWidth    
            />
            <br />
            <Button className="buttonAdd" onClick={addNewtask} variant="contained">Agregar</Button>
            {/* AHORA TOCA AGREGAR UN BOTON QUE AGREGE TASKS AL LISTADO */}
        </Box>
    )
}

export default TasksForm
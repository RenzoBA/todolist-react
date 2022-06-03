import React from "react";
import { useDispatch } from "react-redux";
import {
    taskAdded, 
    taskUpdated,
} from "./TasksSlice";
import { nanoid } from "@reduxjs/toolkit";

import { TextField, Button, Box } from "@mui/material";

import "./styles.css";


const TasksForm = ({ title, setTitle, content, setContent, currentId, setCurrentId }) => {
    
    const dispatch = useDispatch()

    const addNewtask = () => {
        dispatch(taskAdded({ title, content, completed: false, id: nanoid() }));
        setTitle("");
        setContent("");
    }

    const updatedTask = () => {
        dispatch(taskUpdated({ title, content, completed: false, id: currentId }))
        setTitle("");
        setContent("");
        setCurrentId("");
    }

    return (
        <Box className="box" sx={{ width: 300 }}>
            <TextField 
                label="Title:"
                value={title}
                onChange={e => setTitle(e.target.value)}
                fullWidth    
            />
            <br />
            <TextField 
                label="Content:"
                value={content}
                onChange={e => setContent(e.target.value)}
                multiline    
                rows={4}
                fullWidth    
            />
            <br />
            <Button 
                className="buttonAdd" 
                onClick={currentId ? updatedTask : addNewtask}
                variant="contained">
                    {currentId ? "Update" : "Add"}
            </Button>
        </Box>
    )
}

export default TasksForm
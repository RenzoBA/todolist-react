import React from "react";
import { useDispatch } from "react-redux";
import {
    taskAdded, 
    taskUpdated,
} from "./TasksSlice";
import { nanoid } from "@reduxjs/toolkit";

import { TextField, Button, Box } from "@mui/material";

import "./styles.css";


const TasksForm = ({ title, setTitle, content, setContent, owner, setOwner, currentId, setCurrentId }) => {
    
    const dispatch = useDispatch()

    const addNewtask = () => {
        dispatch(taskAdded({ title, content, owner, completed: false, id: nanoid() }));
        setTitle("");
        setContent("");
        setOwner("");
    }

    const updatedTask = () => {
        dispatch(taskUpdated({ title, content, owner, completed: false, id: currentId }))
        setTitle("");
        setContent("");
        setOwner("");
        setCurrentId("");
    }

    return (
        <Box className="box" sx={{ width: 300 }}>
            <TextField 
                label="Title:"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <TextField
                label="By:"
                value={owner}
                onChange={e => setOwner(e.target.value)}
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
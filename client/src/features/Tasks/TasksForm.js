import React from "react";
import { useDispatch } from "react-redux";
import {
    taskAdded, 
    taskUpdated,
} from "./TasksSlice";
import { nanoid } from "@reduxjs/toolkit";

import { TextField, Button, Box, Snackbar } from "@mui/material";

import "./styles.css";

const TasksForm = ({ title, setTitle, content, setContent, owner, setOwner, currentId, setCurrentId }) => {
    
    const dispatch = useDispatch(); 
    
    const currentDate = () => {
        const date = new Date();
        const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
        
        return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`
    }

    const [ date, setDate ] = React.useState(currentDate());
    const [ openAlert, setOpenAlert ] = React.useState(false);
    const [ message, setMessage ] = React.useState("");
    
    const addNewtask = () => {
        dispatch(taskAdded({ title, content, owner, date, completed: false, id: nanoid() }));
        setTitle("");
        setContent("");
        setOwner("");
        setMessage("Tarea creada 👍")
    }
    
    const updatedTask = () => {
        dispatch(taskUpdated({ title, content, owner, date, completed: false, id: currentId }))
        setTitle("");
        setContent("");
        setOwner("");
        setCurrentId("");
        setMessage("Tarea actualizada ✌️")
    }
    
    const buttonAction = () => {
        setDate(currentDate());
        setOpenAlert(true); 

        if (!title || !owner) {
            setMessage("Faltan datos 👀")
        } else {
            return currentId ? updatedTask() : addNewtask();
        }
    }

    return (
        <Box className="box" sx={{ width: 300 }}>
            <TextField
                label="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                />
            <TextField
                label="By"
                value={owner}
                onChange={e => setOwner(e.target.value)}
            />
            <br />
            <TextField
                label="Content"
                value={content}
                onChange={e => setContent(e.target.value)}
                multiline    
                rows={4}
            />
            <br />
            <Button
                onClick={buttonAction}
                variant="contained" >
                    {currentId ? "Update" : "Add"}
            </Button>
            <Snackbar 
                message={message} 
                open={openAlert} 
                autoHideDuration={4000} 
                onClose={() => setOpenAlert(false)}>
            </Snackbar>
        </Box>
    )
}

export default TasksForm
import React from "react";
import { useDispatch } from "react-redux";
import {
    taskAdded, 
    taskUpdated,
} from "./TasksSlice";
import { nanoid } from "@reduxjs/toolkit";

import { TextField, Typography, Button, Box, Snackbar } from "@mui/material";

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
        <Box className="box">
          <Typography variant="h6" sx={{fontFamily: "Nunito"}}>NEW TASK</Typography>
            <TextField
                sx={{width: "90%", mt: 2, mb: 2}}
                label="Title"
                value={title}
                variant="standard"
                onChange={e => setTitle(e.target.value)}
                required
                />
            <TextField
                sx={{width: "90%", mb: 8}}
                label="By"
                value={owner}
                variant="standard"
                onChange={e => setOwner(e.target.value)}
                required
                />
            <TextField
                sx={{width: "90%", mb: 4}}
                label="Content"
                value={content}
                variant="filled"
                onChange={e => setContent(e.target.value)}
                multiline    
                rows={4}
            />
            <br />
            <Button
                sx={{width: "90%", mb: 2}}
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
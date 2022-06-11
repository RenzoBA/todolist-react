import React from "react";
import { Container, Typography } from "@mui/material"

import "./styles.css";

const Navbar = () => {
  return (
    <Container className="navbar">
        <Typography variant="h2" className="navbar-title">TEAM TODO LIST</Typography>
    </Container>
  )
}

export default Navbar
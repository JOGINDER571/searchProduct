 import {
    AppBar,
    Button,
    Toolbar,
    Typography,
    // Menu,
    // MenuItem,
    IconButton,
    Drawer,
    // List,
    // ListItemText,
    // ListItemButton,
    // Container,
    // Theme,
  } from "@mui/material";
  import LoginIcon from "@mui/icons-material/Login";
  import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
  import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
  import React, { useState } from "react";
  
  import { useNavigate, Link } from "react-router-dom";
  const Navbar = () => {
    const [open, setOpen] = useState(false);
  
    let navigate = useNavigate();
  
  
    const handleLogout = () => {
      
    };
    return (
      <>
        <Drawer open={open} onClose={() => setOpen(false)}>
          {/* <List
            disablePadding
            sx={{ width: "250px" }}
            onClick={() => setOpen(false)}
          >
            <ListItemButton component={Link} to="/">
              <ListItemText primary="Home"></ListItemText>
            </ListItemButton>
            <ListItemButton component={Link} to="/profile">
              <ListItemText primary="Profile"></ListItemText>
            </ListItemButton>
            <ListItemButton component={Link} to="/contact">
              <ListItemText primary="Contact Us"></ListItemText>
            </ListItemButton>
            <ListItemButton component={Link} to="/about">
              <ListItemText primary="About Us"></ListItemText>
            </ListItemButton>
            <ListItemButton component={Link} to="/allInternships">
              <ListItemText primary="All Internships"></ListItemText>
            </ListItemButton>
            {userInfo ? (
              <>
                {
                  userInfo.data.isEmployer === true ? (
                    <>
                      <ListItemButton component={Link} to="/employer/dashboard">
                        <ListItemText primary="Employer Dashboard"></ListItemText>
                      </ListItemButton>
                      <ListItemButton component={Link} to="/employer/applications">
                        <ListItemText primary="Employer Applications"></ListItemText>
                      </ListItemButton>
                    </>
                  ) : (
                    <ListItemButton component={Link} to="myapplications">
                      <ListItemText primary="My Applications"></ListItemText>
                    </ListItemButton>
                  )
                }
              </>
            ) : ("")}
          </List> */}
        </Drawer>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" onClick={() => setOpen(true)}>
              <MenuRoundedIcon />
            </IconButton>
            <Typography
              variant="h6"
              style={{ flexGrow: 1, textDecoration: "none" }}
              color="inherit"
              component={Link}
              to="/"
            >
              Marg Darshan
            </Typography>
            <div>
              
                  {/* <div style={{ display: "flex" }}>
                    <p style={{ marginTop: "10px" }}> Welcome, </p>
                    <h1 style={{ marginLeft: "5px" }}>MARG DARSHAN</h1>
                    <Button
                      variant="contained"
                      sx={{ mr: 2, ml: 2 }}
                      color="inherit"
                      style={{ backgroundColor: "red" }}
                      endIcon={<LoginIcon fontSize="small" />}
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </div> */}
                  <Button
                    variant="contained"
                    sx={{ mr: 2 }}
                    color="inherit"
                    style={{ backgroundColor: "#5996ff" }}
                    endIcon={<LoginIcon fontSize="small" />}
                    component={Link}
                    to="/login"
                  >
                    Login
                  </Button>
                  <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                        <Link to="/signup" style={{ textDecoration: "none" }}>
                          <Button
                            variant="contained"
                            style={{ color: "white", backgroundColor: "#23b502" }}
                          >
                            Register
                          </Button>
                        </Link>
                    )}
                  </PopupState>
            </div>
          </Toolbar>
        </AppBar>
      </>
    );
  };
  
  export default Navbar;
  
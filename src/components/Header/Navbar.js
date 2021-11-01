import React from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./SideDrawer";
import AddProduct from "../AddProduct";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <SideDrawer />
          <Typography variant="h6" className={classes.title}>
            Medical DB
          </Typography>
          <Box flex="1" />
          <AddProduct />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;

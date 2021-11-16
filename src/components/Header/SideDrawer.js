import React, { useState } from "react";
import {
  ListItem,
  Box,
  Drawer,
  Button,
  List,
  Divider,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export default function SideDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen((open) => !open);
  };

  return (
    <div>
      <IconButton
        onClick={toggleDrawer}
        edge="start"
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor={"left"} open={open} onClose={toggleDrawer}>
        <List>
          {["Tablet", "Baby Products", "Injections", "Vitamins"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  <MenuIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
        <List>
          <ListItem button>
            <ListItemIcon>
              <MenuIcon />
            </ListItemIcon>
            Profile
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

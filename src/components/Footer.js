import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

function Footer() {
  return (
    <>
      <AppBar position="static" color="primary">
        <Container maxWidth="xs">
          <Toolbar>
            <Typography variant="body1" color="inherit">
              © 2021 Aditya Singh
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Footer;

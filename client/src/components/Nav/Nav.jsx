import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router";

export default function Nav() {
  const history = useHistory();

  const onHome = () => {
    history.push("/");
  };

  return (
    <div>
      <AppBar position="fixed" align="center">
        <Toolbar>
          <Typography m={2} t={3} variant="h6" color="inherit" noWrap>
            <Button
              onClick={onHome}
              color="inherit"
              style={{ textTransform: "none" }}
            >
              Home
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

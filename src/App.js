import React, { useState } from "react";

import { Container, Grow, AppBar, Typography, Grid } from "@material-ui/core";

import useStyles from "./styles";

import Articles from "./components/Articles/Articles";
import SideNews from "./components/SideNews/SideNews";

function App() {
  const [terms, setTerms] = useState("");
  const [getTerms, setGetTerms] = useState("");
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static" color="primary">
          <Typography align="center" className={classes.heading} variant="h4">
            NewsToolz
          </Typography>
        </AppBar>
      </div>
      <Grow in>
        <Container>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              setTerms(setGetTerms);
              setTerms("");
            }}
            className="form-inline md-form form-sm mt-0"
          >
            <i className="fas fa-search" aria-hidden="true"></i>
            <input
              className="form-control form-control-sm ml-3 w-100 m-2"
              type="text"
              placeholder="Search by category..."
              aria-label="Search"
              value={terms}
              onChange={(e) => {
                setTerms(e.target.value);
              }}
            />
          </form>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Articles />
            </Grid>
            <Grid item xs={12} sm={4}>
              <SideNews getTerms={getTerms} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;

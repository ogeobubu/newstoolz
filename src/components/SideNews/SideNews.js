import React, { useState, useEffect } from "react";

import { Typography, Paper, CircularProgress } from "@material-ui/core";

import useStyles from "./styles";

import moment from "moment";

// import uuid from "uuid;

function SideNews({ getTerms }) {
  const classes = useStyles();
  const [randNews, setRandNews] = useState([]);
  // const id = uuid;

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    fetch(
      `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=${
        getTerms === "" ? "technology" : getTerms
      }&apiKey=b9a13946c7484b58bc61415646f847ff`,
      { signal: signal }
    )
      .then((response) => response.json())
      .then((data) => {
        setRandNews(data.articles);
      });

    return function cleanup() {
      abortController.abort();
    };
  }, [getTerms]);
  return !randNews.length ? (
    <CircularProgress />
  ) : (
    <Paper className={classes.paper}>
      <Typography variant="h5" className={classes.heading}>
        Top Headlines on {getTerms === "" ? "Technology" : getTerms}
      </Typography>
      {randNews &&
        randNews.map((randNewsItem) => {
          return (
            <Typography className={classes.headlines} component="p">
              {randNewsItem.title}{" "}
              <span style={{ fontSize: "0.9rem", color: "gray" }}>
                {moment(randNewsItem.publishedAt).fromNow()}
              </span>{" "}
              -{" "}
              <a href={randNewsItem.url} target="_blank">
                Read More
              </a>
            </Typography>
          );
        })}
    </Paper>
  );
}

export default SideNews;

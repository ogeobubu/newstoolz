import React, { useState, useEffect } from "react";

import { Typography, Paper, CircularProgress } from "@material-ui/core";

import useStyles from "./styles";

import moment from "moment";

function SideNews({ getTerms }) {
  const classes = useStyles();
  const [randNews, setRandNews] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    fetch(
      `https://cors-anywhere.herokuapp.com/https://gnews.io/api/v4/search?lang=en&q=${
        getTerms === "" ? "technology" : getTerms
      }&token=9fb47aa83689c67a12320436a968da0b`,
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
            <Typography
              key={randNewsItem.title}
              className={classes.headlines}
              component="p"
            >
              {randNewsItem.title}{" "}
              <p style={{ fontSize: "0.9rem", color: "gray" }}>
                {moment(randNewsItem.publishedAt).fromNow()}
              </p>
              <a
                style={{ textDecoration: "none" }}
                href={randNewsItem.url}
                rel="noreferrer"
                target="_blank"
              >
                Read More
              </a>
            </Typography>
          );
        })}
    </Paper>
  );
}

export default SideNews;

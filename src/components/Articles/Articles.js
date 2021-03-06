import React, { useState, useEffect } from "react";
import { CircularProgress, Grid } from "@material-ui/core";
import Article from "./Article/Article";

import useStyles from "./styles";

function Articles() {
  const classes = useStyles();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://gnews.io/api/v4/top-headlines?lang=en&country=us&token=9fb47aa83689c67a12320436a968da0b"
    )
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
      });
  }, []);
  return !articles.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {articles.map((article) => (
        <Grid key={article.title} item xs={12} sm={6}>
          <Article article={article} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Articles;

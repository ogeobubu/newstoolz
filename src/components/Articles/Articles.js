import React, { useState, useEffect } from "react";
import { CircularProgress, Grid } from "@material-ui/core";
import Article from "./Article/Article";

import useStyles from "./styles";

function Articles() {
  const classes = useStyles();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=ng&apiKey=b9a13946c7484b58bc61415646f847ff"
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
